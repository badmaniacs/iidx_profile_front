import Link from 'next/link';
import { useRouter } from 'next/router';
import useAuthStore from '@/store/AuthStore';

const Authbutton = () => {
  const router = useRouter();
  const { logout } = useAuthStore();
  const logoutHandler = () => {
    logout();
    router.push('/');
  };
  return (
    <>
      <li className="hidden md:block">
        <Link className="btn btn-outline btn-sm" href="/update">
          Profile
        </Link>
      </li>
      <li className="hidden md:block">
        <Link className="btn btn-outline btn-sm" href="/update">
          Update
        </Link>
      </li>
      <li className="hidden md:block">
        <button className="btn btn-outline btn-sm" onClick={logoutHandler}>
          Sign Out
        </button>
      </li>
    </>
  );
};

export default Authbutton;
