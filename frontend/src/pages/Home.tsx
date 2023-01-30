import React from 'react'
import {Link } from 'react-router-dom'
const Home = () => {
  return (
    <section className='grid place-items-center h-[100vh]'>
        <div className='grid place-items-center gap-2'>
            <h1 className='text-center text-4xl font-extrabold '>Welcome</h1>
            <Link to="Category">
            <button className='px-10 py-4 text-xl border-4 border-black rounded-xl'>Start</button>
            </Link>
        </div>
        
    </section>
  )
}

export default Home