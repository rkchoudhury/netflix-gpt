import React, { useState } from "react";

import { LOGIN_BACK_GROUND_IMAGE, NETFLIX_LOGO } from "../../utils/constants";

const LogIn = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <img src={NETFLIX_LOGO} alt="logo" className="absolute w-44" />
      <div className="absolute bg-black py-12 w-3/12 mx-auto right-0 left-0 my-36 rounded-sm bg-opacity-75">
        <div className="w-3/5 mx-auto right-0 left-0">
          <h1 className="text-white font-bold text-3xl mb-4">
            {isSignInForm ? "Sign Up" : "Sign In"}
          </h1>
          <form className="flex flex-col text-white">
            {isSignInForm && (
              <input
                placeholder="Full Name"
                type="text"
                className="p-2 my-4 bg-gray-700 bg-opacity-50 rounded-sm"
              />
            )}
            <input
              placeholder="Email"
              type="email"
              className="p-2 my-4 bg-gray-700 bg-opacity-50 rounded-sm"
            />
            <input
              placeholder="Password"
              type="password"
              className="p-2 my-4 bg-gray-700 bg-opacity-50 rounded-sm"
            />
            <div className="my-4">
              <button className="bg-red-600 py-2 rounded-sm text-white font-semibold flex justify-center w-full">
                {isSignInForm ? "Sign Up" : "Sign In"}
              </button>
              <div onClick={toggleSignInForm} className="mt-4 cursor-pointer">
                <p>
                  {isSignInForm
                    ? "Already Registered. Sign in here."
                    : "New to Netflix? Sign up now."}
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <img src={LOGIN_BACK_GROUND_IMAGE} alt="login_image" />
    </div>
  );
};

export default LogIn;