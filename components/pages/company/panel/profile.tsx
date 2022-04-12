import Button from "components/common/Button";
import Card from "components/common/Card";
import Input from "components/common/Input";
import Text from "components/common/Text";
import TextArea from "components/common/TextArea";
import PanelTemplate from "components/templates/panel";
import UploadCV from "components/ui/UploadCV";
import { useForm } from "react-hook-form";
import { Container, FormWrapper, Column } from "./styles";

const CompanyProfilePage = () => {
  const { register, handleSubmit, formState } = useForm();
  console.log(formState);
  const onSubmit = (data: any) => console.log(data);
  return (
    <PanelTemplate>
      <Container>
        <Text variant="headingLarge">Company Profile</Text>
        <Text variant="subheadingLarge">
          Complete your company profile & start hiring best matched candidates!
        </Text>
      </Container>
      <FormWrapper id="companyProfile" onSubmit={handleSubmit(onSubmit)}>
        <Column>
          <Card title="COMPANY DETAILS">
            <Input
              label="Name"
              name="firstName"
              register={register}
              type="text"
              placeholder="Name"
              required
              //   error={errors.firstName ? "This field is required" : ""}
            />
            {/*<Input
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
            /> */}
          </Card>
        </Column>
        <Column>
          <Card title="SOCIALS LINKS">
            {/* <Input
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
            /> */}
          </Card>
          <Card title="UPLOAD YOUR LOGO">
            {/* <UploadCV
              setPreview={(prev: string) =>
                handleChangeSingleValue("cvLink", prev)
              }
              preview={state.cvLink}
            /> */}
          </Card>
        </Column>
      </FormWrapper>
      <Button
        variant="primary"
        type="submit"
        form="companyProfile"
        // loading={isLoading}
        // onClick={() => handleUpdateProfile()}
      >
        Update Company Profile
      </Button>
    </PanelTemplate>
  );
};

export default CompanyProfilePage;
