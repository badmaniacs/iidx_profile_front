import useSearchresultStore from '@/store/SearchresultStore';
import { Dispatch, RefObject, SetStateAction } from 'react';
import { Music } from '@/gql/graphql';
import isEqual from 'lodash/isEqual';
import Image from 'next/image';

import FCOMBO from '../asset/clflg7.gif';
import EXHC from '../asset/clflg6.gif';
import HARDC from '../asset/clflg5.gif';
import CLEAR from '../asset/clflg4.gif';
import ECLEAR from '../asset/clflg3.gif';
import ACLEAR from '../asset/clflg2.gif';
import FAIL from '../asset/clflg1.gif';

import AAA from '../asset/AAA.gif';
import AA from '../asset/AA.gif';
import A from '../asset/AAA.gif';
import B from '../asset/B.gif';
import C from '../asset/C.gif';
import D from '../asset/AAA.gif';
import E from '../asset/AAA.gif';
import F from '../asset/AAA.gif';

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

  let cleartypeurl;
  let ranktypeurl;

  switch (props.cleartype) {
    case 'F-COMBO':
      cleartypeurl = FCOMBO;
      break;
    case 'EXH-CLEAR':
      cleartypeurl = EXHC;
      break;
    case 'H-CLEAR':
      cleartypeurl = HARDC;
      break;
    case 'CLEAR':
      cleartypeurl = CLEAR;
      break;
    case 'E-CLEAR':
      cleartypeurl = ECLEAR;
      break;
    case 'A-CLEAR':
      cleartypeurl = ACLEAR;
      break;
    case 'FAILED':
      cleartypeurl = FAIL;
      break;
    case '':
      cleartypeurl = '';
  }

  switch (props.rank) {
    case 'AAA':
      ranktypeurl = AAA;
      break;
    case 'AA':
      ranktypeurl = AA;
      break;
    case 'A':
      ranktypeurl = A;
      break;
    case 'B':
      ranktypeurl = B;
      break;
    case 'C':
      ranktypeurl = C;
      break;
    case 'D':
      ranktypeurl = D;
      break;
    case 'E':
      ranktypeurl = E;
      break;
    case 'F':
      ranktypeurl = F;
      break;
    default :
      ranktypeurl = "";
      break;
  }

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
        <Image
          src={cleartypeurl ? cleartypeurl : ''}
          alt={`${props.cleartype}`}
          width={90}
        />
      </p>
      <p>
        {ranktypeurl !== "" ? <Image src={ranktypeurl} alt={`${props.rank}`} /> : props.rank}{' '}
        {props.score}
      </p>
    </div>
  );
};

export default Searchresultcell;
