import Link from "next/link";
import PanelTemplate from "components/templates/panel";
import Button from "components/common/Button";
import Text from "components/common/Text";
import { HeadingWrapper } from "./styles";
import useSWR from "swr";
import { Table, Tb, Tr, Th, Td, Row, Container } from "components/pages/dev/panel/styles";
import { useRouter } from "next/router";

//@ts-ignore
const fetcher = (...args: any) => fetch(...args).then((res) => res.json())


const ApplicationDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error,mutate } = useSWR(`/api/application/company/${id}`, fetcher);

  const handleUpdateApplicationStatus= async (applicationID: string, status: "SECOND STAGE" | "REJECTED" ) => {
    try{
      const req = await fetch(`/api/application/company/update/${applicationID}`,{ 
        method: 'PUT',
        headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({status})
    })
    if(req) mutate();
    }catch(err){
      console.log(err)
    }
  };

  return (
    <PanelTemplate>
      <Container>
        <HeadingWrapper>
          <Text variant="headingLarge"> {data && data[0]?.jobOffer?.jobTitle} Applications</Text>
        </HeadingWrapper>
        {data?.length > 0 ?
          <Table >
            <Tb>
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Socials</Th>
                <Th>Status</Th>
                <Th>Actions</Th>
              </Tr>
              {data?.length > 0 && data?.map((item:any) => 
              <Tr key={`table-row-${item._id}`}>
                <Td>{item.jobSeeker.firstName} {item.jobSeeker.lastName}</Td>
                <Td>
                  <Text variant="link">
                    <a href={`mailto: ${item.jobSeeker.email}`}>{item.jobSeeker.email}</a>
                  </Text>
                </Td>
                <Td>
                  {item.jobSeeker.linkedin && 
                    <Text variant="link">
                      <a href={item.jobSeeker.linkedin} target="_blank">LinkedIn</a>
                    </Text>}{" "}
                  {item.jobSeeker.github &&
                    <Text variant="link">
                      <a href={item.jobSeeker.github} target="_blank">GitHub</a>
                    </Text>
                  }
                  </Td>
                <Td>{item.status}</Td>
                <Td>
                  <Row>
                      {item.status == "PENDING" ?
                        <Button
                          variant="primary"
                          size="sm"
                          style={{ marginRight: 10}}
                          onClick={() => handleUpdateApplicationStatus(item._id, "SECOND STAGE")}
                        >
                          Invite for 2nd stage
                        </Button> : null }
                      {item.status == "REJECTED" ?
                        null
                        :
                        <Button
                          variant="primaryDestructive" 
                          size="sm"
                          style={{ marginRight: 10}}
                          onClick={() => handleUpdateApplicationStatus(item._id, "REJECTED")}
                        >
                          Decline
                        </Button>
                      }
                  </Row>
                </Td>
              </Tr>)}
              
            </Tb>
          </Table> : 
          <Text variant="headingLarge">Looks like you haven't made any application yet. <Link href="matchmaking"><Text variant="link">Apply and get hired within days!</Text></Link></Text>} 
        </Container>
    </PanelTemplate>
  );
};

export default ApplicationDetailsPage;
