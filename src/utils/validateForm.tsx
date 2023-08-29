export interface FormValue {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface FormErrors {
  usernameError: boolean;
  emailError: boolean;
  passwordError: boolean;
  passwordConfirmError: boolean;
}

export const validateForm = (formData: FormValue): FormErrors => {
  const errors: FormErrors = {
    usernameError: false,
    emailError: false,
    passwordError: false,
    passwordConfirmError: false,
  };

  const { username, email, password, passwordConfirm } = formData;

  if (formData. username === null) {
    return errors;
  }

  if (
    !/^[a-z0-9]+$/.test(username) ||
    username.length < 4 ||
    username.length > 15
  ) {
    errors.usernameError = true;
  }

  if (!email.includes('@')) {
    errors.emailError = true;
  }

  if (password.length < 8 || password.length > 15) {
    errors.passwordError = true;
  }

  if (password !== passwordConfirm) {
    errors.passwordConfirmError = true;
  }

  return errors;
};
