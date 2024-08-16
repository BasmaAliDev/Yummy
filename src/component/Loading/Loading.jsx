import React from 'react'
import styles from './Loading.module.css';
export default function Loading() {
  return <>
  <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
  <span className={`${styles.loader}`}></span>
  </div>
 
  </>
}


