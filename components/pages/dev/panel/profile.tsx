import Button from "components/common/Button";
import Card from "components/common/Card";
import Input from "components/common/Input";
import Text from "components/common/Text";
import TextArea from "components/common/TextArea";
import PanelTemplate from "components/templates/panel";
import UploadCV from "components/ui/UploadCV";
import { ChangeEvent } from "react";
import { Container, FormWrapper, Column } from "./styles";
import { useUserProfile, KeyType } from "hooks/useUserProfile";

const DevProfilePage = () => {
  const {
    state,
    isLoading,
    errors,
    handleChangeSingleValue,
    handleUpdateProfile,
  } = useUserProfile();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    handleChangeSingleValue(e.target.name as KeyType, e.target.value);
  return (
    <PanelTemplate>
      <Container>
        <Text variant="headingLarge">My Profile</Text>
        <Text variant="subheadingLarge">
          Complete your profile & apply with just one click!
        </Text>
      </Container>
      <FormWrapper>
        <Column>
          <Card title="USER DETAILS">
            <Input
              label="Name"
              type="text"
              name="firstName"
              value={state.firstName}
              placeholder="Name"
              required
              onChange={handleChange}
              error={errors.firstName ? "This field is required" : ""}
            />
            <Input
              label="Surrname"
              type="text"
              name="lastName"
              value={state.lastName}
              placeholder="Surrname"
              required
              onChange={handleChange}
              error={errors.lastName ? "This field is required" : ""}
            />
            <Input
              label="Email"
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              placeholder="Email"
              disabled
            />
            <Input
              label="City"
              type="text"
              name="city"
              value={state.city}
              placeholder="City"
              required
              onChange={handleChange}
              error={errors.city ? "This field is required" : ""}
            />
            <TextArea
              label="Introduce yourself"
              name="introduction"
              value={state.introduction}
              placeholder="Introduce yourself"
              required
              onChange={handleChange}
              error={errors.introduction ? "This field is required" : ""}
            />
          </Card>
        </Column>
        <Column>
          <Card title="SOCIALS LINKS">
            <Input
              label="Your LinkedIn"
              type="text"
              name="linkedin"
              value={state.linkedin}
              placeholder="Type your LinkedIn profile URL"
              required
              onChange={handleChange}
              error={errors.linkedin ? "This field is required" : ""}
            />
            <Input
              label="Your GitHub"
              type="text"
              name="github"
              value={state.github}
              placeholder="Type your GitHub profile URL"
              required
              onChange={handleChange}
              error={errors.github ? "This field is required" : ""}
            />
          </Card>
          <Card title="UPLOAD YOUR CV">
            <UploadCV
              setPreview={(prev: string) =>
                handleChangeSingleValue("cvLink", prev)
              }
              preview={state.cvLink}
            />
          </Card>
        </Column>
      </FormWrapper>
      <Button
        variant="primary"
        loading={isLoading}
        onClick={() => handleUpdateProfile()}
      >
        Update Your Profile
      </Button>
    </PanelTemplate>
  );
};

export default DevProfilePage;
