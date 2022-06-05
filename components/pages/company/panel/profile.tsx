import useSWR from "swr";
import { toast } from "react-toastify";
import Button from "components/common/Button";
import Card from "components/common/Card";
import Input from "components/common/Input";
import Select from "components/common/Select";
import Text from "components/common/Text";
import TextArea from "components/common/TextArea";
import PanelTemplate from "components/templates/panel";
import {
  companyStage,
  companyType,
  industryType,
} from "lib/mongo/profileData";
import { useForm } from "react-hook-form";
import { Container, FormWrapper, Column } from "./styles";
import { useEffect, useMemo, useState } from "react";
import UploadLogo from "components/ui/UploadLogo";

//@ts-ignore
const fetcher = (...args: any) => fetch(...args).then((res) => res.json());

const CompanyProfilePage = () => {
  const { data } = useSWR(`/api/company/profile`, fetcher);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [logo, setLogo] = useState<string>("");
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: useMemo(() => {
      return data;
    }, [data]),
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const req = await fetch("/api/company/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({...data, logo}),
      });
      toast.success("🦄 Your company profile has been updated");
      setIsLoading(false);
    } catch (e) {
      toast.warning("There was an error trying to update your company profile");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if(data?.error) return;
    reset(data);
    if(data?.logo) setLogo(data?.logo)
  }, [data]);
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
              label="Company name"
              name="companyName"
              register={register}
              type="text"
              placeholder="Company name"
              required="This field is required"
              error={errors?.companyName?.message}
            />
           <TextArea
              label="Introduce your company"
              name="introduction"
              register={register}
              required="This field is required"
              placeholder="Introduce your company"
              error={errors?.introduction?.message}
            />
            <Input
              label="Company location"
              name="companyLocation"
              register={register}
              type="text"
              placeholder="Company HQ location"
              required="This field is required"
              error={errors?.companyLocation?.message}
            />
            <Select
              label="Company stage"
              name="companyStage"
              register={register}
              placeholder="Company Stage"
              required="This field is required"
              options={companyStage}
              error={errors?.companyStage?.message}
            />
            <Select
              label="Company Type"
              name="companyType"
              register={register}
              placeholder="Company Type"
              required="This field is required"
              options={companyType}
              error={errors?.companyType?.message}
            />
            <Select
              label="Company industry ty[e"
              name="industryType"
              register={register}
              placeholder="Company industry type"
              required="This field is required"
              options={industryType}
              error={errors?.industryType?.message}
            />
          </Card>
        </Column>
        <Column>
          <Card title="SOCIALS LINKS">
            <Input
              label="Company website"
              type="text"
              name="socials.website"
              register={register}
              required="This field is required"
              placeholder="Type your company website profile URL"
              error={errors?.socials?.linkedin?.message}
            />
            <Input
              label="Company LinkedIn"
              type="text"
              name="socials.linkedin"
              register={register}
              placeholder="Type your copmany LinkedIn profile URL"
              error={errors?.socials?.linkedin?.message}
            />
            <Input
              label="Company Twitter"
              type="text"
              name="socials.twitter"
              register={register}
              placeholder="Type your company Twitter profile URL"
              error={errors?.socials?.twitter?.message}
            />
          </Card>
          <Card title="UPLOAD YOUR LOGO">
            <UploadLogo setPreview={setLogo} preview={logo}/>
          </Card>
        </Column>
      </FormWrapper>
      <Button
        variant="primary"
        loading={isLoading}
        type="submit"
        form="companyProfile"
      >
        Update Company Profile
      </Button>
    </PanelTemplate>
  );
};

export default CompanyProfilePage;
