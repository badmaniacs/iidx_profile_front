import Profiletable from '@/components/profiletable';
import useProfileStore from '@/store/ProfileDataStore';
import Link from 'next/link';
import useAuthStore from '@/store/AuthStore';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

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
    <>
      <div className="col-span-2">
        <br />
        <div className="bg-bbblack bg-opacity-50 p-4">
          <p>프로필에 넣고 싶은 성과를 검색하신 후, 검색 결과를 클릭해주세요.</p>
          <br/>
          <p>현재 개발 진행중이며, 디자인에 조금씩 변화가 있을 예정입니다.</p>
          <br/>
          <p>쿠프로의 경우 코나미 측에서 제공하는 이미지의 링크가 시간이 지나면 유효하지 않아서,</p>
          <br/>
          <p>갱신 직후에만 올바르게 출력되고 있습니다. 확인 후 이용하시기 바랍니다.</p>
        </div>
      </div>
      {profile ? (
        <Profiletable />
      ) : (
        <div className="flex flex-col gap-16 justify-center items-center">
          <div className="flex flex-col items-center bg-bbblack bg-opacity-50 p-3 w-[50%]">
            <div className="">
              플레이 데이터가 없습니다. 먼저 갱신 작업을 진행해주세요.
            </div>
            <br />
            <Link className="btn btn-primary" href="/update">
              갱신하러 가기
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
