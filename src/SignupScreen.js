import React from "react";
import { useState } from "react";

import "./signupScreen.css";
import { useFirebase } from "./Context/firebase";
const SignupScreen = () => {
  
  const firebase = useFirebase();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div className="signupScreen">
      <div className="signupScreen_form"> 
        <h1>Sign In / Sign Up</h1>
        <input
          type="email"
          required
          placeholder="Email address"
          onChange={(e) => setemail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          required
          placeholder="Password"
          onChange={(e) => setpassword(e.target.value)}
          value={password}
        />

        <button
          onClick={() => {
            firebase.signIn(email, password);
          }}
        >
          Sign In
        </button>

        <button
          onClick={() => {
            firebase.signUp(email, password);
          }}
        >
          Sign Up

        </button>
      </div>
    </div>
  );
};

export default SignupScreen;
