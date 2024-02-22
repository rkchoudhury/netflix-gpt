const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const FULL_NAME_REGEX = /^[a-zA-Z ]{2,30}$/;

export const checkValidData = (
  email: string,
  password: string,
  name: string
) => {
  const isValidEmail = EMAIL_REGEX.test(email);
  const isValidPassword = PASSWORD_REGEX.test(password);
  const isValidName = FULL_NAME_REGEX.test(name);

  if (!isValidName) return "Invalid Name";

  if (!isValidEmail) return "Invalid Email";

  if (!isValidPassword) return "Invalid Password";

  return "";
};
