import Link from 'next/link';
import { useRouter } from 'next/router';
import useAuthStore from '@/store/AuthStore';
import useProfileStore from '@/store/ProfileDataStore';
import useSearchresultStore from '@/store/SearchresultStore';

const Authbutton = () => {
  const router = useRouter();
  const { logout } = useAuthStore();
  const { clear } = useProfileStore();
  const { clearSearch } = useSearchresultStore();
  const logoutHandler = async () => {
    await router.push('/');
    logout();
    clear();
    clearSearch();
  };

  return (
    <>
      <li className="hidden md:block">
        <Link className="" href="/tier">
          서열표
        </Link>
      </li>
      <li className="hidden md:block">
        <Link className="" href="/profile">
          프로필
        </Link>
      </li>
      <li className="hidden md:block">
        <Link className="" href="/update">
          업데이트
        </Link>
      </li>
      <li className="hidden md:block">
        <button className="" onClick={logoutHandler}>
          로그아웃
        </button>
      </li>
    </>
  );
};

export default Authbutton;
