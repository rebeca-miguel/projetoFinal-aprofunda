import dotenv from 'dotenv'
dotenv.config();
import mongoose from 'mongoose';

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI as string);
        console.log('Connectd to database');
    }catch (error) {
        console.log('Error connect to database', error);
    }
}