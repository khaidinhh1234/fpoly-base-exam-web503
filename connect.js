import mongoose from "mongoose";

export const connectMongoDB = (uri) => {
  try {
    mongoose.connect(uri);
    console.log("mongoDB ok");
  } catch (error) {
    console.log(error);
  }
};
