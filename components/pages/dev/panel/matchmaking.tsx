import Button from "components/common/Button";
import Loader from "components/common/Loader";
import PreferenceCard from "components/common/PreferenceCard";
import Text from "components/common/Text";
import PanelTemplate from "components/templates/panel";
import OfferCard from "components/ui/OfferCard";
import Link from "next/link";
import useSWR from "swr";
import { JobOffer } from "types";
import { jobOfferAdapter } from "utils/jobOfferAdapter";
import { Container, RowPreferencesWrapper, HeadingWrapper } from "./styles";

type JobOffersData = {
  jobOffers: JobOffer[];
}

//@ts-ignore
const fetcher = (...args: any) => fetch(...args)
  .then((res) => res.json())
  .then((data: JobOffersData)=>data.jobOffers)
  .then((jobOffers) => jobOffers?.map(jobOffer => jobOfferAdapter(jobOffer)));

const MatchMakingPage = () => {
  const { data, error } = useSWR(`/api/job-offers`, fetcher);
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
          <PreferenceCard type="location" value="London" sub="LOCATION" />
          <PreferenceCard type="salary" value="36k-50k GBP" sub="SALARY" />
          <PreferenceCard type="mainTech" value="JavaScript" sub="MAIN TECH" />
          <PreferenceCard type="techSkills" value="React" sub="SKILLS" />
          <PreferenceCard type="isRemote" value="Yes" sub="REMOTE" />
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
