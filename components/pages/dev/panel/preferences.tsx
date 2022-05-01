import Button from "components/common/Button";
import Card from "components/common/Card";
import Chip from "components/common/Chip";
import IconButton, { IconPropType } from "components/common/IconButton";
import { UnregisterInput as Input } from "components/common/Input";
import Text from "components/common/Text";
import PanelTemplate from "components/templates/panel";
import Select from "react-select";
import {
  Container,
  PreferencesWrapper,
  ButtonsWrapper,
  InputsWrapper,
} from "./styles";
import {
  techSkills,
  searchStatus,
  locationOptions,
  remoteOptions,
  companyStage,
  companyType,
  industryType,
  seniorityOptions,
  employmentType,
  mainTech,
} from "lib/mongo/profileData";
import { usePrefferences, KeyType } from "hooks/usePrefferences";

const Preferences = () => {
  const {
    state,
    isLoading,
    handleChangeSingleValue,
    handleChangeMultiValue,
    isSingleActive,
    isPresentInArray,
    handleChangeInput,
    handleUpdatePreferences,
    handleChangeTechSkills,
  } = usePrefferences();
  return (
    <PanelTemplate>
      <PreferencesWrapper>
        <Container style={{ marginBottom: 20 }}>
          <Text variant="headingLarge">Preferences</Text>
        </Container>
        <Card>
          <Text variant="headingSmall">What is your status in job search?</Text>
          <ButtonsWrapper>
            {searchStatus.map((item) => (
              <IconButton
                text={item.text}
                iconType={item.icon as IconPropType}
                key={item.text}
                handleClick={() =>
                  handleChangeSingleValue(item.type as KeyType, item.value)
                }
                isActive={isSingleActive(item.type as KeyType, item.value)}
              />
            ))}
          </ButtonsWrapper>
        </Card>
        <Card>
          <Text variant="headingSmall">Where would you like to work?</Text>
          <ButtonsWrapper>
            {locationOptions.map((item) => (
              <Chip
                name={item.text}
                handleClick={() =>
                  handleChangeMultiValue(item.type as KeyType, item.value)
                }
                active={isPresentInArray(item.type as KeyType, item.value)}
              />
            ))}
          </ButtonsWrapper>
        </Card>
        <Card>
          <Text variant="headingSmall">Are you willing to work remotely?</Text>
          <ButtonsWrapper>
            {remoteOptions.map((item) => (
              <Chip
                name={item.text}
                handleClick={() =>
                  handleChangeSingleValue(item.type as KeyType, item.value)
                }
                active={isSingleActive(item.type as KeyType, item.value)}
              />
            ))}
          </ButtonsWrapper>
        </Card>
        <Card>
          <Text variant="headingSmall">
            What stage should the company be in?
          </Text>
          <ButtonsWrapper>
            {companyStage.map((item) => (
              <IconButton
                text={item.text}
                iconType={item.icon as IconPropType}
                key={item.text}
                handleClick={() =>
                  handleChangeSingleValue(item.type as KeyType, item.value)
                }
                isActive={isSingleActive(item.type as KeyType, item.value)}
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
              <IconButton
                text={item.text}
                iconType={item.icon as IconPropType}
                key={item.text}
                handleClick={() =>
                  handleChangeSingleValue(item.type as KeyType, item.value)
                }
                isActive={isSingleActive(item.type as KeyType, item.value)}
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
              <Chip
                handleClick={() =>
                  handleChangeMultiValue(item.type as KeyType, item.value)
                }
                active={isPresentInArray(item.type as KeyType, item.value)}
                name={item.text}
              />
            ))}
          </ButtonsWrapper>
        </Card>
        <Card>
          <Text variant="headingSmall">Seniority</Text>
          <ButtonsWrapper>
            {seniorityOptions.map((item) => (
              <Chip
                name={item.text}
                handleClick={() =>
                  handleChangeSingleValue(item.type as KeyType, item.value)
                }
                active={isSingleActive(item.type as KeyType, item.value)}
              />
            ))}
          </ButtonsWrapper>
        </Card>
        <Card>
          <Text variant="headingSmall">Employment type</Text>
          <ButtonsWrapper>
            {employmentType.map((item) => (
              <Chip
                handleClick={() =>
                  handleChangeSingleValue(item.type as KeyType, item.value)
                }
                active={isSingleActive(item.type as KeyType, item.value)}
                name={item.text}
              />
            ))}
          </ButtonsWrapper>
        </Card>
        <Card>
          <Text variant="headingSmall">
            Let's talk about money. How about your annual salary expectations?
          </Text>
          <InputsWrapper>
            <Input
              label="What is your minimum expectation?"
              name="minSalary"
              type="number"
              onChange={(e) =>
                handleChangeInput(
                  e.target.name as KeyType,
                  Number(e.target.value)
                )
              }
              value={state.minSalary}
            />
            <Input
              label="What is your maximum expectation?"
              name="maxSalary"
              type="number"
              onChange={(e) =>
                handleChangeInput(
                  e.target.name as KeyType,
                  Number(e.target.value)
                )
              }
              value={state.maxSalary}
            />
          </InputsWrapper>
        </Card>
        <Card>
          <Text variant="headingSmall">Choose your main technology.</Text>
          <ButtonsWrapper>
            {mainTech.map((item) => (
              <Chip
                handleClick={() =>
                  handleChangeMultiValue(item.type as KeyType, item.value)
                }
                active={isPresentInArray(item.type as KeyType, item.value)}
                name={item.name}
              />
            ))}
          </ButtonsWrapper>
        </Card>
        <Card>
          <Text variant="headingSmall">
            Share with us your skills and more tech stack
          </Text>
          <Text variant="subheadingMedium">
            Choose as many tech skills as you like
          </Text>
          <InputsWrapper style={{ width: 600 }}>
            <Select
              isMulti
              options={techSkills}
              onChange={(value) => handleChangeTechSkills(value)}
            />
          </InputsWrapper>
        </Card>
        <Button
          variant="primary"
          onClick={() => handleUpdatePreferences()}
          loading={isLoading}
        >
          Update your preferences
        </Button>
      </PreferencesWrapper>
    </PanelTemplate>
  );
};

export default Preferences;
