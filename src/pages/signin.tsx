import Link from 'next/link';

const Signin = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-full gap-8">
      <h2 className="text-2xl font-bold">Sign in</h2>
      <form className="flex flex-col gap-8 w-80">
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
