/*import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading/Loading';
export default function Details() {
  let {id}=useParams();
  console.log("id",id);
  
  const [details, setDetails] = useState(null);
  
  async function getDetails(){
      const {data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      return data.meals[0];
  }

   async function getRecipesReady(){
    let detailsObject= await getDetails();
    detailsObject.ingredient=[];
    const detailsMap = new Map(Object.entries(detailsObject));
    for (let i = 0; i < detailsMap.size; i++) {
      if(detailsMap.get(`strIngredient${i}`)){
        detailsObject.ingredient.push(`${detailsMap.get(`strMeasure${i}`)} ${detailsMap.get(`strIngredient${i}`)}`)
      }
    }
    
    setDetails(detailsObject)

  }

  useEffect(()=>{
    getRecipesReady();
  },[]);
  

  return <>
  {details?
  <div className="row py-5">
    <div className="col-md-4">
      <img src={details.strMealThumb} className='w-100 rounded-3' alt={details.strMeal} />
      <h3>{details.strMeal}</h3>
      <a className='btn btn-warning w-100' href='/home'>Back To Home</a>
    </div>
    <div className="col-md-8 ps-5">
      <div className='Instructions'>
        <h2>Instructions</h2>
        <p>{details.strInstructions}</p>
      </div>
      <div className='area d-flex align-items-center pt-3'>
        <h2 className='m-0'>Area : </h2>
        <span className='d-block mb-0 mt-1 ps-3 h4 fw-semibold '>{details.strArea}</span>
      </div>

      <div className='category d-flex align-items-center pt-3'>
        <h2 className='m-0'>Category : </h2>
        <span className='d-block mb-0 mt-1 ps-3 h4 fw-semibold '>{details.strCategory}</span>
      </div>

      <div className='recipes  pt-3'>
        <h2 className='m-0'>Recipes : </h2>
        {details.ingredient.map((item,idx)=>{return <span key={idx} className='btn btn-warning me-2 mt-2 '>{item}</span>})}
      </div>

     {details.strTags? <div className='tags  pt-3'>
        <h2 className='m-0'>Tags : </h2>
        {details.strTags.split(",").map((tag,idx)=>{return <span key={idx} className='btn btn-primary me-2 mt-2 '>{tag}</span>})}
      </div>:""}

     
     <a className='btn btn-success mt-3 me-3' href={details.strSource}>Source</a>
     <a className='btn btn-danger mt-3 ' href={details.strYoutube}>Youtube</a>
     </div>
    </div>
  
:<Loading/>}
  
  </>
}


*/
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading/Loading';

export default function Details() {
  let { id } = useParams();
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(false); // Add error state
  const navigate = useNavigate();

  async function getDetails() {
    try {
      const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      if (!data.meals) {
        setError(true);
        return null;
      }
      return data.meals[0];
    } catch (error) {
      setError(true); 
      return null;
    }
  }

  async function getRecipesReady() {
    let detailsObject = await getDetails();
    if (detailsObject) {
      detailsObject.ingredient = [];
      const detailsMap = new Map(Object.entries(detailsObject));
      for (let i = 1; i <= 20; i++) { 
        if (detailsMap.get(`strIngredient${i}`)) {
          detailsObject.ingredient.push(
            `${detailsMap.get(`strMeasure${i}`)} ${detailsMap.get(`strIngredient${i}`)}`
          );
        }
      }
      setDetails(detailsObject);
    }
  }

  useEffect(() => {
    getRecipesReady();
  }, []);

  if (error) {return <Navigate to={'*'}/>}

  return (
    <>
      {details ? (
        <div className="row py-5">
          <div className="col-md-4">
            <img src={details.strMealThumb} className="w-100 rounded-3" alt={details.strMeal} />
            <h3>{details.strMeal}</h3>
            <a className="btn btn-warning w-100" href="/home">
              Back To Home
            </a>
          </div>
          <div className="col-md-8 ps-5">
            <div className="Instructions">
              <h2>Instructions</h2>
              <p>{details.strInstructions}</p>
            </div>
            <div className="area d-flex align-items-center pt-3">
              <h2 className="m-0">Area:</h2>
              <span className="d-block mb-0 mt-1 ps-3 h4 fw-semibold ">{details.strArea}</span>
            </div>
            <div className="category d-flex align-items-center pt-3">
              <h2 className="m-0">Category:</h2>
              <span className="d-block mb-0 mt-1 ps-3 h4 fw-semibold ">{details.strCategory}</span>
            </div>
            <div className="recipes pt-3">
              <h2 className="m-0">Recipes:</h2>
              {details.ingredient.map((item, idx) => (
                <span key={idx} className="btn btn-warning me-2 mt-2 ">
                  {item}
                </span>
              ))}
            </div>
            {details.strTags && (
              <div className="tags pt-3">
                <h2 className="m-0">Tags:</h2>
                {details.strTags.split(',').map((tag, idx) => (
                  <span key={idx} className="btn btn-primary me-2 mt-2 ">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <a className="btn btn-success mt-3 me-3" href={details.strSource}>
              Source
            </a>
            <a className="btn btn-danger mt-3 " href={details.strYoutube}>
              YouTube
            </a>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
