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
  const { data, error,mutate } = useSWR(`/api/company/posts/matchmaking/${id}`, fetcher);
  const { data: applications,mutate: mutateApplications } = useSWR(`/api/application/company/${id}`, fetcher);

  const hasApplication = (userId: string) => applications.find((application:any)=> application.jobSeeker?.userId === userId);
  const handleInviteForInterview = async (jobSeeker: string) => {
    try{
      const req = await fetch("/api/application/invite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({offerId: data.jobOffer._id, jobSeeker}),
      });
      mutateApplications();
    }catch(error){
      console.log(error)
    };
  }
  return (
    <PanelTemplate>
      <Container>
        <HeadingWrapper>
          <Text variant="headingLarge"> {data && data?.jobOffer?.jobTitle} Top Matched Candidates</Text>
        </HeadingWrapper>
        {data&& data.matchedUsers?.length> 0 ? 
        <Table>
          <Tb>
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Socials</Th>
                <Th>CV</Th>
                <Th>Match</Th>
                <Th>Actions</Th>
              </Tr>
              {data&& data.matchedUsers && data.matchedUsers.map((user:any)=>(
                <Tr key={`matched-user-${user._id}`}>
                  <Td>{user.firstName} {user.lastName}</Td>
                  <Td>
                    <Text variant="link">
                      <a href={`mailto: ${user.email}`}>{user.email}</a>
                    </Text>
                   </Td>
                   <Td>
                    {user.linkedin && 
                      <Text variant="link">
                        <a href={`//${user.linkedin}`} target="_blank">LinkedIn</a>
                      </Text>}{" "}
                    {user.github &&
                      <Text variant="link">
                        <a href={`//${user.github}`} target="_blank">GitHub</a>
                      </Text>
                    }
                  </Td>
                  <Td>
                    CV link
                  </Td>
                  <Td>
                    {user.match}%
                  </Td>
                  <Td>
                    {hasApplication(user.userId) ?
                      <Button variant="primaryDestructive" disabled>Invited</Button>
                     : 
                     <Button
                        variant="primary"
                        onClick={() => handleInviteForInterview(user.userId)}
                      >
                          Invite for interview
                      </Button>
                    }
                    
                  </Td>
                </Tr>
              ))}
          </Tb>
        </Table> :null}
        </Container>
    </PanelTemplate>
  );
};

export default ApplicationDetailsPage;
