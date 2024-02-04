import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected...\nDB host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection error.", error);
    process.exit(1); // Exit the node app with an error code of 1 if
  }
};

export default connectDB;
