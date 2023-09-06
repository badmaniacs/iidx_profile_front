interface LampProps {
  cleartype: string;
}

const Lamp: React.FC<LampProps> = ({ cleartype }) => {
  let className = 'border-l basis-1/12';

  switch (cleartype) {
    case 'F-COMBO':
      className += ' bg-skyblue bg-yellow bg-white';
      break;
    case 'EXH-CLEAR':
      className += ' bg-yellow bg-red';
      break;
    case 'H-CLEAR':
      className += ' bg-white';
      break;
    case 'CLEAR':
      className += ' bg-skyblue';
      break;
    case 'E-CLEAR':
      className += ' bg-lime';
      break;
    case 'A-CLEAR':
      className += ' bg-purple';
      break;
    case 'FAILED':
      className += ' bg-black';
      break;
    case 'NO_PLAY':
      className = '';
      break;
  }

  return <div className={className}></div>;
};

export default Lamp;
