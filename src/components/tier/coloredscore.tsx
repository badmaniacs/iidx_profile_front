interface ColoredscoreProps {
  scoreConversion: string;
  score: number;
}

const Coloredscore: React.FC<ColoredscoreProps> = ({
  scoreConversion,
  score,
}) => {
  let className = 'text-xs text-white';

  const regex = /([A-Za-z+-]+)(\d+)/;
  const splitedRank = scoreConversion.match(regex);
  if (splitedRank) {
    const rank = splitedRank[1];
    switch (rank) {
      case 'MAX-':
        className += ' font-outline-rainbow';
        break;
      case 'AAA+':
        className += ' font-outline-gold';
        break;
      case 'AAA-':
        className += ' font-outline-silver';
        break;
      case 'AA+':
        className += ' font-outline-silver';
        break;
      default:
        className += ' font-outline-bronze';
        break;
    }
  }

  return (
    <>
      <span className={className}>
        {scoreConversion}({score})
      </span>
    </>
  );
};

export default Coloredscore;
