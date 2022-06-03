
export const matchJobOfferToUser = (userProfile:any, jobOffer:any) => {
  const MAX_TOTAL = 20; //This is a total sum of all points
  let sum = 0; //This is the sum of job offer match to user profile
  let result = 0;
  // Start matching
  const locationResult = matchLocation(userProfile.location, jobOffer.location) ;
  const remoteOptionResult = matchRemoteOption(userProfile.isRemote, jobOffer.isRemote);
  const minSalaryResult = matchMinSalary(userProfile.minSalary, jobOffer.minSalary);
  const maxSalaryResult = matchMaxSalary(userProfile.maxSalary, jobOffer.maxSalary);
  const seniorityResult = matchSeniority(userProfile.seniority, jobOffer.seniority);
  const employmentTypeResult = matchEmploymentType(userProfile.employmentType, jobOffer.employmentType);
  const industryTypeResult = matchIndustryType(userProfile.industryType, parseInt(jobOffer.company.industryType));
  const companyStageResult = matchCompanyStage(userProfile.companyStage, parseInt(jobOffer.company.companyStage));
  const companyTypeResult = matchCompanyType(userProfile.companyType, parseInt(jobOffer.company.companyType));
  const mainTechResult = matchMainTech(userProfile.mainTech, jobOffer.mainTech);
  const techSkillsResult = matchTechSkills(userProfile.techSkills, jobOffer.techSkills);

  // Get sum
  sum = locationResult + remoteOptionResult + minSalaryResult + maxSalaryResult + seniorityResult + employmentTypeResult + companyStageResult + companyTypeResult + mainTechResult + techSkillsResult + industryTypeResult;

  // Calculate result
  result = (sum/MAX_TOTAL) * 100;

  return result.toFixed(2);
}

const matchLocation = (userLocations: number[], companyLocation: number) => {
  if(userLocations.includes(companyLocation)) return 1;
  return 0;
}

const matchRemoteOption = (userRemoteOption:number, jobRemoteOption:number) => {
  if(userRemoteOption === jobRemoteOption) return 1;
  return 0;
}

const matchMinSalary = (userMinSalary:number, jobMinSalary:number) => {
 if(jobMinSalary < userMinSalary) return 0;
 return 1;
}

const matchMaxSalary = (userMaxSalary:number, jobMaxSalary:number) => {
  if(jobMaxSalary < userMaxSalary) return 0;
  return 1;
}

const matchSeniority = (userSeniority:number, jobSeniority:number) =>{
  if(userSeniority === jobSeniority) return 1;
  return 0;
}
const matchEmploymentType = (userEmploymentType:number, jobEmploymentType:number) =>{
  if(userEmploymentType === jobEmploymentType) return 1;
  return 0;
}

const matchIndustryType = (userIndustryTypes: number[], companyIndustryTypes: number) => {
  if(userIndustryTypes.includes(companyIndustryTypes)) return 1;
  return 0;
}

const matchCompanyStage = (userCompanyStage: number, companyStage: number) => {
  if(userCompanyStage === companyStage) return 1;
  return 0;
}

const matchCompanyType = (userCompanyType: number, companyType: number) => {
  if(userCompanyType === companyType) return 1;
  return 0;
}

const matchMainTech = (userMainTech: number[], jobMainTech: number) => {
  if(userMainTech.includes(jobMainTech)) return 1;
  return 0;
}

const matchTechSkills = (userTechSkills: number[],techSkills: number[]) => {
  const TOTAL_POINTS = 10;
  const numberOfUserPreferences = userTechSkills.length;
  let sum = 0;

  userTechSkills.forEach((item)=>{
    if(techSkills.includes(item)){
      sum = sum + 1;
    }
  })

  const result = (sum/numberOfUserPreferences) * TOTAL_POINTS;

  return result;

}

