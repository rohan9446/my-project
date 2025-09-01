import mongoose from "mongoose";

const conncetDB = async()=>{
    try{
        await mongoose.connect(process.env.URL);
        console.log("Database Connected successfully")

    } catch (error){
        console.log(error);
    }
}

export default conncetDB;