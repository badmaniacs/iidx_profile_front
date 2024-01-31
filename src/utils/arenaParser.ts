import A1 from '../asset/a1.png';
import A2 from '../asset/a2.png';
import A3 from '../asset/a3.png';
import A4 from '../asset/a4.png';
import A5 from '../asset/a5.png';

import B1 from '../asset/b1.png';
import B2 from '../asset/b2.png';
import B3 from '../asset/b3.png';
import B4 from '../asset/b4.png';
import B5 from '../asset/b5.png';

export const arenaParser = (arenatype: string) => {
  let arenaurl;
  switch (arenatype) {
    case 'A1':
      arenaurl = A1;
      break;
    case 'A2':
      arenaurl = A2;
      break;
    case 'A3':
      arenaurl = A3;
      break;
    case 'A4':
      arenaurl = A4;
      break;
    case 'A5':
      arenaurl = A5;
      break;
    case 'B1':
      arenaurl = B1;
      break;
    case 'B2':
      arenaurl = B2;
      break;
    case 'B3':
      arenaurl = B3;
      break;
    case 'B4':
      arenaurl = B4;
      break;
    case 'B5':
      arenaurl = B5;
      break;
    default:
      arenaurl = '';
      break;
  }

  return arenaurl
};
