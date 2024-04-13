import mongoose, { Schema } from "mongoose";

export const ServiceSchame = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  vendor: {
    type: Schema.Types.ObjectId,
    ref: "Vendor",
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Service", ServiceSchame);
// name: string + unique, Tên
// vendor: Ref: Vendor, Nhà cung cấp
// description: string,  Mô tả
// price: decimal
