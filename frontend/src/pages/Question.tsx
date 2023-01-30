import React, { useEffect, useState } from 'react'
import Quiz from '../components/Quiz'
import Answers from '../components/Answers'
import axios from 'axios'
import { useGlobalContext } from '../context'
import { AppContextType } from '../@types/types'

const Question = () => {
 const {quiz} = useGlobalContext() as AppContextType

 console.log(quiz)
  return (
    <div className='w-[80%] h-[80%] border-2 shadow-xl shadow-slate-600 m-10 rounded-sm mx-auto '>
     <Quiz />
      <Answers/>
    </div>
  )
}

export default Question