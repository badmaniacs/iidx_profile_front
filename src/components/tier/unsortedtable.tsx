import { Music } from '@/gql/graphql';
import Songcell from './songcell';

interface UnsortedtableProps {
  songs: {
    title: string;
    difficulty: string;
    normal: string;
    hard: string;
    version: string;
  }[];

  playdata: Music[];
}

const Unsortedtable: React.FC<UnsortedtableProps> = ({ songs, playdata }) => {
  return (
    <div className="grid grid-cols-7 text-sm items-center border-gray-300 border-t border-l mb-4">
      <div className="text-[10px] basis-11/12 ml-0 md:text-sm h-full w-full border-b flex justify-center items-center">
        <p className='text-center'>미분류</p>
      </div>
      <div className="col-span-6 border-l">
        <div className="grid grid-cols-3 md:grid-cols-6">
          {songs.map((song) => (
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
  );
};

export default Unsortedtable;
