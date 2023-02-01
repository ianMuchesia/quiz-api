import React, { useEffect, useState } from "react";
import axios from 'axios'
import {useNavigate } from "react-router-dom"
import { AppContextType, country } from "../@types/types";
import CateforyForm from "../components/CateforyForm";
import { useGlobalContext } from '../context'
const Category = () => {

    const {selectedCategory,setSelectedCategory} = useGlobalContext() as AppContextType

    const navigate = useNavigate()
  const [countries, setCountries] = useState<[]>([])



  
//options selected
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{
    setSelectedCategory(prevSelectedCategroy=>{
        return{
            ...prevSelectedCategroy,
            [e.target.name]: e.target.value
        }
    })
  }
//fetching countries
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
    try {
      
        const response = await fetch(`https://restcountries.com/v2/all`);
        const data = await response.json();
        if (isMounted) {
           
          setCountries(data);
        }
      ;
    } catch (error: any) {
        alert(error.message)
      console.log(error);
    }
}
    fetchData()
    return ()=>{isMounted = false}
  }, []);


  const handleSubmit =async(e: React.FormEvent)=>{
    e.preventDefault()
  try {
    
    const response = await axios.post(`http://localhost:3000/api/v1/quiz`,{
      category: selectedCategory.categories,
      region: selectedCategory.region,
      difficulty:selectedCategory.difficulty,
      sessionName:selectedCategory.categories + selectedCategory.difficulty
    })
    console.log(response)
   // navigate("/Question")
    
  } catch (error: any) {
    alert(error.message)
    console.log(error)
  }
    
  }
  return (
    <section>
      <h1 className="text-center  font-bold text-4xl m-5">please choose category</h1>
      <CateforyForm countries={countries} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </section>
  );
};

export default Category;
