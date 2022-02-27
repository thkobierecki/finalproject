import Button from "components/common/Button";
import Card from "components/common/Card";
import Input from "components/common/Input";
import Text from "components/common/Text";
import TextArea from "components/common/TextArea";
import PanelTemplate from "components/templates/panel";
import UploadCV from "components/ui/UploadCV";
import { ChangeEvent, useState } from "react";
import { Container, FormWrapper, Column } from "./styles";

const DevProfilePage = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "th.kobierecki@gmail.com",
    city: "",
    introduction: "",
    linkedin: "",
    github: "",
  });
  const [errors, setError] = useState({
    firstName: "",
    lastName: "",
    city: "",
    introduction: "",
    linkedin: "",
    github: "",
  });
  const [preview, setPreview] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setState({ ...state, [e.target.name]: e.target.value });
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
              error={errors.firstName}
            />
            <Input
              label="Surrname"
              type="text"
              name="lastName"
              value={state.lastName}
              placeholder="Surrname"
              required
              onChange={handleChange}
              error={errors.lastName}
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
              error={errors.city}
            />
            <TextArea
              label="Introduce yourself"
              name="introduction"
              value={state.introduction}
              placeholder="Introduce yourself"
              required
              onChange={handleChange}
              error={errors.introduction}
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
              error={errors.linkedin}
            />
            <Input
              label="Your GitHub"
              type="text"
              name="github"
              value={state.github}
              placeholder="Type your GitHub profile URL"
              required
              onChange={handleChange}
              error={errors.github}
            />
          </Card>
          <Card title="UPLOAD YOUR CV">
            <UploadCV
              setPreview={(prev: string) => setPreview(prev)}
              preview={preview}
            />
          </Card>
        </Column>
      </FormWrapper>
      <Button variant="primary">Update Your Profile</Button>
    </PanelTemplate>
  );
};

export default DevProfilePage;
