import mongoose from "mongoose";
import validator from "validator";

const UserProfileSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Please enter valid email address"],
  },
  city: {
    type: String,
    required: true,
  },
  introduction: {
    type: String,
    required: true,
  },
  linkedin: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  cvLink: {
    type: String,
  },
},
{
  timestamps: true
});

export default mongoose.models.UserProfile ||
  mongoose.model("UserProfile", UserProfileSchema);
