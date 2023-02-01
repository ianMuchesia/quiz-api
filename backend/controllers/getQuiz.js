import axios from 'axios'


const getQuiz = async(req, res)=>{
   const {category, difficulty} = req.query
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
   res.status(200).json({data}) 
}

export default getQuiz