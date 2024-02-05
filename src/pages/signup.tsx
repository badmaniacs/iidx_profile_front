import Link from 'next/link';
import ErrorMessage from '@/components/layouts/errormessage';
import useCreateUser from '@/hooks/useCreateUser';
import useSignupValidation from '@/hooks/useSignupValidation';
import { useRouter } from 'next/router';
import useAuthStore from '@/store/AuthStore';
import useLoginUser from '@/hooks/useLoginUser';
import { useEffect } from 'react';
import Spinner from '@/components/layouts/spinner';

const Signup = () => {
  const { createUser, usernameDupError, emailDupError } = useCreateUser();
  const {
    usernameError,
    passwordError,
    passwordConfirmError,
    emailError,
    validateAll,
  } = useSignupValidation();

  const { loginMutation } = useLoginUser();
  const { login, isLoggedIn } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn, router]);

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
      {createUser.isLoading && <Spinner />}
      {loginMutation.isLoading && <Spinner />}
      <h2 className="text-2xl font-bold">회원가입</h2>
      <form className="flex flex-col gap-4 w-80" onSubmit={signupSubmitHandler}>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            name="username"
            placeholder="ID"
            className="h-12 border-2 border-opacity-100 border-lgray  bg-bbblack pl-3 pr-3 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-blue-500 focus:ring-opacity-50 shadow-ring-offset shadow-ring shadow-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="h-12 border-2 border-opacity-100 border-lgray  bg-bbblack pl-3 pr-3 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-blue-500 focus:ring-opacity-50 shadow-ring-offset shadow-ring shadow-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="h-12 border-2 border-opacity-100 border-lgray  bg-bbblack pl-3 pr-3 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-blue-500 focus:ring-opacity-50 shadow-ring-offset shadow-ring shadow-none"
          />
          <input
            type="password"
            name="passwordConfirm"
            placeholder="Password (Again)"
            className="h-12 border-2 border-opacity-100 border-lgray  bg-bbblack pl-3 pr-3 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-blue-500 focus:ring-opacity-50 shadow-ring-offset shadow-ring shadow-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <ErrorMessage
            condition={usernameError}
            message="아이디는 4~15글자의 알파벳 소문자, 숫자만 사용 가능합니다."
          />
          <ErrorMessage condition={emailError} message="Email is invalid." />
          <ErrorMessage
            condition={passwordError}
            message="비밀번호는 8~15글자의 알파벳, 특수문자, 숫자만 사용 가능합니다."
          />
          <ErrorMessage
            condition={passwordConfirmError}
            message="비밀번호가 일치하지 않습니다."
          />
          <ErrorMessage
            condition={usernameDupError}
            message="중복된 아이디입니다."
          />
          <ErrorMessage
            condition={emailDupError}
            message="중복된 이메일입니다."
          />
        </div>
        <div className="flex flex-col gap-2">
          <button className="btn flex gap-2 btn-primary">회원가입</button>
          <span>
            이미 계정이 있으시다면{' '}
            <Link href="/signin" className="text-primary hover:underline">
              로그인
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};
export default Signup;
