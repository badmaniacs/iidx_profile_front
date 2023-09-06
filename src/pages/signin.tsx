import useLoginUser from '@/hooks/useLoginUser';
import Link from 'next/link';
import useAuthStore from '@/store/AuthStore';
import { useRouter } from 'next/router';
import useGetProfile from '@/hooks/useUpdateProfile';

const Signin = () => {
  const { loginMutation } = useLoginUser();
  const [login] = useAuthStore((state) => [state.login]);
  const { initialUpdateHandler } = useGetProfile();
  const router = useRouter();

  const signinSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    const newFormData = new FormData(event.currentTarget);

    const user = await loginMutation.mutateAsync({
      username: newFormData.get('username') as string,
      password: newFormData.get('password') as string,
    });
    if (user) {
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
          <Link
            href="/forgot-password"
            className="text-center text-xs hover:underline opacity-50"
          >
            Forgot your password?
          </Link>
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
