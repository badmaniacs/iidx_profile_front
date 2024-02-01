import FCOMBO from '../asset/clflg7.gif';
import EXHC from '../asset/clflg6.gif';
import HARDC from '../asset/clflg5.gif';
import CLEAR from '../asset/clflg4.gif';
import ECLEAR from '../asset/clflg3.gif';
import ACLEAR from '../asset/clflg2.gif';
import FAIL from '../asset/clflg1.gif';

const cleartypeParser = (cleartype:string) => {
    let cleartypeurl

    switch (cleartype) {
        case 'F-COMBO':
          cleartypeurl = FCOMBO;
          break;
        case 'EXH-CLEAR':
          cleartypeurl = EXHC;
          break;
        case 'H-CLEAR':
          cleartypeurl = HARDC;
          break;
        case 'CLEAR':
          cleartypeurl = CLEAR;
          break;
        case 'E-CLEAR':
          cleartypeurl = ECLEAR;
          break;
        case 'A-CLEAR':
          cleartypeurl = ACLEAR;
          break;
        case 'FAILED':
          cleartypeurl = FAIL;
          break;
         default :
          cleartypeurl = '';
      }
      return cleartypeurl;
}

export default cleartypeParser