import mongoose from "mongoose";

export const connectMongoDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://haribhutanadhu:n09nMIfOo6sN1XJB@cluster0.fvys9.mongodb.net/");
        console.log("Mongo DB connected Successfully");
    } catch (error) {
        console.log(error);
    }
}