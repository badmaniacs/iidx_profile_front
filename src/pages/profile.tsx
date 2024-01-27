import Profiletable from '@/components/profiletable';
import useProfileStore from '@/store/ProfileDataStore';
import Link from 'next/link';
import useAuthStore from '@/store/AuthStore';
import { useRouter } from 'next/router';
import { useEffect,  } from 'react'

const Profile = () => {
  const { profile } = useProfileStore();
  const { isLoggedIn } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/signin');
    }
  }, [isLoggedIn, router]);

  return (
    <div className="flex flex-col gap-16 justify-center items-center">
      {profile ? (
        <Profiletable />
      ) : (
        <div className="flex flex-col items-center bg-bbblack bg-opacity-50 p-3 w-[50%]">
          <div className="">
            플레이 데이터가 없습니다. 먼저 갱신 작업을 진행해주세요.
          </div>
          <br />
          <Link className="btn btn-primary" href="/update">
            갱신하러 가기
          </Link>
        </div>
      )}
    </div>
  );
};

export default Profile;
