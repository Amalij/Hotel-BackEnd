import mongoose from "mongoose";
import dotenv from "dotenv"; 

dotenv.config(); 

const connectDB = async () => {
  try {
    const MONGODB_URL = process.env.MONGODB_URL;
    if (!MONGODB_URL) {
      throw new Error("MONGODB_URL is not set");
    }

    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Connected to the database...");
  } catch (error) {
    console.error("❌ Error connecting to the database:", error);
    process.exit(1);
  }
};

export default connectDB;

// 825IGu1a4VGsSLKp
// mongodb+srv://amaliishanka620:825IGu1a4VGsSLKp@cluster0.8bnur.mongodb.net/Dev?retryWrites=true&w=majority&appName=Cluster0