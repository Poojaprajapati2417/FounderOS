import mongoose from "mongoose";

const connectDB=async()=>{
    const uri=process.env.MONGOURI
    const DB_NAME=process.env.DB_NAME
    if(!uri){
         throw new Error("OOPS! check the mongouri is it set?")
    }
    try {
        const connectionInstance=await mongoose.connect(`${uri}/${DB_NAME}`)
        console.log(`MONGODB CONNECT!! DB HOST:${connectionInstance.connection.host}`)
    } catch (error) {
        console.log(`Mongo db error${error}`);
        process.exit(1);
    }
}
export default connectDB;