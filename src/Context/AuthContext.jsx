import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Services/Firebase";

const AuthContext=createContext();
export function useUserAuth(){
    return useContext(AuthContext)
}

export function AuthContextProvider({Children}){

    const [user,setuser]=useState({});

    useEffect(()=>{
     const unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
        setuser(currentuser)
     });

     return ()=>{
        unsubscribe();
     }
    },[])

    function signup(email,password){
    return createUserWithEmailAndPassword(auth,email,password);
    }

    function login(email,password){
       return signInWithEmailAndPassword(auth,email,password);
    }

    function logout(){
      return  signOut(auth);
    }

    return <AuthContext.Provider value={(user, login, signup, logout)}>{Children}</AuthContext.Provider>
}

