// import Image from 'next/image';
import useProfileStore from '@/store/ProfileDataStore';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useAuthStore from '@/store/AuthStore';
import { useEffect, useState } from 'react';

const Avatar = () => {
  const { profile, clear } = useProfileStore();
  const qpro = profile?.qpro as string;
  const router = useRouter();
  const { logout } = useAuthStore();
  const logoutHandler = async () => {
    await router.push('/');
    logout();
    clear();
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {/* <Image src={`${qpro}.png`} alt="" width="20" height="20" /> */}
          {isMobile ? (
            // 햄버거 아이콘을 여기에 추가합니다. Tailwind CSS의 클래스를 활용하세요.
            <div className="hamburger-menu text-2xl">☰</div>
          ) : profile ? (
            <picture>
              <img src={`${qpro}.png`} alt="" width="20" height="20" />
            </picture>
          ) : (
            <div className="bg-white w-20 h-20" />
          )}
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
      >
        <li>
          <Link href="/tier">서열표</Link>
        </li>
        <li>
          <Link href="/profile">프로필</Link>
        </li>
        <li>
          <Link href="/update">업데이트</Link>
        </li>
        <li>
          <button onClick={logoutHandler}>로그아웃</button>
        </li>
      </ul>
    </div>
  );
};

export default Avatar;
