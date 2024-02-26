import { Action } from "@reduxjs/toolkit";
import {
  authenticateUser,
  createUser,
  signOutUser,
  updateUserProfile,
} from "../../services/authenticationService";
import { updateUserInfo } from "../../redux/slices/userSlice";

const signInUser = async (
  email: string,
  password: string,
  setErrorMessage: (message: string) => void
) => {
  authenticateUser(email, password)
    .then((userDetails) => {
      return userDetails;
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
  dispatch: (value: Action) => void
) => {
  try {
    const userDetails = await createUser(email, password);
    const response = await updateUserProfile(userDetails, name, "");
    if (response) {
      dispatch(updateUserInfo({ name }));
    }
    return userDetails;
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

const userSignOut = async () => {
  try {
    await signOutUser();
  } catch (error) {
    console.log(error);
  }
};

export { signInUser, signUpUser, userSignOut };
