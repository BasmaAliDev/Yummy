import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
export default function Search() {
  const [meals, setMeals] = useState([]);
  async function getMealsByName(type,term){
    const {data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?${type}=${term}`);
    term && data.meals && setMeals(data.meals)
  }
 
  return <>
  <div className="row py-4"> 
    <div className="col-md-6">
      <input onChange={(e)=>{if(/^[a-zA-Z]/.test(e.target.value))getMealsByName("s",e.target.value)}} type="text" className='form-control' placeholder='Search With Meal Name ' />
    </div>
    <div className="col-md-6">
      <input onChange={(e)=>{if(/^[a-zA-Z]/.test(e.target.value))getMealsByName("f",e.target.value)}} type="text" className='form-control' placeholder='Search With First Letter ' maxLength={'1'} />
    </div>
  </div>

  {meals.length?
  <div className="row g-3">{meals.map((meal,idx)=>{return <Card key={idx} meal={meal}/> })}</div>
  :<h2>No Meals Found</h2>

  
}
  


  </>
}


