import dotenv from 'dotenv'
import {app} from "./app.js"
import connectDB from './src/config/connectDB.js';
dotenv.config();

//connect db

const startserver = async () =>{
    try {
        await connectDB();
        const PORT = process.env.PORT || 5000;
        app.listen(PORT,()=>{
            console.log(`App listening on port ${PORT}`)
        });

    } catch (error) {
        console.error(`DB connection failed`,error);
            process.exit(1);

        
    }
}

startserver();