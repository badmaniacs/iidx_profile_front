import TierWrapper from '@/components/tierwrapper';
import useProfileStore from '@/store/ProfileDataStore';
import useAuthStore from '@/store/AuthStore';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

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
