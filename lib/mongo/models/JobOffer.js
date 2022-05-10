import mongoose from "mongoose";

const JobOfferSchema = mongoose.Schema({
  userId: {
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

});

export default mongoose.models.JobOffer ||
  mongoose.model("JobOffer", JobOfferSchema);
