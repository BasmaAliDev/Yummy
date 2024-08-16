import React, { useRef } from 'react'
import styles from './Sidebar.module.css';
import logo from '../../image/logo.png'
import { NavLink } from 'react-router-dom';
export default function Sidebar() {
  let sidebar=useRef(null);
  let innerSidebar=useRef(null);
  let iconSidebar=useRef(null);

  function closeSidebar(){
    let width=innerSidebar.current.offsetWidth;
    sidebar.current.style.left=`-${width}px`
    iconSidebar.current.classList.replace("fa-xmark","fa-bars")
  }
  function openSidebar(){
    sidebar.current.style.left="0px"
    iconSidebar.current.classList.replace("fa-bars","fa-xmark")
  }

  function changeSidebarWidth(){
    let left=window.getComputedStyle(sidebar.current).getPropertyValue('left');
    if(left=="0px"){
      closeSidebar();
    }else{openSidebar();}

  }


  return <>
 <nav ref={sidebar} className={`${styles["main-nav"]} position-fixed`}>
  <div ref={innerSidebar} className="d-flex flex-column justify-content-between p-3" >
    <ul className="list-unstyled">
      <li className="p-0 mb-1">
        <NavLink onClick={closeSidebar} to={"/search"} className="w-100 d-inline-block p-2 text-decoration-none text-white">Search </NavLink>
      </li>
      <li className="p-0 mb-1">
        <NavLink onClick={closeSidebar} to={"/home"} className="w-100 d-inline-block p-2 text-decoration-none text-white">Home</NavLink>
      </li>
      <li className="p-0 mb-1">
        <NavLink onClick={closeSidebar} to={"/categories"} className="w-100 d-inline-block p-2 text-decoration-none text-white">Categories</NavLink>
      </li>
      <li className="p-0 mb-1">
        <NavLink onClick={closeSidebar} to={"/area"} className="w-100 d-inline-block p-2 text-decoration-none text-white">Area</NavLink>
      </li>
      <li className="p-0 mb-1">
        <NavLink onClick={closeSidebar} to={"/ingredients"} className="w-100 d-inline-block p-2 text-decoration-none text-white">Ingredients</NavLink>
      </li>
      <li className="p-0 mb-1">
        <NavLink onClick={closeSidebar} to={"/contact"} className="w-100 d-inline-block p-2 text-decoration-none text-white">Contact Us</NavLink>
      </li>
    </ul>
    <div>
    <i class="fa-brands fa-facebook-f px-2"></i>
    <i class="fa-brands fa-twitter px-2"></i>
    <i class="fa-brands fa-youtube px-2"></i>
    </div>
  </div>

  <div className='d-flex flex-column justify-content-between  text-black px-2 py-3 bg-light'>
    <a className={`${styles.logo}`}>
      <img src={logo} className="w-100 pointer" alt="Yummy Logo" />
    </a>
    <i ref={iconSidebar} onClick={changeSidebarWidth} className='fa-solid fa-xmark fa-2x pointer'></i>
    <div className='d-flex flex-column '>
    <i class="fa-solid fa-share-nodes h5 py-2"></i>
    <i class="fa-solid fa-earth-americas h5 py-2"></i>
    </div>
   
  </div>
</nav>
  </>
}


