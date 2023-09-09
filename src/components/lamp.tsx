interface LampProps {
  cleartype: string;
}

const Lamp: React.FC<LampProps> = ({ cleartype }) => {
  let className = 'border-l basis-1/12';

  switch (cleartype) {
    case 'F-COMBO':
      className += ' bg-fcombo';
      break;
    case 'EXH-CLEAR':
      className += ' bg-exhhard';
      break;
    case 'H-CLEAR':
      className += ' bg-hard';
      break;
    case 'CLEAR':
      className += ' bg-clear';
      break;
    case 'E-CLEAR':
      className += ' bg-eclear';
      break;
    case 'A-CLEAR':
      className += ' bg-aclear';
      break;
    case 'FAILED':
      className += ' bg-failed';
      break;
    case '':
      return <div></div>
      break;
  }

  return <div className={className}></div>;
};

export default Lamp;
