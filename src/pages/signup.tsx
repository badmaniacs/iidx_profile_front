import Link from 'next/link';
import ErrorMessage from '@/components/errormessage';
import useCreateUser from '@/hooks/useCreateUser';
import useSignupValidation from '@/hooks/useSignupValidation';
import { useRouter } from 'next/router';
import useAuthStore from '@/store/AuthStore';
import useLoginUser from '@/hooks/useLoginUser';

const Signup = () => {
  const { createUser, usernameDupError, emailDupError } = useCreateUser();
  const {
    usernameError,
    passwordError,
    passwordConfirmError,
    emailError,
    validateAll,
  } = useSignupValidation();

  const { loginMutation, loginError } = useLoginUser();
  const [login] = useAuthStore((state) => [state.login]);
  const router = useRouter();

  const signupSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const newFormData = new FormData(event.currentTarget);
    const userInput = {
      username: newFormData.get('username') as string,
      email: newFormData.get('email') as string,
      password: newFormData.get('password') as string,
      passwordConfirm: newFormData.get('passwordConfirm') as string,
    };

    const isFormValid = validateAll(userInput);

    if (isFormValid) {
      const result = await createUser.mutateAsync({
        username: userInput.username,
        password: userInput.password,
        email: userInput.email,
      });

      if (result.data) {
        const user = await loginMutation.mutateAsync({
          username: userInput.username,
          password: userInput.password,
        });
        login(user.data.LoginUser);
        router.push('/');
      } else {
        return;
      }
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-full gap-8">
      <h2 className="text-2xl font-bold">회원가입</h2>
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
            condition={usernameError}
            message="ID must be between 4 and 15 characters."
          />
          <ErrorMessage condition={emailError} message="Email is invalid." />
          <ErrorMessage
            condition={passwordError}
            message="Password must be between 8 and 15 characters."
          />
          <ErrorMessage
            condition={passwordConfirmError}
            message="Passwords do not match."
          />
          <ErrorMessage
            condition={usernameDupError}
            message="Duplicate Username."
          />
          <ErrorMessage condition={emailDupError} message="Duplicate Email." />
        </div>
        <div className="flex flex-col gap-2">
          <button className="btn flex gap-2 btn-primary">회원가입</button>
          <span>
            이미 계정이 있으시다면 <Link href="/signin">로그인</Link>
          </span>
        </div>
      </form>
    </div>
  );
};
export default Signup;
