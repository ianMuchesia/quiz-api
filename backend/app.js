import express from "express";
import * as dotenv from 'dotenv'
//import cors from cors
import trivia from './routes/trivia.js'
//dotenv.configure()

const app = express()


const port = 3000

app.use(express.json())

app.use("/api/v1/quiz", trivia)




app.listen(port, ()=>{
    console.log(`server is listening at port ${port}`)
})