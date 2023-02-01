import express from "express";
import * as dotenv from 'dotenv'
import notFound from "./middlewares/notFound.js"
import errorHandler from "./middlewares/error-handler.js"
('express-async-errors')
import cors from "cors"
import router from './routes/routes.js'
import connectDB from "./database/connectDB.js";
dotenv.config()

const app = express()

app.use(cors({origin: 'http://localhost:5173'}));


const port = 3000

app.use(express.json())

//middleware
app.use("/api/v1/quiz", router)
app.use(notFound)
app.use(errorHandler)



const start=async()=>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, ()=>{
            console.log(`server is listening at port ${port}`)
        })
    } catch (error) {
       console.log(error) 
    }
}

start()