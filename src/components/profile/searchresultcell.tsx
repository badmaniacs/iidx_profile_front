import useSearchresultStore from '@/store/SearchresultStore';
import { Dispatch, RefObject, SetStateAction } from 'react';
import { Music } from '@/gql/graphql';
import isEqual from 'lodash/isEqual';
import Image, { StaticImageData } from 'next/image';

import ranktypeParser from '@/utils/ranktypeParser';
import cleartypeParser from '@/utils/cleartypeParser';

interface SearchresultcellProps {
  title: string;
  level: number;
  difficulty: string;
  rank: string;
  score: string;
  cleartype: string;
  playtype: string;
  inputClearHandler: () => void;
  setFilteredMusicData: Dispatch<SetStateAction<Music[]>>;
}

const Searchresultcell: React.FC<SearchresultcellProps> = ({ ...props }) => {
  const playtypeanddif = `${props.playtype}${props.difficulty}`;

  const { SearchresultSet, Searchresult } = useSearchresultStore();

  const ranktypeurl = ranktypeParser(props.rank);
  const cleartypeurl = cleartypeParser(props.cleartype);

  const AddSearchresultHadnler = () => {
    const music = {
      title: props.title,
      level: props.level,
      difficulty: props.difficulty,
      rank: props.rank,
      score: props.score,
      cleartype: props.cleartype,
      playtype: props.playtype,
    };
    if (Searchresult !== null && Searchresult.length > 14) {
      props.inputClearHandler();
      props.setFilteredMusicData([]);
      return;
    }
    if (Searchresult?.some((item) => isEqual(item, music))) {
      props.inputClearHandler();
      props.setFilteredMusicData([]);
      return;
    }
    if (Searchresult !== null) {
      SearchresultSet([...Searchresult, music]);
    } else if (Searchresult === null) {
      SearchresultSet([music]);
    }
    props.inputClearHandler();
    props.setFilteredMusicData([]);
  };

  return (
    <div
      onClick={AddSearchresultHadnler}
      className="bg-black p-2 hover:bg-gray cursor-pointer flex-row flex"
    >
      <p className="basis-2/5">
        {props.title} {playtypeanddif}
      </p>
      <p className="basis-1/5">
        {cleartypeurl !== "" ? <Image
          src={cleartypeurl as StaticImageData}
          alt={`${props.cleartype}`}
          width={90}
        /> : props.cleartype}
      </p>
      <p>
        {ranktypeurl !== "" ? (
          <Image src={ranktypeurl as StaticImageData} alt={`${props.rank}`} />
        ) : (
          props.rank
        )}{' '}
        {props.score}
      </p>
    </div>
  );
};

export default Searchresultcell;
