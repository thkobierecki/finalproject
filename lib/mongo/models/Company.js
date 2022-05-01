import mongoose from "mongoose";
import validator from "validator";

const CompanySocialsSchema = mongoose.Schema({
  website: String,
  linkedin: String,
  twitter: String
})

const CompanySchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Please enter valid email address"],
  },
  companyName: {
    type: String,
    required: true,
  },
  companyStage: {
    type: String,
    required: true,
  },
  companyType: {
    type: String,
    required: true,
  },
  companyLocation: {
    type: String,
    required: true,
  },
  industryType: {
    type: String,
    required: true,
  },
  introduction: {
    type: String,
    required: true,
  },
  socials: {
    type: CompanySocialsSchema
  }

});

export default mongoose.models.Company ||
  mongoose.model("Company", CompanySchema);
