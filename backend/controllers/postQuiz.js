import axios from "axios"

const postQuiz=async(req, res)=>{
    res.status(200).json({msg: req.body})
}
export default postQuiz;