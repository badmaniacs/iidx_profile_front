interface TierwrapperlampProps {
  clearCheck: number[];
}

const Tierwrapperlamp: React.FC<TierwrapperlampProps> = ({ clearCheck }) => {
  let className = 'border-l basis-1/12';

  switch (true) {
    case clearCheck.every((number) => number >= 5):
      className += ' bg-fcombo';
      break;
    case clearCheck.every((number) => number >= 4):
      className += ' bg-exhhard';
      break;
    case clearCheck.every((number) => number >= 3):
      className += ' bg-hard';
      break;
    case clearCheck.every((number) => number >= 2):
      className += ' bg-clear';
      break;
    case clearCheck.every((number) => number >= 1):
      className += ' bg-eclear';
      break;
    default:
      return <div className="basis-1/12"></div>;
      break;
  }

  return <div className={className}></div>;
};

export default Tierwrapperlamp;
