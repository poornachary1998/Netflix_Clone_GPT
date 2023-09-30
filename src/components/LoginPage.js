import React, { useState } from "react";
import Header from "./Header";

const LoginPage = () => {
  const [signInStatus, setSignInStatus] = useState(false);

  const handleSignUpForm = () => {
    setSignInStatus(!signInStatus);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Netflix backbround"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-2">
          {signInStatus ? "Sign In" : "Sign Up"}
        </h1>
        <br />
        {!signInStatus ? (
          <input
            type="text"
            placeholder="Name"
            className="p-2 my-2 w-full bg-[#333333]"
          />
        ) : (
          <></>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-[#333333]"
        ></input>

        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-[#333333]"
        ></input>
        <button className="p-4 my-4 bg-red-700 w-full">
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
