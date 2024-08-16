import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function Ingredients() {
  const [allData, setAllData] = useState(null);
  
  async function getData(){
    let {data}=await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
   let copyData=[];
    
    if(data.meals!==null){
      for(let i=0;i<data.meals.length;i++){
        if(data.meals[i].strDescription!==null && data.meals[i].strDescription!==''){
          copyData.push(data.meals[i])
        }

      }
    }setAllData(copyData);
    
    
  }
 useEffect(()=>{
   getData();
 

},[])

return <>
{ 
allData?
<div className="row g-5">
{allData.map((ingred,idx)=>{return <div key={idx} className='col-md-3'>
  <div>
  <i class="fa-solid fa-bone h1 text-center w-100"></i>
  <h6 className='h3 w-100 text-center'>{ingred.strIngredient}</h6> 
  <p>{ ingred.strDescription?.split(" ").slice(0, 20).join(" ")}</p>
  </div>
</div>})}</div>
:""

}


</>
}


