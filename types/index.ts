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
  logo?: string;
  _id: string;
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
  hasApplication?:boolean;
}

export type UserPreferencesType ={
  companyStage: number;
  companyType: number;
  employmentType: number;
  industryType: number[];
  isRemote: number;
  location: number[];
  mainTech: number[];
  maxSalary: number;
  minSalary: number;
  searchStatus: number;
  seniority: number;
  techSkills: number[];
  userId: string;
  _id: string;
}