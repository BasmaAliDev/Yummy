import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import axios from 'axios';
export default function Categories() {
  const [allData, setAllData] = useState(null);
  async function getData(){
    let {data}=await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
    setAllData(data.categories)
    
  }
useEffect(()=>{
  getData();
},[])
  return <>
  {console.log(allData)}
  {allData?
  <div className="row g-5">
  {allData.map((Category,idx)=>{return <Card key={idx} Category={Category}/> })}
  </div>:<Loading/>

  
}
  
    
  </>
}


