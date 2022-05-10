type Data = {
  description:string;
  employmentType:string;
  isRemote:string;
  jobTile:string;
  location:string;
  mainTech:string;
  maxSalary:string;
  minSalary:string;
  seniority:string;
  techSkills:Array<{type:string; value: number; label: string;}>
}

export const newJobOfferAdapter = (data: Data) => {
  const formattedData = {
    description: data.description,
    employmentType: parseFloat(data.employmentType),
    isRemote: parseFloat(data.isRemote),
    jobTile: data.jobTile,
    location: parseFloat(data.location),
    mainTech: parseFloat(data.mainTech),
    maxSalary: parseFloat(data.maxSalary),
    minSalary: parseFloat(data.minSalary),
    seniority: parseFloat(data.seniority),
    techSkills: data.techSkills.map(skill => skill.value) || []
  }
  return formattedData;
};
