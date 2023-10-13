import React, { useEffect } from "react";
import Browse from "./Browse";
import LoginPage from "./LoginPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import {addUser, removeUser} from '../utils/userSlice'
const Body = () => {

  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid, email, displayName, photoURL} = user;
      dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL}))
      // ...
    } else {
      dispatch(removeUser())
      // User is signed out
      // ...
    }
  });

},[])
  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  );
};

export default Body;
