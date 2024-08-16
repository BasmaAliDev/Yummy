import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import axios from 'axios';
import Loading from '../Loading/Loading';
export default function Home() {
  const [allData, setAllData] = useState(null);
  async function getData(){
    let {data}=await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    setAllData(data.meals)
    
  }
useEffect(()=>{
  getData();
},[])
  return <>
  {allData?
  <div className="row g-3">
  {allData.map((meal,idx)=>{return <Card key={idx} meal={meal}/> })}
  </div>:<Loading/>

  
}
  
    
  </>
}


