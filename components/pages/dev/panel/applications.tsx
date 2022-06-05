import Image from 'next/image';
import Button from "components/common/Button";
import Text from "components/common/Text";
import PanelTemplate from "components/templates/panel";
import Link from "next/link";
import useSWR from "swr";
import { Container, HeadingWrapper, Table, Tb,Th,Tr,Td,Row, LogoMock } from "./styles";


//@ts-ignore
const userApplicationsFetcher = (...args: any) => fetch(...args).then((res) => res.json())


const MatchMakingPage = () => {
  const { data, error, mutate } = useSWR(`/api/application/job-seeker`, userApplicationsFetcher);

  const handleDelete = async(id:string) =>{
    const req = await fetch(`/api/application/${id}`, { method: 'DELETE' });
  };
  const handleDeleteOffer = async(id:string) =>{
    if(window.confirm("Delete this job post?")) {
      try{
        await handleDelete(id);
        const newData = data?.filter((application:any) => application._id !== id);
        await mutate(newData, false);
      }catch(err){ console.log(err)}
      
    }
  }
  return (
    <PanelTemplate>
      <Container>
        <HeadingWrapper>
          <Text variant="headingLarge">Your Applications</Text>
        </HeadingWrapper>
        {data?.length > 0 ?
        <Table >
          <Tb>
            <Tr>
              <Th></Th>
              <Th>Job Title</Th>
              <Th>Company Name</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </Tr>
            {data?.map((item:any) => 
            <Tr key={`table-row-${item._id}`}>
              <Td>{item.company.logo?
                <Image width={40} height={40} src={item.company.logo} />
                  :
                <LogoMock>{item.company.companyName[0]}</LogoMock>}
              </Td>
              <Td>{item.jobOffer.jobTitle}</Td>
              <Td>{item.company.companyName}</Td>
              <Td>{item.status}</Td>
              <Td>
                <Row>
                  <Link href={`/job-offers/${item.jobOffer._id}`}>
                    <Button variant="default" size="sm" style={{ marginRight: 10}}>See the offer</Button>
                  </Link>
                  <Button variant="destructive" size="sm" onClick={() =>handleDeleteOffer(item._id)}>Delete</Button>
                </Row>
              </Td>
            </Tr>)}
            
          </Tb>
        </Table> : <Text variant="headingLarge">Looks like you haven't made any application yet. <Link href="matchmaking"><Text variant="link">Apply and get hired within days!</Text></Link></Text>}
      </Container>
    </PanelTemplate>
  );
};

export default MatchMakingPage;
