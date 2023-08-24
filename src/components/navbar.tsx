import Authbutton from './authbutton';
import Link from 'next/link';
import Avatar from './avatar';

const Navbar = () => {
  /*
  @TODO
  로그인, 회원가입 컴포넌트 제작(비로그인)
  유저 컴포넌트 제작(로그인)
  */

  return (
    <div className="flex pt-4 items-center text-sm">
      <h1 className="font-bold text-xl">
        <Link href="/">
          IIDX<span className="text-primary">PROFILE</span>
        </Link>
      </h1>
      <div className="flex-1"></div>
      <ul className="flex items-center md:gap-6 relative">
        <Authbutton />
        <Avatar />
      </ul>
    </div>
  );
};

export default Navbar;
