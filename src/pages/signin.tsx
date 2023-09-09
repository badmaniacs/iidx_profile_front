import useLoginUser from '@/hooks/useLoginUser';
import Link from 'next/link';
import useAuthStore from '@/store/AuthStore';
import { useRouter } from 'next/router';
import useGetProfile from '@/hooks/useUpdateProfile';
import ErrorMessage from '@/components/errormessage';
import { useEffect } from 'react';
import Spinner from '@/components/spinner';

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
      {loginMutation.isLoading && <Spinner />}
      <h2 className="text-2xl font-bold">로그인</h2>
      <form className="flex flex-col gap-3 w-80" onSubmit={signinSubmitHandler}>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            name="username"
            placeholder="ID"
            className="h-12 border-2 border-opacity-100 border-lgray border-opacity-30 bg-bbblack pl-3 pr-3 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-blue-500 focus:ring-opacity-50 shadow-ring-offset shadow-ring shadow-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="h-12 border-2 border-opacity-100 border-lgray border-opacity-30 bg-bbblack pl-3 pr-3 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-blue-500 focus:ring-opacity-50 shadow-ring-offset shadow-ring shadow-none"
          />
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
            message="로그인 실패. 아이디/비밀번호를 확인해주세요."
          />
        </div>
        <div className="flex flex-col gap-2">
          <button className="btn flex gap-2 btn-primary">로그인</button>
          <span>
            계정이 없나요?{' '}
            <Link className="text-primary hover:underline" href="/signup">
              회원가입
            </Link>{' '}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signin;
