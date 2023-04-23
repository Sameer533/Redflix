import React, { useEffect, useState } from 'react'
import "./nav.css"
import {app} from "../firebase";
import {getAuth ,onAuthStateChanged , signOut} from 'firebase/auth'
const auth = getAuth(app);

const Nav = () => {
  const [show , setshow] = useState(false);
  
  const transitionNavBar = () =>{

    if(window.scrollY > 100){
      setshow(true);
    }else{
      setshow(false);
    }
  };
  useEffect(()=>{
    window.addEventListener("scroll" ,transitionNavBar );
    return () => window.removeEventListener("scroll" , transitionNavBar);
  },[]);
  return (
    <div className={`nav ${show && "nav_black"}`}> 
    <div className="nav_contents">
  
 
    <img
    className='nav_logo' 
     src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmg2BLm8ADMCV-92zC6Xe3mMc0H99_T9E6uFhjLO_kJg1LoqyvheQB8DwoA7Bkmc3ZtehqA3UQFlEPBZ3mMicpnwGyKLzhLyPV1Xe_JCsth0m0g0sBV0aHOC195zKLzyEwIiRFQCkZMIEGd52PxS1VypzuNRmpiLq5etJKKS1Qga0zfWAtP6-qbN93/s1600/redflix.png" alt="Netflix Logo"  />
     



    <button className='logout_btn' onClick={()=>signOut(auth)}>Log Out</button>
    <img 
    className='nav_avatar'
    src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" alt="" />    
    
    </div>
    </div>
  )
}

export default Nav