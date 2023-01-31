import express from 'express'

const router = express .Router()



router.get("/", async(req, res)=>{
   


     try {
        const response = await fetch(`https://the-trivia-api.com/api/questions?categories=arts_and_literature,film_and_tv,food_and_drink,general_knowledge,geography,history,music,science,society_and_culture,sport_and_leisure&limit=5&difficulty=easy`)
        const data = await response.json()
        res.status(200).json({data})
       // console.log(response)
    } catch (error) {
        console.log(error)
    } 
})

export default router;