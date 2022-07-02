import Link from "next/link";
import PanelTemplate from "components/templates/panel";
import Button from "components/common/Button";
import Text from "components/common/Text";
import { EmptyStateWrapper, HeadingWrapper } from "./styles";
import useSWR from "swr";
import { Table, Tb, Tr, Th, Td, Row, Container } from "components/pages/dev/panel/styles";

//@ts-ignore
const fetcher = (...args: any) => fetch(...args).then((res) => res.json())


const CompanyProfilePage = () => {
  const { data, error,mutate } = useSWR(`/api/application/company`, fetcher);
 console.log(data)
  return (
    <PanelTemplate>
      <Container>
        <HeadingWrapper>
          <Text variant="headingLarge">Track recruitment progress of your listing</Text>
        </HeadingWrapper>
        {data?.length > 0 ?
          <Table >
            <Tb>
              <Tr>
                <Th>Job Title</Th>
                <Th>Num of Applications</Th>
                <Th>Status</Th>
                <Th>Actions</Th>
              </Tr>
              {data?.map((item:any) => 
              <Tr key={`table-row-${item._id}`}>
                <Td>{item.jobOffer.jobTitle}</Td>
                <Td>{item.count}</Td>
                <Td>OPEN</Td>
                <Td>
                  <Row>
                    <Link href={`/company/panel/applications/${item.jobOffer._id}`}>
                      <Button variant="default" size="sm" style={{ marginRight: 10}}>See all applicants</Button>
                    </Link>
                    {/* <Button variant="destructive" size="sm" onClick={() =>handleDeleteOffer(item._id)}>Delete</Button> */}
                  </Row>
                </Td>
              </Tr>)}
              
            </Tb>
          </Table> : 
          <Text variant="headingLarge">Looks like you haven't made any application yet.</Text>}
        </Container>
    </PanelTemplate>
  );
};

export default CompanyProfilePage;
