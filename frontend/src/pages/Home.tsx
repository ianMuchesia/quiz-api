import React from 'react'
import Question from '../components/Question'
import Answers from '../components/Answers'

const Home = () => {
  return (
    <div className='w-[80%] h-[80%] border-2 shadow-xl shadow-slate-600 m-10 rounded-sm mx-auto '>
     <Question/>
      <Answers/>
    </div>
  )
}

export default Home