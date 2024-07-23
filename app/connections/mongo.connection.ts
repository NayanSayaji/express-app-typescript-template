import mongoose from "mongoose";

export const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log(`MongoDB Connected Successfully..`)
    } catch (e) {
        throw 'Error Connecting Mongo Database'
    }
}