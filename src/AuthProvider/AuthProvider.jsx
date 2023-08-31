import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const AuthContext = createContext(null)
const  auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
 
const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading, setLoading] = useState(true)

 const createUser = (email ,password) =>{
    setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

 const signIn = (email, password) =>{
    setLoading(true)
     return signInWithEmailAndPassword(auth,email,password)
    
    }

//google sign  
  const googleSignIn =()=>{
   setLoading(true)
   return signInWithPopup(auth ,googleProvider)

   }

   //  update profile 
   const updateUserProfile =(name , photo)=>{
    return   updateProfile(auth.currentUser, {
         displayName:name, photoURL: photo })
      
   }

 const logOut =()=>{
    setLoading(true)
    return signOut(auth)
   }

useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log('current user' , currentUser)
            setLoading(false)
        
        })

 return ()=>{
       return unsubscribe() 
     }
    
    } , [])


 const authInfo ={
      user,
      loading,
      createUser ,
      signIn ,
      googleSignIn,
      updateUserProfile,
      logOut
    
    }

    return (
        <AuthContext.Provider  value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;