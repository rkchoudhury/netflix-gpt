import { Action } from "@reduxjs/toolkit";
import {
  authenticateUser,
  createUser,
  signOutUser,
  updateUserProfile,
} from "../../services/authenticationService";
import { updateUserInfo } from "../../redux/slices/userSlice";
import { NavigateFunction } from "react-router-dom";
import { ROUTE_NAMES } from "../../navigation/Routes";

const signInUser = async (
  email: string,
  password: string,
  setErrorMessage: (message: string) => void,
  navigate: NavigateFunction
) => {
  authenticateUser(email, password)
    .then((userDetails) => {
      if (userDetails) {
        navigate(ROUTE_NAMES.BROWSE);
      }
      // return userDetails;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = getErrorMessage(errorCode);
      setErrorMessage(errorMessage);
    });
};

const signUpUser = async (
  email: string,
  password: string,
  name: string,
  setErrorMessage: (message: string) => void,
  dispatch: (value: Action) => void,
  navigate: NavigateFunction
) => {
  try {
    const userDetails = await createUser(email, password);
    const response = await updateUserProfile(userDetails, name, "");
    if (response) {
      dispatch(updateUserInfo({ name }));
    }
    if (userDetails) {
      navigate(ROUTE_NAMES.BROWSE);
    }
    // return userDetails;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = getErrorMessage(errorCode);
    setErrorMessage(errorMessage);
  }
};

const getErrorMessage = (errorCode: string) => {
  switch (errorCode) {
    case "auth/email-already-in-use":
      return "Email Id already exist";
    case "auth/invalid-credential":
      return "Invalid Email Id / Password";
    default:
      return "Something went wrong, Please try again!!";
  }
};

const userSignOut = async (navigate: NavigateFunction) => {
  try {
    await signOutUser();
    navigate(ROUTE_NAMES.HOME);
  } catch (error) {
    console.log(error);
  }
};

export { signInUser, signUpUser, userSignOut };
