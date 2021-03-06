import mongoose from "mongoose";
import Company from "./Company";
import UserProfile from "./UserProfile";
import JobOffer from "./JobOffer";

const JobApplicationSchema = mongoose.Schema({
  jobSeeker: {
    type: mongoose.Schema.Types.ObjectId,
    ref: UserProfile,
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
  status: { type: String },

},
{
  timestamps: true
});

export default mongoose.models.JobApplication ||
  mongoose.model("JobApplication", JobApplicationSchema);
