import TierWrapper from '@/components/tierwrapper';
import useProfileStore from '@/store/ProfileDataStore';
import useAuthStore from '@/store/AuthStore';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from 'next/link';
import Cleartypecounter from '@/components/cleartypecounter';

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
  const iidxId = profile?.iidxId
  const musicDataSp = profile?.musicData.SP;

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
            <div className="flex justify-center items-center">
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
        <div className="flex flex-col justify-between gap-3">
          <h2 className="text-center text-2xl">
            IIDX SP LEVEL 12 HARD GAUGE RANK TABLE
          </h2>
          <br />
          <div className='flex flex-row justify-between'>
            {musicDataSp && <Cleartypecounter musicData={musicDataSp} />}
            <p className="text-right">DJ {djName}({iidxId})</p>
          </div>
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
