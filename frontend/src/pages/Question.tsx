import React, { useEffect, useState } from 'react'
import Quiz from '../components/Quiz'
import Answers from '../components/Answers'
import axios from 'axios'

const Question = () => {
  const [ quiz , setQuiz ] = useState([])
  useEffect(()=>{
    let isMounted = true;
    const fetchData = async ()=>{
      const response = await axios.get("https://the-trivia-api.com/api/questions?limit=20&categories=science,history'")
      
      console.log(response.data)

    }
    fetchData()
    return ()=>{isMounted = false}
  }, [])
  return (
    <div className='w-[80%] h-[80%] border-2 shadow-xl shadow-slate-600 m-10 rounded-sm mx-auto '>
     <Quiz/>
      <Answers/>
    </div>
  )
}

export default Question