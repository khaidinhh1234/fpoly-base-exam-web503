import mongoose, { Schema } from "mongoose";

export const UserSchame = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,

    required: true,
  },
});

export default mongoose.model("User", UserSchame);
