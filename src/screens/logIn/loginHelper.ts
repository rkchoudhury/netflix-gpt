import {
  authenticateUser,
  createUser,
} from "../../services/authenticationService";

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
  setErrorMessage: (message: string) => void
) => {
  try {
    const userDetails = await createUser(email, password);
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

export { signInUser, signUpUser };
