import { useState } from 'react';
import { Music } from '@/gql/graphql';
import Songcell from './songcell';
import Tierwrapperlamp from './tierwrapperlamp';

interface SortedtableProps {
  idSongs: {
    title: string;
    difficulty: string;
    normal: string;
    hard: string;
    version: string;
  }[];

  epSongs: {
    title: string;
    difficulty: string;
    normal: string;
    hard: string;
    version: string;
  }[];

  tier: string;

  playdata: Music[];
}

const Sortedtable: React.FC<SortedtableProps> = ({
  idSongs,
  epSongs,
  tier,
  playdata,
}) => {
  const [EPclearCheck, setEpClearCheck] = useState<number[]>([]);
  const [IDclearCheck, setIdClearCheck] = useState<number[]>([]);

  const addEPclearCheck = (item: number) => {
    setEpClearCheck((prev) => [...prev, item]);
  };

  const addIDclearCheck = (item: number) => {
    setIdClearCheck((prev) => [...prev, item]);
  };

  return (
    <>
      <div className="grid grid-cols-7 text-sm items-center border-gray-300 border-t border-l mb-4">
        <div className="text-sm h-full w-full border-b flex flex-row">
          <div className="basis-11/12 flex ml-5 justify-center items-center">
            <p>지력{tier}</p>
          </div>
          <Tierwrapperlamp clearCheck={EPclearCheck} />
        </div>
        <div className="col-span-6 border-l">
          <div className="grid grid-cols-6">
            {epSongs.map((song) => (
              <Songcell
                key={song.title + song.difficulty}
                title={song.title}
                difficulty={song.difficulty}
                playdata={playdata?.find(
                  (item) =>
                    item.music_name === song.title &&
                    item.difficulty === song.difficulty,
                )}
                clearCheck={addEPclearCheck}
              />
            ))}
          </div>
        </div>
      </div>
      {tier === 'F' ? (
        <div></div>
      ) : (
        <div className="grid grid-cols-7 text-sm items-center border-gray-300 border-t border-l">
          <div className="text-sm h-full w-full border-b flex flex-row">
            <div className="basis-11/12  ml-5 flex justify-center items-center">
              <p>개인차{tier}</p>
            </div>
            <Tierwrapperlamp clearCheck={IDclearCheck} />
          </div>
          <div className="col-span-6 border-l">
            <div className="grid grid-cols-6 ">
              {idSongs.map((song) => (
                <Songcell
                  key={song.title + song.difficulty}
                  title={song.title}
                  difficulty={song.difficulty}
                  playdata={playdata?.find(
                    (item) =>
                      item.music_name === song.title &&
                      item.difficulty === song.difficulty,
                  )}
                  clearCheck={addIDclearCheck}
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

export default Sortedtable;
