import React,{useEffect, useState} from 'react';
import './Nav.css';

function Nav() {
  const [show,handleShow] = useState(false);

  // this is used to make the navabr black on scrolling
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>100){
        handleShow(true);
      }
      else handleShow(false);
    });
    // as soon as you add it, you are removing the scrolling event listener
    return ()=>{
      window.removeEventListener("scroll",handleShow);
    };
  },[]);


  return (
    <div className={`nav ${show && "nav_black"}`}>
      {/* importing images */}
      <img className='nav_logo' src="netflixlogo.png" alt="Netflix Logo" />
      <img className='nav_avatar' src="Netflix-avatar.png" alt="Netflix Avatar" />
    </div>
  )
}

export default Nav
