
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../Firebase/Firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    //Google Sign In
    const googleSignIn = (auth, provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    //Create User
    const createUser = (email, password, name, photoURL) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password, name, photoURL);
    }
    //Sign In user
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);

    }

     //LogOut
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    //Update Profile
    const updateUserProfile = (UpdateData) => {
        return updateProfile(auth.currentUser,UpdateData)
    }

    //Hold Current User data
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)

        })

        return () => {
            unSubscribe()
        }
    }, [])


    const userInfo = {
        user,
        loading,
        googleSignIn,
        createUser,
        signInUser,
        logOut,
        updateUserProfile
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;