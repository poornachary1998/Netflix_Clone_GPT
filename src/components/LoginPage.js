import React, { useState,useRef } from "react";
import Header from "./Header";
import { ValidateForm } from "../utils/validate";
import { auth } from "../utils/firebase";
import {signInWithEmailAndPassword,createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";


const LoginPage = () => {
  const dispatch = useDispatch();
  const [signInStatus, setSignInStatus] = useState(true);
  const [errMessage, seterrMessage] =  useState('');
  const email = useRef(null);
  const Fullname  = useRef(null)
  const password = useRef(null);

  const handleSignUpForm = () => {
    setSignInStatus(!signInStatus);
  };

  const handleSignUpButton = () =>{
const loginErrorMessage = ValidateForm(email?.current?.value,password?.current?.value);
console.log('email?.current?.value: ', email?.current?.value);
seterrMessage(loginErrorMessage)

if(loginErrorMessage) return;

if(!signInStatus){
// Sign Up
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log('user: ', user);
    
    updateProfile(user, {
      displayName: Fullname.current.value, photoURL: "https://media.licdn.com/dms/image/C5603AQFVtu1WXMpEIA/profile-displayphoto-shrink_100_100/0/1650520493207?e=1702512000&v=beta&t=LSYCuk-Zcc1k09mR_eJzfZt701VSJer0gZkUUP2fse4"
    }).then(() => {
      // Profile updated!
      // ...
// we are not getting the values of display name and photo because user is not updated in redux. We need to pull the user updated and dispatch the action.
const {uid, email, displayName, photoURL} = auth.currentUser;
dispatch( addUser({
  uid:uid,
  email:email,
  displayName:displayName, 
  photoURL:photoURL   
}))
    }).catch((error) => {
      // An error occurred
      // ...
      console.log(error)
      seterrMessage(error.message)
    });
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrMessage("Email already in use!")
    // ..
  })
}else{
  // sign In
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('user: ', user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrMessage(errorCode +"-"+ errMessage)
  });
  }
  }
  
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Netflix background"
        />
      </div>
      <form onSubmit={(e)=> e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-2">
          {signInStatus ? "Sign In" : "Sign Up"}
        </h1>
        <br />
        {!signInStatus ? (
          <input
            ref={Fullname}
            type="text"
            placeholder="Name"
            className="p-2 my-2 w-full bg-[#333333]"
          />
        ) : (
          <></>
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-[#333333]"
        ></input>

        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-2 my-2 w-full bg-[#333333]"
        ></input>
        <p className="text-red-300 py-2 px-2 font-bold text-large"
      >{errMessage }</p>
        <button  className="p-2 my-4 bg-red-700 w-full" onClick={handleSignUpButton}> 
          {signInStatus ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer text-center" onClick={handleSignUpForm}>
          {signInStatus
            ? "New to Netflix? Sign up now."
            : "Already Registered? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
