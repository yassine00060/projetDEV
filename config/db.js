import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

dotenv.config()

const MONGODB_URL = process.env.mongodb;

const connectDB = async () => {
    try {
      mongoose.connect(MONGODB_URL);
      console.log(
        `Conneted To Mongodb Databse`
      );
    } catch (error) {
      console.log(`Errro in Mongodb ${error}`);
    }
  };
  
  export default connectDB;