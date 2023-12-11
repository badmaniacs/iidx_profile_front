interface SearchresultcellProps {
  title: string;
  level: number;
  difficulty: string;
  rank: string;
  score: string;
  cleartype: string;
  playtype: string;
}

const Searchresultcell: React.FC<SearchresultcellProps> = ({ ...props }) => {
  const playtypeanddif = `${props.playtype}${props.difficulty}`;

  return (
    <div className="bg-black p-2 hover:bg-gray cursor-pointer">
      {props.title} {playtypeanddif} {props.cleartype} {props.rank}{' '}
      {props.score}
    </div>
  );
};

export default Searchresultcell;
