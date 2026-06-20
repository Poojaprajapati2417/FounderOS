import express from 'express'
import cors from 'cors'

let app=express();

//middlewares
app.use(cors());
app.use(express.json());


//routes
import authRoute from './src/routes/authRoute.js';
app.get('/',(req,res)=>{
    res.send("FounderOS API running")

});
app.use("/user/auth",authRoute)
export {app}
