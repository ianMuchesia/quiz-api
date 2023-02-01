import express from 'express'
import axios from 'axios'
const router = express .Router()



router.get("/", async(req, res)=>{
   


     try {
        const {data}= await axios.get(`https://the-trivia-api.com/api/questions?categories=arts_and_literature,film_and_tv,food_and_drink,general_knowledge,geography,history,music,science,society_and_culture,sport_and_leisure&limit=5&difficulty=easy`)
       
        res.status(200).json({data})
       // console.log(response)
    } catch (error) {
        console.log(error)
    } 
})

export default router;