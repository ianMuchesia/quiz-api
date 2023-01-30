import React, { useEffect, useState } from "react";

const Category = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
    try {
      
        const response = await fetch(`https://restcountries.com/v2/all`);
        const data = await response.json();
        if (isMounted) {
            console.log(data)
          setCountries(data);
        }
      ;
    } catch (error) {
      console.log(error);
    }
}
    fetchData()
    return ()=>{isMounted = false}
  }, []);
  return (
    <section>
      <h1>please choose category</h1>
      <div>
        <label htmlFor="category">Category</label>
        <select>
          <option>Arts & Literature</option>
          <option>Film & TV</option>
          <option>Food & Drink</option>
          <option>General Knowledge</option>
          <option>Geography</option>
          <option>History</option>
          <option>Music</option>
          <option>Science</option>
          <option>Society & Culture</option>
          <option>Sport & leisure</option>
        </select>

        <label htmlFor="difficulty">Difficulty</label>
        <select>
          <option>easy</option>
          <option>medium</option>
          <option>hard</option>
        </select>
        <label htmlFor="region">Region</label>
        <select>{
            countries.map(country=>  <option>{country.name}</option>)}
        
        </select>
      </div>
    </section>
  );
};

export default Category;
