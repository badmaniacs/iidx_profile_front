import Unauthbutton from './unauthbutton';
import Link from 'next/link';
import Avatar from './avatar';
import useAuthStore from '@/store/AuthStore';
import Authbutton from './authbutton';

const Navbar = () => {
  const { isLoggedIn } = useAuthStore();
  return (
    <div className="flex pt-4 items-center text-sm">
      <h1 className="font-bold text-xl">
        <Link href="/">
          IIDX<span className="text-primary">PASTAINFO</span>
        </Link>
      </h1>
      <div className="flex-1"></div>
      <ul className="flex items-center md:gap-6 relative">
        {!isLoggedIn && <Unauthbutton />}
        {isLoggedIn && <Authbutton />}
        {isLoggedIn && <Avatar />}
      </ul>
    </div>
  );
};

export default Navbar;
