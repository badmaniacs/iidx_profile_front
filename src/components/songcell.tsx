import { Music } from '@/gql/graphql';
import { rankParser } from '@/utils/rankParser';
import Lamp from './lamp';
import { useEffect } from 'react';
import Coloredscore from './coloredscore';

interface songTier {
  title: string;
  difficulty: string;
  normal?: string;
  hard?: string;
  version?: string;
  playdata?: Music;
  clearCheck?: (item: number) => void;
}

const Songcell: React.FC<songTier> = (song: songTier) => {
  let score;
  let parsedScore;
  if (song.playdata?.score) {
    score = parseInt(song.playdata?.score.split('(')[0]);
    if (score !== 0) {
      parsedScore = rankParser(
        song.title,
        song.difficulty,
        'SP',
        score as number,
      );
    }
  }
  let clearTypeToNumber = 0;
  switch (song.playdata?.clear_type) {
    case 'E-CLEAR':
      clearTypeToNumber = 1;
      break;
    case 'CLEAR':
      clearTypeToNumber = 2;
      break;
    case 'H-CLEAR':
      clearTypeToNumber = 3;
      break;
    case 'EXH-CLEAR':
      clearTypeToNumber = 4;
      break;
    case 'F-COMBO':
      clearTypeToNumber = 5;
      break;
    default:
      clearTypeToNumber = 0;
  }

  useEffect(() => {
    if (song.clearCheck) {
      song.clearCheck(clearTypeToNumber);
    }
  }, []);

  return (
    <div className="border-b border-r border-gray-100 p-0 m-0 flex flex-col ">
      <div className="flex flex-row grow">
        <div className="basis-11/12 w-[92%] flex flex-col">
          <span className="text-xs overflow-ellipsis overflow-hidden whitespace-nowrap">
            {song.difficulty === 'ANOTHER'
              ? song.title
              : song.difficulty === 'LEGGENDARIA'
              ? '†' + song.title
              : song.title + '[H]'}
          </span>
          <div className="mt-auto ">
            {parsedScore ? (
              <Coloredscore
                scoreConversion={parsedScore.scoreConversion}
                score={score as number}
              />
            ) : score === 0 ? (
              <br />
            ) : (
              score
            )}
          </div>
        </div>
        {song.playdata && <Lamp cleartype={song.playdata?.clear_type} />}
      </div>
    </div>
  );
};

export default Songcell;
