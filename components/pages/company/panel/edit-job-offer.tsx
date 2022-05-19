import { useState,useMemo, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
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
import useSWR from "swr";
//@ts-ignore
const fetcher = (...args: any) => fetch(...args).then((res) =>  res.json());

const EditJobOffer = ({id}: {id: string;}) => {
  const { data } = useSWR(`/api/company/posts/${id}`, fetcher)
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: useMemo(() => {
      return data;
    }, [data]),
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const req = await fetch(`/api/company/posts/edit/${id}`, {
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

  useEffect(() => {
    if(data?.error) return;
    reset(data?.jobOffer);
  }, [data]);
  return (
    <PanelTemplate>
      <HeadingWrapper>
        <Text variant="headingLarge">Edit Job Offer</Text>
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
        Update job offer
      </Button>
    </PanelTemplate>
  );
};

export default EditJobOffer;
