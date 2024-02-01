import { Searchresult as Searchresulttype } from '@/store/SearchresultStore';
import useSearchresultStore from '@/store/SearchresultStore';
import { useState } from 'react';
import Image from 'next/image';
import ranktypeParser from '@/utils/ranktypeParser';

interface ProfilescoreProps {
  SearchresultProps: Searchresulttype;
}

const Profilescore: React.FC<ProfilescoreProps> = ({ SearchresultProps }) => {
  const { Searchresult, SearchresultSet } = useSearchresultStore();
  const [isDeleteButtonVisible, setIsDeleteButtonVisible] = useState(false);

  const ranktypeurl = ranktypeParser(SearchresultProps.rank);

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
        <p className="flex items-center mr-1">
          <Image
            height={12}
            src={ranktypeurl ? ranktypeurl : ''}
            alt={`${SearchresultProps.rank}`}
          />
        </p>
        <div className="">
          <p className="">{SearchresultProps.score.split('(')[0]}</p>
        </div>
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
