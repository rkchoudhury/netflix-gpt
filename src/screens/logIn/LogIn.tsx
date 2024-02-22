import React, { Ref, useRef, useState } from "react";

import { LOGIN_BACK_GROUND_IMAGE, NETFLIX_LOGO } from "../../utils/constants";
import { checkValidData } from "../../utils/validate";

const LogIn = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const email: Ref<HTMLInputElement> = useRef(null);
  const password: Ref<HTMLInputElement> = useRef(null);
  const name: Ref<HTMLInputElement> = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(
      email?.current?.value as string,
      password?.current?.value as string,
      name?.current?.value as string
    );
    setErrorMessage(message);
  };

  return (
    <div>
      <img src={NETFLIX_LOGO} alt="logo" className="absolute w-44" />
      <div className="absolute bg-black py-12 w-3/12 mx-auto right-0 left-0 my-36 rounded-sm bg-opacity-75">
        <div className="w-3/5 mx-auto right-0 left-0">
          <h1 className="text-white font-bold text-3xl mb-4">
            {isSignInForm ? "Sign Up" : "Sign In"}
          </h1>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col text-white"
          >
            {isSignInForm && (
              <input
                ref={name}
                placeholder="Full Name"
                type="text"
                className="p-2 my-4 bg-gray-700 bg-opacity-50 rounded-sm"
              />
            )}
            <input
              ref={email}
              placeholder="Email"
              type="email"
              className="p-2 my-4 bg-gray-700 bg-opacity-50 rounded-sm"
            />
            <input
              ref={password}
              placeholder="Password"
              type="password"
              className="p-2 my-4 bg-gray-700 bg-opacity-50 rounded-sm"
            />
            {!!errorMessage && (
              <p className="text-red-700 font-bold">{errorMessage}</p>
            )}
            <div className="my-4">
              <button
                onClick={handleButtonClick}
                className="bg-red-600 py-2 rounded-sm text-white font-semibold flex justify-center w-full"
              >
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
