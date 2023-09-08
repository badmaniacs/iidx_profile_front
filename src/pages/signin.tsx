import useLoginUser from '@/hooks/useLoginUser';
import Link from 'next/link';
import useAuthStore from '@/store/AuthStore';
import { useRouter } from 'next/router';
import useGetProfile from '@/hooks/useUpdateProfile';
import ErrorMessage from '@/components/errormessage';
import { useEffect } from 'react';

const Signin = () => {
  const { loginMutation, loginError } = useLoginUser();

  const { login, isLoggedIn } = useAuthStore();
  const { initialUpdateHandler } = useGetProfile();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn, router]);

  const signinSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    const newFormData = new FormData(event.currentTarget);

    const user = await loginMutation.mutateAsync({
      username: newFormData.get('username') as string,
      password: newFormData.get('password') as string,
    });
    if (user.data.LoginUser) {
      login(user.data.LoginUser);
      initialUpdateHandler(user.data.LoginUser.id);
      router.push('/');
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-full gap-8">
      <h2 className="text-2xl font-bold">Sign in</h2>
      <form className="flex flex-col gap-8 w-80" onSubmit={signinSubmitHandler}>
        <div className="flex flex-col gap-2">
          <input type="text" name="username" placeholder="ID" />
          <input type="password" name="password" placeholder="Password" />
          {/* <Link
            href="/forgot-password"
            className="text-center text-xs hover:underline opacity-50"
          >
            Forgot your password?
          </Link> */}
        </div>
        <div>
          <ErrorMessage
            condition={loginError}
            message="유효하지 않은 계정입니다."
          />
        </div>
        <div className="flex flex-col gap-2">
          <button className="btn flex gap-2 btn-primary">Sign In</button>
          <span>
            Don&apos;t have an account? <Link href="/signup">Sign Up</Link>{' '}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signin;
