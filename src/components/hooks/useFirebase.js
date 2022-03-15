import {getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import initilizationAuthentication from "../Firebase/firebase.init";

// firebase init 
initilizationAuthentication()


// google provider 
const googleProvider = new GoogleAuthProvider();

// firebase auth provider 
const auth = getAuth();

const useFirebase = () => {
    // all state declear here 
    const [user, setUser] = useState({})

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user)
            setUser(result.user)
        })
    }
    return {
        googleSignIn,
        user,
        setUser
    }
}



export default useFirebase;