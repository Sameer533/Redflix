import React from "react";
import "./App.css";
import HomeScreen from "./HomeScreen";
import Detailpage from "./components/Detailpage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen";
import { useFirebase } from "./Context/firebase";
import { useEffect, useState } from "react";
import {getAuth ,onAuthStateChanged , signOut} from 'firebase/auth'
import {app} from "./firebase";
const auth = getAuth(app);

function App() {
  const firebase = useFirebase();

  const[user , setuser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth , (user)=>{
      if(user){
      // console.log(user);
        setuser(user);
      }else{
        // console.log("you are logged out");
        setuser(null);

      }


    });
  
    
  }, [])
  
  return (
    <div className="app">
    {/* <div className="Anonymous_div"> <button className="Anonymous_login">Anonymous Login</button></div> */}
      <BrowserRouter>
        {!user ? (
         
          <LoginScreen />
         
         

        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/details" element ={<Detailpage/>} />

          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
