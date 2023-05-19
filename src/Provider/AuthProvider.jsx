import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";




export const AuthContext = createContext(null);
const auth = getAuth(app)



const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const AuthCon = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        
    }
    
    const SignIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () =>{
        setLoading(true)
        return signOut(auth);
    }
    

useEffect (() =>{
    const unsubsCribe = onAuthStateChanged(auth,loggedUser=>{
        console.log("this on going",loggedUser)
        setUser(loggedUser)
        setLoading(false)
    })
    return () =>{
        unsubsCribe();
    }
})

const info = {
    user,AuthCon,SignIn,logout,loading
}

    return (
        <AuthContext.Provider  value ={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;