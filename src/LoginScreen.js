import React, { useState } from "react";
import "./loginScreen.css";
import { Link } from 'react-router-dom';

import SignupScreen from "./SignupScreen";
const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="Loginscreen">
      <div className="loginScreen_background">
      <Link to="/">
        <img
          className="loginScreen_logo"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmg2BLm8ADMCV-92zC6Xe3mMc0H99_T9E6uFhjLO_kJg1LoqyvheQB8DwoA7Bkmc3ZtehqA3UQFlEPBZ3mMicpnwGyKLzhLyPV1Xe_JCsth0m0g0sBV0aHOC195zKLzyEwIiRFQCkZMIEGd52PxS1VypzuNRmpiLq5etJKKS1Qga0zfWAtP6-qbN93/s1600/redflix.png"
          alt=""
          onClick={(e) => {
            e.preventDefault();
            setSignIn(false);
          }}
        />
        </Link>
        <button
          className={`loginscreen_btn ${signIn && "loginscreen_btnd"}`}
          onClick={(e) => {
            e.preventDefault();
            setSignIn(true);
          }}
        >
          SignIn
        </button>
        <div className="loginscreen_gradient"></div>
        <div className="loginScreen_body">
          {signIn ? (
            <SignupScreen />
          ) : (
            <>
              <h1>Unlimited films, TV programmes and more.</h1>
              <h2>Watch anywhere. Cancel at anytime</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership
              </h3>
              <div className="loginScreen_input">
                <form>
                  <input type="email" placeholder="Email address" />
                  <button
                    className="loginScreen_getStarted"
                    onClick={(e) => {
                      e.preventDefault();
                      setSignIn(true);
                    }}
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
