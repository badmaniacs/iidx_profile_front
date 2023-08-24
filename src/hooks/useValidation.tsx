import { useEffect, useState } from 'react';
import { validateForm, FormValue, FormErrors } from '@/utils/validateForm';

const useValidation = () => {
  const [formData, setFormData] = useState(new FormData());
  const [formErrors, setFormErrors] = useState<FormErrors>({
    usernameError: false,
    emailError: false,
    passwordError: false,
    passwordConfirmError: false,
  });

  useEffect(() => {
    const formValues: FormValue = {
      username: formData.get('username') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      passwordConfirm: formData.get('passwordConfirm') as string,
    };

    const validationErrors: FormErrors = validateForm(formValues);

    setFormErrors(validationErrors);
  }, [formData]);

  return {
    formData,
    formErrors,
    setFormData,
  };
};

export default useValidation;
