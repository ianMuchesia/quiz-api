import React from 'react'
import { AppContextType } from '../@types/types'
import { useGlobalContext } from '../context'

const Quiz = () => {

  const {quiz} = useGlobalContext() as AppContextType
  console.log(quiz)
  return (
    <div className='py-4 px-16 border-b-2 shadow-md'>
        <h4 className='text-center font-bold m-4'>Quiz 1/10</h4>
        <h3 className='uppercase font-bold text-lg text-center'>
          HAVE YOU PRACTICED SORT OR ANY PHYSICAL ACTIVITY OUT OF YOUR WORKING HOURS AT LEAST 30 MIN OR MORE DURING THE LAST MONTH?
        </h3>

      </div>
  )
}

export default Quiz