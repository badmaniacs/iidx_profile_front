import { tierData } from '@/utils/tier';
import Songcell from './songcell';
import useProfileStore from '@/store/ProfileDataStore';

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
        <div className="grid grid-cols-7 text-sm items-center border-gray-300 border-t border-l mb-4">
          <div className="text-sm h-full w-full border-b flex justify-center items-center">
            <p>미분류</p>
          </div>
          <div className="col-span-6 border-l">
            <div className="grid grid-cols-6 ">
              {filterdSongList.map((song) => (
                <Songcell
                  key={song.title + song.difficulty}
                  title={song.title}
                  difficulty={song.difficulty}
                  playdata={playdata?.find(
                    (item) =>
                      item.music_name === song.title &&
                      item.difficulty === song.difficulty,
                  )}
                />
              ))}
            </div>
          </div>
        </div>
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
    <>
      <div className="grid grid-cols-7 text-sm items-center border-gray-300 border-t border-l mb-4">
        <div className="text-sm h-full w-full border-b flex justify-center items-center">
          <p>지력{tier}</p>
        </div>
        <div className="col-span-6 border-l">
          <div className="grid grid-cols-6">
            {filterdBytierSonglistEP.map((song) => (
              <Songcell
                key={song.title}
                title={song.title}
                difficulty={song.difficulty}
                playdata={playdata?.find(
                  (item) =>
                    item.music_name === song.title &&
                    item.difficulty === song.difficulty,
                )}
              />
            ))}
          </div>
        </div>
      </div>
      {tier === 'F' ? (
        <div></div>
      ) : (
        <div className="grid grid-cols-7 text-sm items-center border-gray-300 border-t border-l">
          <div className="text-sm h-full w-full border-b flex justify-center items-center">
            <p>개인차{tier}</p>
          </div>
          <div className="col-span-6 border-l">
            <div className="grid grid-cols-6 ">
              {filterdBytierSonglistID.map((song) => (
                <Songcell
                  key={song.title}
                  title={song.title}
                  difficulty={song.difficulty}
                  playdata={playdata?.find(
                    (item) =>
                      item.music_name === song.title &&
                      item.difficulty === song.difficulty,
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      <br />
    </>
  );
};

export default TierWrapper;
