import { tierData } from '@/utils/tier';
import useProfileStore from '@/store/ProfileDataStore';
import Unsortedtable from './unsortedtable';
import Sortedtable from './sortedtable';

interface TierWrapperProps {
  tier: string;
}

const TierWrapper: React.FC<TierWrapperProps> = ({ tier }) => {
  const { profile } = useProfileStore();
  const playdata = profile?.musicData.SP.filter((item) => item.level === 12);

  if (tier === '미분류') {
    const filterdSongList = tierData.filter((item) => item.hard === '');
    return (
      <>
        <Unsortedtable songs={filterdSongList} playdata={playdata!} />
      </>
    );
  }
  const filterdBytierSonglistEP = tierData.filter(
    (item) => item.hard === `ep ${tier}`,
  );
  const filterdBytierSonglistID = tierData.filter(
    (item) => item.hard === `id ${tier}`,
  );

  return (
    <Sortedtable
      idSongs={filterdBytierSonglistID}
      epSongs={filterdBytierSonglistEP}
      playdata={playdata!}
      tier={tier}
    />
  );
};

export default TierWrapper;
