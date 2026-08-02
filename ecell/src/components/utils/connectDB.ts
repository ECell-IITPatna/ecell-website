import mongoose from "mongoose";

const connectDB = async () => {
    try {
        return await mongoose.connect(process.env.MONGO_URI as string);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
};

export default connectDB;