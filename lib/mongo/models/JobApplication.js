import mongoose from "mongoose";
import Company from "./Company";
import User from "./User";
import JobOffer from "./JobOffer";

const JobApplicationSchema = mongoose.Schema({
  jobSeeker: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Company,
    required: true,
  },
  jobOffer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: JobOffer,
    required: true,
  },

},
{
  timestamps: true
});

export default mongoose.models.JobApplication ||
  mongoose.model("JobApplication", JobApplicationSchema);
