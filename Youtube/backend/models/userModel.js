import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  FullName: { type: String, required: true },
  Username: { type: String, required: true },
  Email: { type: String, unique: true, required: true },
  Password: { type: String, required: true },
  Avatar: { type: String, default: "" },
},{timestamps:true});

export const user = mongoose.model("User", UserSchema);
