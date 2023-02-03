import axios from 'axios'
import Post from "../models/model.js"

const getQuiz = async(req, res)=>{
   
  try {
    const response = await Post.find({}).sort('-date')
    res.status(200).json({msg:response})
  } catch (error) {
    console.log(error)
  }
   
 
  
}

export default getQuiz