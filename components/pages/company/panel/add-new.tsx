import { useState } from "react";
import { toast } from "react-toastify";
import { useForm, Controller } from "react-hook-form";
import MultiSelect from "react-select";
import Card from "components/common/Card";
import Input from "components/common/Input";
import Select from "components/common/Select";
import PanelTemplate from "components/templates/panel";
import Button from "components/common/Button";
import Text from "components/common/Text";
import { HeadingWrapper,FormWrapper, Column,CardWrapper  } from "./styles";
import {
  remoteOptions,
  seniorityOptions,
  employmentType,
  locationOptions,
  mainTech,
  techSkills
} from "lib/mongo/profileData";
import EditorConvertToHTML from "components/common/Editor";


const CompanyProfilePage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const req = await fetch("/api/company/posts/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      toast.success("🦄 Succesully created new job offer!");
      setIsLoading(false);
    } catch (e) {
      toast.warning("There was an error trying to add new job offer");
      setIsLoading(false);
    }
  };
  return (
    <PanelTemplate>
      <HeadingWrapper>
        <Text variant="headingLarge">Add New Job Offer</Text>
      </HeadingWrapper>
      <FormWrapper id="newJobOfferForm" onSubmit={handleSubmit(onSubmit)}>
        <Column style={{width: '60%'}}>
          <Card title="JOB DETAILS">
            <CardWrapper>
            <Column>
              <Input
                label="Job Title"
                name="jobTitle"
                register={register}
                type="text"
                placeholder="Job Title"
                required="This field is required"
                error={errors?.jobTile?.message}
              />
              <Input
                label="Minimum Salary"
                name="minSalary"
                register={register}
                type="text"
                placeholder="Minimum Salary"
                required="This field is required"
                error={errors?.minSalary?.message}
              />
              <Select
                label="Office Location"
                name="location"
                register={register}
                placeholder="Office Location"
                required="This field is required"
                options={locationOptions}
                error={errors?.location?.message}
              />
              <Select
                label="Is Remote?"
                name="isRemote"
                register={register}
                placeholder="Is Remote?"
                required="This field is required"
                options={remoteOptions}
                error={errors?.isRemote?.message}
              />
            </Column>
            <Column>
              <Select
                label="Employment Type"
                name="employmentType"
                register={register}
                placeholder="Employment Type"
                required="This field is required"
                options={employmentType}
                error={errors?.employmentType?.message}
              />
              <Input
                label="Maximum Salary"
                name="maxSalary"
                register={register}
                type="text"
                placeholder="Maximum Salary"
                required="This field is required"
                error={errors?.maxSalary?.message}
              />
              <Select
                label="Seniority Level"
                name="seniority"
                register={register}
                placeholder="Seniority Level"
                required="This field is required"
                options={seniorityOptions}
                error={errors?.seniority?.message}
              />
              <Select
                label="Main Technology"
                name="mainTech"
                register={register}
                placeholder="Main Technology"
                required="This field is required"
                options={mainTech}
                error={errors?.mainTech?.message}
              />
            </Column>
            </CardWrapper>
            <Text variant="body">Tech Stack</Text>
            <Controller
              //@ts-ignore
              render={({ field }) => (
                <MultiSelect
                isMulti
                options={techSkills}
                onChange={field.onChange}
              />)}
              name="techSkills"
              control={control}
            />
            <Text variant="body">Description</Text>
            <Controller
              //@ts-ignore
              render={({ field }) => <EditorConvertToHTML {...field} />}
              name="description"
              control={control}
            />
          </Card>
        </Column>
      </FormWrapper>
      <Button
        variant="primary"
        loading={isLoading}
        type="submit"
        form="newJobOfferForm"
      >
        Create a new job offer
      </Button>
    </PanelTemplate>
  );
};

export default CompanyProfilePage;
