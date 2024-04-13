import mongoose, { Schema } from "mongoose";

export const VendorSchame = new mongoose.Schema({
  name: {
    type: String,
    unique: true,

    required: true,
  },

  Phone: {
    type: String,
    unique: true,
    required: true,
  },
});

export default mongoose.model("Vendor", VendorSchame);
