import express from "express";
import * as dotenv from 'dotenv'
//import cors from cors
import router from './routes/routes.js'
//dotenv.configure()

const app = express()


const port = 3000

app.use(express.json())

app.use("/api/v1/quiz", router)




app.listen(port, ()=>{
    console.log(`server is listening at port ${port}`)
})