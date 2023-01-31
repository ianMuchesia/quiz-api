import React from 'react'

import { useGlobalContext } from '../context'
interface Props{
  question: string;
}
const Quiz = ({ question }:Props) => {
  
  
   console.log(question)
  return (
    <div className='py-4 px-16 border-b-2 shadow-md'>
        <h4 className='text-center font-bold m-4'>Quiz 1/1</h4>
        <h3 className='uppercase font-bold text-lg text-center'>
          {question}
        </h3>

      </div>
  )
}

export default Quiz