import React from 'react'
import { AppContextType, country, Props } from '../@types/types'
import { useGlobalContext } from '../context'

const CateforyForm = ({countries, handleChange, handleSubmit }: Props) => {

    
const {selectedCategory } = useGlobalContext() as AppContextType

  return (
    <form  className="h-full grid place-items-center" onSubmit={handleSubmit}>
        <div className='grid gap-4'>
        <div className='grid'><label  htmlFor="category"  className="text-center">Category</label>
    <select id="category"  className="px-4 py-2 rounded-lg bg-transparent max-w-[400px] border-2 text-lg font-semibold text-center" onChange={handleChange} value={selectedCategory.categories} name="categories">
    <option value="">--</option>
      <option  value="arts_and_literature">Arts & Literature</option>
      <option value="film_and_tV" >Film & TV</option>
      <option value="food_and_Drink">Food & Drink</option>
      <option value="general_knowledge">General Knowledge</option>
      <option value="geography">Geography</option>
      <option value="history">History</option>
      <option value="music">Music</option>
      <option value="science">Science</option>
      <option value="society_and_culture">Society & Culture</option>
      <option value="sport_and_leisure">Sport & leisure</option>
    </select>
</div>
    <div className='grid'>
    <label className='text-center' htmlFor="difficulty">Difficulty</label>
    <select id="difficulty" className="px-4 py-2 rounded-lg bg-transparent max-w-[400px] border-2 text-lg font-semibold text-center" value={selectedCategory.difficulty} onChange={handleChange} name="difficulty">
    <option value="">--</option>
      <option value="easy">easy</option>
      <option value="medium">medium</option>
      <option value="hard">hard</option>
    </select>
    </div>
    <div className='grid'>
    <label className='text-center' htmlFor="region">Region</label>
    <select id="region" className="px-4 py-2 rounded-lg bg-transparent max-w-[400px] border-2 text-lg font-semibold text-center" value={selectedCategory.region} onChange={handleChange} name="region">
    <option >--</option> {
        countries.map((country: country, index)=> <option value={`${country.alpha2code}`} key={index}>{country.name}</option>)}
    
    </select>
    </div>
    <button className='p-5 text-2xl border-2 border-gray-400 cursor-pointer rounded-xl mt-10 '>Start my quiz game</button>
    </div>
  </form>
  )
}

export default CateforyForm