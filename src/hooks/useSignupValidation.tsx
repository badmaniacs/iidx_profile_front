import { useState } from 'react';

interface UserInput {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const useSignupValidation = () => {
  const [usernameError, setUsernameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [passwordConfirmError, setPasswordConfirmError] =
    useState<boolean>(false);

  const validateUsername = (username: string): boolean => {
    const usernameRegex = /^[a-z0-9]{4,15}$/;
    const isValid = username.match(usernameRegex) !== null;
    setUsernameError(!isValid);
    return isValid;
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = email.match(emailRegex) !== null;
    setEmailError(!isValid);
    return isValid;
  };

  const validatePassword = (password: string): boolean => {
    const passwordRegex = /^[a-zA-Z\d@#$%^&+=!]{8,15}$/;
    const isValid = password.match(passwordRegex) !== null;
    setPasswordError(!isValid);
    return isValid;
  };

  const validatePasswordConfirm = (
    password: string,
    passwordConfirm: string,
  ): boolean => {
    const isValid = password === passwordConfirm;
    setPasswordConfirmError(!isValid);
    return isValid;
  };

  const validateAll = (userInput: UserInput): boolean => {
    const isUsernameValid = validateUsername(userInput.username);
    const isEmailValid = validateEmail(userInput.email);
    const isPasswordValid = validatePassword(userInput.password);
    const isPasswordConfirmValid = validatePasswordConfirm(
      userInput.password,
      userInput.passwordConfirm,
    );

    return (
      isUsernameValid &&
      isEmailValid &&
      isPasswordValid &&
      isPasswordConfirmValid
    );
  };

  return {
    usernameError,
    emailError,
    passwordError,
    passwordConfirmError,
    validateAll,
  };
};

export default useSignupValidation;
