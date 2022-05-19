export type Company = {
  companyLocation: string;
  companyName: string;
  companyStage: number;
  companyType: number;
  email: string;
  industryType: number;
  introduction: string;
  socials:{
    linkedin: string;
    twitter: string;
    website: string;
  }
  userId: string;
  _id: "626ed80bba7a73ccd02867fb"
};

export type JobOffer = {
  jobTitle: string;
  description: string;
  companyId: string;
  employmentType:number;
  isRemote:number;
  location:number;
  mainTech: number;
  maxSalary:number;
  minSalary:number;
  numberOfApplications:number;
  seniority:number;
  _id:string;
  techSkills: Array<number>;
  applicantsID:Array<number>;
  company: Company;
}