import mongoose from "mongoose";
import Company from "./Company";

const JobOfferSchema = mongoose.Schema({
  companyId: {
    type: String,
    required: true,
  },
  description:{
    type: String,
  },
  employmentType:{
    type: Number,
  },
  isRemote:{
    type: Number,
  },
  jobTile:{
    type: String,
  },
  location:{
    type: Number,
  },
  mainTech:{
    type: Number,
  },
  maxSalary:{
    type: Number,
  },
  minSalary:{
    type: Number,
  },
  seniority:{
    type: Number,
  },
  techSkills:{
    type: [Number],
  },
  numberOfApplications:{
    type: Number,
  },
  applicantsID:{
    type: [String],
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Company,
    required: true,
  },

});

export default mongoose.models.JobOffer ||
  mongoose.model("JobOffer", JobOfferSchema);
