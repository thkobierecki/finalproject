import Button from "components/common/Button";
import Loader from "components/common/Loader";
import PreferenceCard from "components/common/PreferenceCard";
import Text from "components/common/Text";
import PanelTemplate from "components/templates/panel";
import OfferCard from "components/ui/OfferCard";
import Link from "next/link";
import useSWR from "swr";
import { JobOffer, UserPreferencesType } from "types";
import { jobOfferAdapter, userPreferencesAdapter } from "utils/jobOfferAdapter";
import { Container, RowPreferencesWrapper, HeadingWrapper } from "./styles";

type JobOffersData = {
  jobOffers: JobOffer[];
}
//@ts-ignore
const userDataFetcher = (...args: any) => fetch(...args)
  .then((res) => res.json())
  .then((data: UserPreferencesType) =>userPreferencesAdapter(data));

//@ts-ignore
const fetcher = (...args: any) => fetch(...args)
  .then((res) => res.json())
  .then((data: JobOffersData)=>data.jobOffers)
  .then((jobOffers) => jobOffers?.map(jobOffer => jobOfferAdapter(jobOffer)));

const MatchMakingPage = () => {
  const { data, error } = useSWR(`/api/job-offers`, fetcher);
  const { data: userData, error: userDataErrors } = useSWR("/api/user/profile/preferences", userDataFetcher);
  console.log(userData)
  return (
    <PanelTemplate>
      <Container>
        <HeadingWrapper>
          <Text variant="headingLarge">Your Preferences</Text>
          <Link href={"/dev/panel/preferences"}>
            <Button className="editButton">Edit</Button>
          </Link>
        </HeadingWrapper>

        <RowPreferencesWrapper>
          <PreferenceCard type="location" value={userData?.location[0]?.text} sub="LOCATION" numOfMoreItems={userData?.location.slice(0).length}/>
          <PreferenceCard type="salary" value={`${userData?.minSalary} - ${userData?.maxSalary} GBP`} sub="SALARY" />
          <PreferenceCard type="mainTech" value={userData?.mainTech[0]?.text} sub="MAIN TECH" numOfMoreItems={userData?.mainTech.slice(0).length}/>
          <PreferenceCard type="techSkills" value={userData?.techSkills[0]?.label} sub="SKILLS" numOfMoreItems={userData?.techSkills.slice(0).length}/>
          <PreferenceCard type="isRemote" value={userData?.isRemote ? 'YES' : 'NO'} sub="REMOTE" />
        </RowPreferencesWrapper>
      </Container>
      <Container>
        <Text variant="headingLarge">Your Matches</Text>
      </Container>
      <Container>
        {error && <Text variant="headingLarge">There was an error loading your matches. Try to reload the page!</Text>}
        {!data && <Loader height={60} width={60}/>}
        {data && data?.length < 1 ? <Text variant="headingLarge">We haven't found any matches for you yet. Try to update tour preferences.</Text> :
        data?.map(jobOffer => <OfferCard jobOffer={jobOffer} key={`match-making-offer-${jobOffer._id}`} userType={'DEVELOPER'}/>)}
      </Container>
    </PanelTemplate>
  );
};

export default MatchMakingPage;
