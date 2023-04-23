import React from 'react';
import { createContext, useContext } from "react";
import {initializeApp} from "firebase/app" ;
import  {getAuth ,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword ,
    GoogleAuthProvider,
    signInWithPopup,
    
    
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBuplvQ35Yzf1_VAkVofrPVLDXFZSkg9i0",
    authDomain: "redflix-2552c.firebaseapp.com",
    projectId: "redflix-2552c",
    storageBucket: "redflix-2552c.appspot.com",
    messagingSenderId: "3855523776",
    appId: "1:3855523776:web:093038b2426433dc247225"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();

const FirbaseContext = createContext(null);

export const useFirebase = () =>useContext(FirbaseContext);

export const FirebaseProvider = (props) =>{
    const signUp = (email , password) =>{
        return createUserWithEmailAndPassword(auth , email , password)

        .catch(err => alert(err))
    }
    const signIn = (email , password) =>{
        return signInWithEmailAndPassword(auth , email , password)
            
            .catch(err => alert(err))
    }
    const GoogleSignIn = () =>{
            signInWithPopup(auth , GoogleProvider)
        // signInWithRedirect(auth,GoogleProvider)
    }
    return(
        <FirbaseContext.Provider value={{signUp ,signIn,GoogleSignIn}}>
            {props.children}
        </FirbaseContext.Provider>
    );
}

