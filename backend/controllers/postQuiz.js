import axios from "axios"
import Post from "../models/model.js"



const postQuiz=async(req, res)=>{
   
    try {
        const {category, region, difficulty} = req.body
        let fetchUrl = "https://the-trivia-api.com/api/questions?limit=5"
        if(category){
            fetchUrl += `&categories=${category}`
           // res.send(fetchUrl)
       }
       if(difficulty){
           fetchUrl += `&difficulty=${difficulty}`  
       }
       if(region){
        fetchUrl += `&region=${region}`
       }
       const {data} = await axios.get(fetchUrl)
      
        const newPost = await Post.create(data) 
       
        res.status(201).json({success: true, data: newPost}) 
      
    } catch (error) {
        res.status(500).json({success: false , message:error})
    }
}
export default postQuiz;