import Button from "components/common/Button";
import Card from "components/common/Card";
import Chip from "components/common/Chip";
import IconButton from "components/common/IconButton";
import Input from "components/common/Input";
import Text from "components/common/Text";
import PanelTemplate from "components/templates/panel";
import { ChangeEvent, useState } from "react";
import { Container, PreferencesWrapper, ButtonsWrapper } from "./styles";
const searchStatus = [
  { text: "Actively looking", value: 0, icon: "search" },
  { text: "Open for proposals", value: 1, icon: "openLock" },
  { text: "I'm not looking for a job", value: 2, icon: "closedLock" },
];
const companyStage = [
  { type: "companyStage", icon: "check", text: "Doesn't matter", value: 0 },
  {
    type: "companyStage",
    icon: "earlyBuilding",
    text: "Early stage (0-30)",
    value: 1,
  },
  {
    type: "companyStage",
    icon: "growthBuilding",
    text: "Growth stage (30-100)",
    value: 2,
  },
  {
    type: "companyStage",
    icon: "establishedBuilding",
    text: "Established (100-250)",
    value: 3,
  },
  {
    type: "companyStage",
    icon: "corpoBuilding",
    text: "Corpo (250+)",
    value: 4,
  },
];

const companyType = [
  { type: "companyType", icon: "check", text: "Doesn't matter", value: 0 },
  { type: "companyType", text: "Startup", value: 1, icon: "rocket" },
  { type: "companyType", text: "Software house", value: 2, icon: "chemistry" },
  { type: "companyType", text: "E-commerce", value: 3, icon: "ecommerce" },
  { type: "companyType", text: "Corpo", value: 3, icon: "jobCorporation" },
];
const industryType = [
  { type: "industryType", name: "Startup", value: 1 },
  { type: "industryType", name: "Software house", value: 2 },
  { type: "industryType", name: "E-commerce", value: 3 },
  { type: "industryType", name: "Fintech", value: 4 },
  { type: "industryType", name: "Blockchain", value: 5 },
  { type: "industryType", name: "B2B", value: 6 },
  { type: "industryType", name: "B2C", value: 7 },
  { type: "industryType", name: "Artificial Inteligence", value: 8 },
  { type: "industryType", name: "Healthcare", value: 9 },
  { type: "industryType", name: "Retail", value: 10 },
  { type: "industryType", name: "SaaS", value: 11 },
  { type: "industryType", name: "Education", value: 12 },
  { type: "industryType", name: "Mobile", value: 13 },
];
const Preferences = () => {
  const [state, setState] = useState({});
  return (
    <PanelTemplate>
      <PreferencesWrapper>
        <Container>
          <Text variant="headingLarge">Preferences</Text>
        </Container>
        <Card>
          <Text variant="headingSmall">What is your status in job search?</Text>
          <ButtonsWrapper>
            {searchStatus.map((item) => (
              //@ts-ignore
              <IconButton
                text={item.text}
                iconType={item.icon}
                key={item.text}
                isActive={false}
              />
            ))}
          </ButtonsWrapper>
        </Card>
        <Card>
          <Text variant="headingSmall">Where would you like to work?</Text>
        </Card>
        <Card>
          <Text variant="headingSmall">Are you willing to work remotely?</Text>
        </Card>
        <Card>
          <Text variant="headingSmall">
            What stage should the company be in?
          </Text>
          <ButtonsWrapper>
            {companyStage.map((item) => (
              //@ts-ignore
              <IconButton
                text={item.text}
                iconType={item.icon}
                key={item.text}
                isActive={false}
              />
            ))}
          </ButtonsWrapper>
        </Card>
        <Card>
          <Text variant="headingSmall">
            For what kind of company would you like to work for
          </Text>
          <ButtonsWrapper>
            {companyType.map((item) => (
              //@ts-ignore
              <IconButton
                text={item.text}
                iconType={item.icon}
                key={item.text}
                isActive={false}
              />
            ))}
          </ButtonsWrapper>
        </Card>
        <Card>
          <Text variant="headingSmall">
            Projects in which industry would you like to develop?
          </Text>
          <ButtonsWrapper>
            {industryType.map((item) => (
              <Chip active={false} name={item.name} />
            ))}
          </ButtonsWrapper>
        </Card>
        <Card>
          <Text variant="headingSmall">Seniority</Text>
        </Card>
        <Card>
          <Text variant="headingSmall">Employment type</Text>
        </Card>
        <Card>
          <Text variant="headingSmall">
            Let's talk about money. How about your annual salary expectations?
          </Text>
        </Card>
        <Card>
          <Text variant="headingSmall">Choose your main technology.</Text>
        </Card>
        <Card>
          <Text variant="headingSmall">
            Share with us your skills and more tech stack
          </Text>
        </Card>
      </PreferencesWrapper>
    </PanelTemplate>
  );
};

export default Preferences;
