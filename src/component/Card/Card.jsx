import React from 'react'
import styles from './Card.module.css';
import {Link} from 'react-router-dom'
export default function Card({meal,Category}) {
  return <>
{console.log("Category",Category)}
 {meal? <div className={`col-md-3 `}>
  <Link to={`/${meal.idMeal}`}>
    <div className={`${styles.inner} position-relative rounded-3 overflow-hidden`}>
      <img src={meal.strMealThumb} className='w-100' alt={meal.strMeal} />
      <div className={`w-100 h-100 position-absolute text-dark d-flex align-items-center justify-content-center`}>
        <h2 >{meal.strMeal}</h2>
      </div>
    </div>
    </Link>
  </div>
:""}
  
  
 {Category? <div className={`col-md-3 category`}>
    <div className={`${styles.inner} position-relative rounded-3 overflow-hidden `}>
      <img src={Category.strCategoryThumb} className='w-100' alt={Category.strCategory} />
      <div className={` w-100 h-100 position-absolute text-dark d-flex align-items-center justify-content-center`}>
        <div className=' '>
        <h2 className='text-center  pt-2'>{Category.strCategory}</h2>
        <p className='text-center info'>{Category.strCategoryDescription.split(" ").slice(0, 8).join(" ")}</p>
    
        </div>
    
      </div>
    </div>
   
  </div>:""}

  
  </>
}


