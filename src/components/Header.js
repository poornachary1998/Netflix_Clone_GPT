import React from "react";
import { useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { Logo } from "../utils/constants";
import { gptState } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gptToggle = useSelector((store)=> store?.GPT?.showGPTSearch)
  console.log('gptToggle: ', gptToggle);
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL,
          }),
        );
        // ...
        navigate("/browse");
      } else {
        dispatch(removeUser());
        // User is signed out
        // ...
        navigate("/");
      }
    });
    return () => unSubscribe;
  }, []);

  const handleGPTSearch = () =>{
dispatch(gptState())
  }
  console.log()

  return (
    <>
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-40" src={Logo} alt="Netflix Logo"></img>
        {user && (
          <div className="flex px-2">

            <button className="px-4 mx-8  py-3 my-2 text-white rounded-lg bg-purple-700" onClick={handleGPTSearch}>
              {gptToggle ? 'HomePage': 'GPT Search' }</button>
            <img
              className="w-12 h-12 mx-1 my-2"
              alt="user-icon"
              src={user?.photoURL}
            ></img>
            <button className="font-bold text-white mx-4 my-2" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
