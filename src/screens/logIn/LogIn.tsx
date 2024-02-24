import React, { Ref, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { LOGIN_BACK_GROUND_IMAGE } from "../../utils/constants";
import { checkValidData } from "../../utils/validate";
import { signInUser, signUpUser } from "./loginHelper";
import Header from "../../components/Header";

const LogIn = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const email: Ref<HTMLInputElement> = useRef(null);
  const password: Ref<HTMLInputElement> = useRef(null);
  const name: Ref<HTMLInputElement> = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage("");
  };

  const handleButtonClick = () => {
    const emailText = email?.current?.value as string;
    const passwordText = password?.current?.value as string;
    const nameText = name?.current?.value as string;

    const message = checkValidData(emailText, passwordText, nameText);
    setErrorMessage(message);

    if (message) return;

    if (isSignInForm) {
      signUpUser(emailText, passwordText, nameText, setErrorMessage, dispatch);
    } else {
      signInUser(emailText, passwordText, setErrorMessage);
    }
  };

  return (
    <div>
      <Header />
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
              type="text"
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
