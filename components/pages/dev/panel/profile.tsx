import Button from "components/common/Button";
import Card from "components/common/Card";
import Input from "components/common/Input";
import Text from "components/common/Text";
import TextArea from "components/common/TextArea";
import PanelTemplate from "components/templates/panel";
import UploadCV from "components/ui/UploadCV";
import { useEffect, useMemo, useState } from "react";
import { Container, FormWrapper, Column } from "./styles";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { toast } from "react-toastify";
//@ts-ignore
const fetcher = (...args: any) => fetch(...args).then((res) => res.json());

const DevProfilePage = () => {
  const { data } = useSWR(`/api/user/profile`, fetcher);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [file, setFile] = useState<string>("");
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

  const handleSetFile = (file:string) => {
    setFile(file);
  }

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const req = await fetch("/api/user/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({...data, cvLink: file}),
      });
      toast.success("🦄 Your profile has been updated");
      setIsLoading(false);
    } catch (e) {
      toast.warning("There was an error trying to update your profile");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    reset(data);
    if(data?.cvLink) setFile(data.cvLink)
  }, [data]);

  return (
    <PanelTemplate>
      <Container>
        <Text variant="headingLarge">My Profile</Text>
        <Text variant="subheadingLarge">
          Complete your profile & apply with just one click!
        </Text>
      </Container>
      <FormWrapper id="profile" onSubmit={handleSubmit(onSubmit)}>
        <Column>
          <Card title="USER DETAILS">
            <Input
              label="Name"
              type="text"
              name="firstName"
              placeholder="Name"
              register={register}
              required="This field is required"
              error={errors?.firstName?.message}
            />
            <Input
              label="Surrname"
              type="text"
              name="lastName"
              placeholder="Surrname"
              register={register}
              required="This field is required"
              error={errors?.lastName?.message}
            />
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="Email"
              disabled
              register={register}
            />
            <Input
              label="City"
              type="text"
              name="city"
              placeholder="City"
              register={register}
              required="This field is required"
              error={errors?.city?.message}
            />
            <TextArea
              label="Introduce yourself"
              name="introduction"
              register={register}
              required="This field is required"
              placeholder="Introduce yourself"
              error={errors?.introduction?.message}
            />
          </Card>
        </Column>
        <Column>
          <Card title="SOCIALS LINKS">
            <Input
              label="Your LinkedIn"
              type="text"
              name="linkedin"
              register={register}
              required="This field is required"
              placeholder="Type your LinkedIn profile URL"
              error={errors?.linkedin?.message}
            />
            <Input
              label="Your GitHub"
              type="text"
              name="github"
              register={register}
              required="This field is required"
              placeholder="Type your GitHub profile URL"
              error={errors?.github?.message}
            />
          </Card>
          <Card title="UPLOAD YOUR CV">
            <UploadCV
              setPreview={(prev: string) =>
                handleSetFile(prev)
              }
              preview={file}
            />
          </Card>
        </Column>
      </FormWrapper>
      <Button
        variant="primary"
        loading={isLoading}
        type="submit"
        form="profile"
      >
        Update Your Profile
      </Button>
    </PanelTemplate>
  );
};

export default DevProfilePage;
