import Button from "components/common/Button";
import PreferenceCard from "components/common/PreferenceCard";
import Text from "components/common/Text";
import PanelTemplate from "components/templates/panel";
import OfferCard from "components/ui/OfferCard";
import Link from "next/link";
import { Container, RowPreferencesWrapper, HeadingWrapper } from "./styles";

const MatchMakingPage = () => {
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
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
      </Container>
    </PanelTemplate>
  );
};

export default MatchMakingPage;
