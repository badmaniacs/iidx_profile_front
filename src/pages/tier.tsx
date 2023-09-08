import TierWrapper from '@/components/tierwrapper';
import useProfileStore from '@/store/ProfileDataStore';
import useAuthStore from '@/store/AuthStore';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from 'next/link';

const tierList = [
  'S+',
  'S',
  'A+',
  'A',
  'B+',
  'B',
  'C',
  'D',
  'E',
  'F',
  '미분류',
];

const Tier = () => {
  const { profile } = useProfileStore();
  const { isLoggedIn } = useAuthStore();
  const router = useRouter();
  const djName = profile?.djName;

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/signin');
    }
  }, [isLoggedIn, router]);

  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-4">
        {!profile && (
          <>
            <div className='flex justify-center items-center'>
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
          </>
        )}
        <div className="flex flex-row justify-between">
          <h2>IIDX LEVEL 12 HARD RANK TABLE</h2>
          <p className="text-right">DJ {djName}</p>
        </div>
        <div className="">
          {tierList.map((tier) => (
            <TierWrapper tier={tier} key={tier} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tier;
