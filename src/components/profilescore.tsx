import { Searchresult as Searchresulttype } from '@/store/SearchresultStore';
import useSearchresultStore from '@/store/SearchresultStore';
import { useState } from 'react';
import Image from 'next/image';

import AAA from '../asset/AAA.gif';
import AA from '../asset/AA.gif';
import A from '../asset/AAA.gif';
import B from '../asset/B.gif';
import C from '../asset/C.gif';
import D from '../asset/AAA.gif';
import E from '../asset/AAA.gif';
import F from '../asset/AAA.gif';

interface ProfilescoreProps {
  SearchresultProps: Searchresulttype;
}

const Profilescore: React.FC<ProfilescoreProps> = ({ SearchresultProps }) => {
  const { Searchresult, SearchresultSet } = useSearchresultStore();
  const [isDeleteButtonVisible, setIsDeleteButtonVisible] = useState(false);

  let ranktypeurl;

  switch (SearchresultProps.rank) {
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
  }

  const handleMouseOver = () => {
    setIsDeleteButtonVisible(true);
  };

  const handleMouseOut = () => {
    setIsDeleteButtonVisible(false);
  };

  const DeleteSearchresultHandler = () => {
    if (!Searchresult) {
      return;
    }
    const newSearchresult = Searchresult?.filter(
      (item) =>
        item.title !== SearchresultProps.title ||
        item.score !== SearchresultProps.score ||
        item.difficulty !== SearchresultProps.difficulty,
    );
    SearchresultSet([...newSearchresult]);
  };

  return (
    <div
      className="grid grid-row border border-resultwrap relative"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <span className="row-span-1 text-xs text-center overflow-ellipsis overflow-hidden whitespace-nowrap">
        {SearchresultProps.title}
      </span>
      <span className="row-span-1 text-xs text-center h-[89%]">
        {SearchresultProps.playtype}
        {SearchresultProps.difficulty}
      </span>
      <span className="row-span-1 flex flex-row text-center text-xs justify-center">
        <p className=''>
          <Image
            height={12}
            src={ranktypeurl ? ranktypeurl : ''}
            alt={`${SearchresultProps.rank}`}
          />
        </p>
        <p className="place-self-center ml-1">{SearchresultProps.score.split('(')[0]}</p>
      </span>
      <div
        onClick={DeleteSearchresultHandler}
        className={`cursor-pointer absolute text-center align-top top-0 right-0 border border-gray-300 w-4 h-4 ${
          isDeleteButtonVisible ? '' : 'hidden'
        }`}
      >
        <p className="-mt-1">X</p>
      </div>
    </div>
  );
};

export default Profilescore;
