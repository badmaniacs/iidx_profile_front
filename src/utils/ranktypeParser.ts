import AAA from '../asset/AAA.gif';
import AA from '../asset/AA.gif';
import A from '../asset/A.gif';
import B from '../asset/B.gif';
import C from '../asset/C.gif';
import D from '../asset/D.gif';
import E from '../asset/E.gif';
import F from '../asset/F.gif';

const ranktypeParser = (rank: string) => {
  let ranktypeurl;

  switch (rank) {
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
    default:
      ranktypeurl = '';
  }
  return ranktypeurl;
};

export default ranktypeParser;
