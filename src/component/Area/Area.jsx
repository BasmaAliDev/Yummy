import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function Area() {
  const [allData, setAllData] = useState(null);
  async function getData(){
    let {data}=await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    console.log("=>",data.meals);
    setAllData(data.meals)
    
  }
useEffect(()=>{
  getData();
},[])
  return <>
  {allData?
  <div className="row g-5">
  {allData.map((area,idx)=>{return <div key={idx} className='col-md-2'>
    <div>
    <i class="fa-solid fa-house h1 text-center w-100"></i>
    <h6 className='h3 w-100 text-center'>{area.strArea}</h6> 
    </div>
  </div>})}</div>
:""
  
  }
 
 
  </>
}


