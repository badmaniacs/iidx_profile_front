import { Music } from '@/gql/graphql';
import { tierData } from '@/utils/tier';

interface CleartypecounterProps {
  musicData: Music[];
}

const Cleartypecounter: React.FC<CleartypecounterProps> = ({ musicData }) => {
  const clearTypes = [
    ['F-COMBO', 'fcombo'],
    ['EXH-CLEAR', 'exhhard'],
    ['H-CLEAR', 'hard'],
    ['CLEAR', 'clear'],
    ['E-CLEAR', 'eclear'],
    ['A-CLEAR', 'aclear'],
    ['FAILED', 'failed'],
  ];

  const clearTypeCounts = clearTypes.map((clearType) => {
    const count = musicData.filter(
      (item) => item.clear_type === clearType[0] && item.level === 12,
    ).length;
    return count;
  });

  const totalSongs = tierData.length;

  const noplayCount =
    totalSongs - clearTypeCounts.reduce((acc, count) => acc + count, 0) < 0
      ? 0
      : totalSongs - clearTypeCounts.reduce((acc, count) => acc + count, 0);

  const percentage = clearTypeCounts.map((count) => (count / totalSongs) * 100);

  return (
    <>
      <div className="flex font-outline-black text-sm w-[40%] h-5">
        {clearTypes.map((clearType, index) => {
          return (
            <div
              key={clearType[0]}
              className={`bg-${clearType[1]} min-w-[4%] text-center`}
              style={{ flex: `${percentage[index]}%` }}
            >
              {clearTypeCounts[index]}
            </div>
          );
        })}
        <div
          key="noplay"
          className="bg-noplay min-w-[4%] text-center"
          style={{ flex: `${(noplayCount / totalSongs) * 100}%` }}
        >
          {noplayCount}
        </div>
      </div>
    </>
  );
};

export default Cleartypecounter;
