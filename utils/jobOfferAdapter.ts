import { JobOffer, UserPreferencesType } from "types";
import {
  companyStage,
  companyType,
  industryType,
  seniorityOptions,
  employmentType,
  locationOptions,
  mainTech,
  techSkills
} from "lib/mongo/profileData";

function abbreviateNumber(value: any) {
  let newValue = value;
  if (value >= 1000) {
      let suffixes = ["", "k", "m", "b","t"];
      let suffixNum = Math.floor( (""+value).length/3 );
      let shortValue = '';
      for (let precision = 2; precision >= 1; precision--) {
        //@ts-ignore
          shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
          var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
          if (dotLessShortValue.length <= 2) { break; }
      }
      //@ts-ignore
      if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(1);
      newValue = shortValue+suffixes[suffixNum];
  }
  return newValue;
}

export const jobOfferAdapter = ( data: JobOffer) => {
  const formattedComanyStage = companyStage.find(el => el.value == data.company.companyStage);
  const formattedCompanyType = companyType.find(el => el.value == data.company.companyType);
  const formattedComanyIndustryType = industryType.find(el => el.value == data.company.industryType);
  const formattedSeniorityOption = seniorityOptions.find(el => el.value == data.seniority);
  const formattedEmploymentType = employmentType.find(el => el.value == data.employmentType);
  const formattedLocationOption = locationOptions.find(el => el.value == data.location);
  const formattedMainTech = mainTech.find(el => el.value == data.mainTech);
  const formattedTechSkills = data.techSkills.map(techSkill => techSkills.find(el=> el.value == techSkill));

  return {
    ...data,
    seniority: formattedSeniorityOption,
    employmentType: formattedEmploymentType,
    location: formattedLocationOption,
    mainTech: formattedMainTech,
    techSkills: formattedTechSkills,
    isRemote: Boolean(data.isRemote),
    maxSalary: abbreviateNumber(data.maxSalary),
    minSalary: abbreviateNumber(data.minSalary),
    company: {
      ...data.company,
      companyStage: formattedComanyStage,
      companyType: formattedCompanyType,
      industryType: formattedComanyIndustryType,
    }
  }

}

export const userPreferencesAdapter = ( data: UserPreferencesType) => {
  const formattedStage = companyStage.find(el => el.value == data.companyStage);
  const formattedType = companyType.find(el => el.value == data.companyType);
  const formattedIndustryType = data.industryType.map(type => industryType.find(el => el.value == type));
  const formattedSeniorityOption = seniorityOptions.find(el => el.value == data.seniority);
  const formattedEmploymentType = employmentType.find(el => el.value == data.employmentType);
  const formattedLocationOption = data.location.map(type => locationOptions.find(el => el.value == type));
  const formattedMainTech = data.mainTech.map(type => mainTech.find(el => el.value == type));
  const formattedTechSkills = data.techSkills.map(techSkill => techSkills.find(el=> el.value == techSkill));

  return {
    ...data,
    companyStage: formattedStage,
    companyType: formattedType,
    industryType: formattedIndustryType,
    seniority: formattedSeniorityOption,
    employmentType: formattedEmploymentType,
    location: formattedLocationOption,
    mainTech: formattedMainTech,
    techSkills: formattedTechSkills,
    isRemote: Boolean(data.isRemote),
    maxSalary: abbreviateNumber(data.maxSalary),
    minSalary: abbreviateNumber(data.minSalary),
  }

}