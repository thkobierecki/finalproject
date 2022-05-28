import mongoose from "mongoose";

const UserPreferencesSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  searchStatus: { type: Number },
  isRemote: { type: Number },
  seniority: { type: Number },
  employmentType: { type: Number },
  location: { type: [Number] },
  companyStage: { type: Number },
  companyType: { type: Number },
  industryType: { type: [Number] },
  mainTech: { type: [Number] },
  techSkills: { type: [Number] },
  minSalary: { type: Number },
  maxSalary: { type: Number },
},
{
  timestamps: true
});

export default mongoose.models.UserPreferences ||
  mongoose.model("UserPreferences", UserPreferencesSchema);
