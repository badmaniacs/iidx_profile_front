import Link from 'next/link';
import ErrorMessage from '@/components/errormessage';
import useCreateUser from '@/hooks/useCreateUser';
import useValidation from '@/hooks/useValidation';

const Signup = () => {
  const { formErrors, setFormData } = useValidation();
  const { createUser, usernameDupError, emailDupError } = useCreateUser();

  const signupSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const newFormData = new FormData(event.currentTarget);
    setFormData(newFormData);

    if (Object.values(formErrors).some((error) => error)) {
      return;
    }

    createUser.mutate({
      username: newFormData.get('username') as string,
      email: newFormData.get('email') as string,
      password: newFormData.get('password') as string,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-full gap-8">
      <h2 className="text-2xl font-bold">Create Account</h2>
      <form className="flex flex-col gap-8 w-80" onSubmit={signupSubmitHandler}>
        <div className="flex flex-col gap-2">
          <input type="text" name="username" placeholder="ID" />
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input
            type="password"
            name="passwordConfirm"
            placeholder="Password (Again)"
          />
        </div>
        <div className="flex flex-col gap-2">
          <ErrorMessage
            condition={formErrors.usernameError}
            message="ID must be between 4 and 15 characters."
          />
          <ErrorMessage
            condition={formErrors.emailError}
            message="Email is invalid."
          />
          <ErrorMessage
            condition={formErrors.passwordError}
            message="Password must be between 8 and 15 characters."
          />
          <ErrorMessage
            condition={formErrors.passwordConfirmError}
            message="Passwords do not match."
          />
          <ErrorMessage
            condition={usernameDupError}
            message="Duplicate Username."
          />
          <ErrorMessage condition={emailDupError} message="Duplicate Email." />
        </div>
        <div className="flex flex-col gap-2">
          <button className="btn flex gap-2 btn-primary">Sign up</button>
          <span>
            Already have an account? <Link href="/signin">Sign in</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signup;
