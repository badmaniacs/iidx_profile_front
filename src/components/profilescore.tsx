import { Searchresult as Searchresulttype } from '@/store/SearchresultStore';
import useSearchresultStore from '@/store/SearchresultStore';
import { useState } from 'react';

interface ProfilescoreProps {
  SearchresultProps: Searchresulttype;
}

const Profilescore: React.FC<ProfilescoreProps> = ({ SearchresultProps }) => {
  const { Searchresult, SearchresultSet } = useSearchresultStore();
  const [isDeleteButtonVisible, setIsDeleteButtonVisible] = useState(false);

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
      className="flex flex-col border border-resultwrap relative"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <span className="text-xs text-center overflow-ellipsis overflow-hidden whitespace-nowrap">
        {SearchresultProps.title}
      </span>
      <span className="text-center">
        {SearchresultProps.playtype}
        {SearchresultProps.difficulty}
      </span>
      <span className="text-center">
        {SearchresultProps.rank} {SearchresultProps.score.split('(')[0]}
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
