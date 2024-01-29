import { Music } from '@/gql/graphql';
import useProfileStore from '@/store/ProfileDataStore';
import { RefObject, useEffect, useState } from 'react';
import Searchresultcell from './searchresultcell';

interface SearchresultProps {
  formValue: {
    playtype: string;
    difficulty: string;
    level: number;
    title: string;
  };
  inputClearHandler: () => void
}

const Searchresult: React.FC<SearchresultProps> = ({ formValue, inputClearHandler }) => {
  const musicData = useProfileStore().profile?.musicData;
  const [filteredMusicData, setFilteredMusicData] = useState<Music[]>([]);

  useEffect(() => {
    const filterMusicData = () => {
      if (!musicData) return [];

      const { playtype, difficulty, level, title } = formValue;

      if (!title.trim()) {
        setFilteredMusicData([]);
        return;
      }

      let selectedDifficulty: string;
      if (difficulty === 'N') {
        selectedDifficulty = 'NORMAL';
      } else if (difficulty === 'H') {
        selectedDifficulty = 'HYPER';
      } else if (difficulty === 'A') {
        selectedDifficulty = 'ANOTHER';
      } else if (difficulty === 'L') {
        selectedDifficulty = 'LEGGENDARIA';
      }

      const selectedPlaytype = playtype === 'SP' ? musicData.SP : musicData.DP;

      const result = selectedPlaytype
        .filter((item) => {
          return (
            item.level.toString() === level.toString() &&
            item.difficulty === selectedDifficulty &&
            item.music_name.includes(title)
          );
        })
        .sort((a, b) => {
          const similarityA = calculateSimilarity(a.music_name, title);
          const similarityB = calculateSimilarity(b.music_name, title);

          return similarityB - similarityA;
        })
        .slice(0, 10);

      setFilteredMusicData(result);
    };

    filterMusicData();
    console.log(filteredMusicData);
  }, [formValue, musicData]);

  const calculateSimilarity = (str1: string, str2: string): number => {
    const commonChars: string[] = [];

    for (const char of str1) {
      if (str2.includes(char)) {
        commonChars.push(char);
      }
    }

    const similarity = commonChars.length / Math.max(str1.length, str2.length);

    return similarity;
  };

  return (
    <div className="">
      {filteredMusicData?.map((item) => (
        <Searchresultcell
          key={item.music_name}
          title={item.music_name}
          score={item.score}
          difficulty={formValue.difficulty}
          cleartype={item.clear_type}
          level={item.level}
          rank={item.rank}
          playtype={formValue.playtype}
          inputClearHandler={inputClearHandler}
          setFilteredMusicData={setFilteredMusicData}
        />
      ))}
    </div>
  );
};

export default Searchresult;
