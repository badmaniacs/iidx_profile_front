import Link from 'next/link';

const Authbutton = () => {
  return (
    <>
      <li className="hidden md:block">
        <Link className="btn btn-outline btn-sm" href="/signin">
          Sign In
        </Link>
      </li>
      <li className="hidden md:block">
        <Link
          className="btn btn-neutral btn-sm"
          href="/signup"
          style={{ textDecoration: 'none' }}
        >
          Create Account
        </Link>
      </li>
    </>
  );
};

export default Authbutton;
