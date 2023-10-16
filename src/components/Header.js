import React from "react";
import { useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { Logo } from "../utils/constants";

const Header = () => {
  const dispatch  = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const handleSignOut = () =>{
    const auth = getAuth();
signOut(auth).then(() => {}).catch((error) => {
  // An error happened.
  navigate('/error')
});
  }
  useEffect(()=>{
    const unSubscribe  = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL}))
        // ...
        navigate('/browse')
      } else {
        dispatch(removeUser())
        // User is signed out
        // ...
        navigate('/')
      }

    });
  return () => unSubscribe
  },[])
  return (
    <>
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img
          className="w-40"
          src={Logo}
          alt="Netflix Logo"
        ></img>
        {user && <div className="flex px-2">
          <img className="w-12 h-12" alt="user-icon" src={user?.photoURL}></img>
        <button className="font-bold text-white" onClick={handleSignOut}>Sign Out</button>
        </div>}
      </div>
    </>
  );
};

export default Header;
