import React, {createContext, useContext, useEffect, useState} from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,onAuthStateChanged, sendPasswordResetEmail} from "firebase/auth";
import { auth } from "../firebase";


const userAuthContext = createContext();

export function UserAuthContextProvider( {children} )
{
    const [user,setUser] = useState(); 
    function signUp(email,password)
    {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function logIn(email,password)
    {
        return signInWithEmailAndPassword(auth, email, password);
    }
    function logOut()
    {
        return signOut(auth);
    }

    function recoverPassword(email)
    {
        return sendPasswordResetEmail(auth,email);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
        });
        return () =>
        {
            unsubscribe();
        }
    },[])

    return(
        <userAuthContext.Provider value ={ {signUp , user, logIn, logOut, recoverPassword}}>
            {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth()
{
    return useContext(userAuthContext);
}