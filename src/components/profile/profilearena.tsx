import { arenaParser } from '@/utils/arenaParser';

import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface profileArenaProps {
  arenaData: {
    SP?: string | null | undefined;
    DP?: string | null | undefined;
  };
}

const Profilearena: React.FC<profileArenaProps> = ({ arenaData }) => {
  const arenatypesp = arenaParser(arenaData.SP as string);
  const arenatypedp = arenaParser(arenaData.DP as string);
  return (
    <div className="bg-black ml-5 mb-3 p-2 w-[79%] flex flex-row">
      <p
        style={{ fontFamily: 'MonoplexKRWideNerd-Bold' }}
        className="basis-7/12"
      >
        아레나 클래스
      </p>
      <div
        style={{ fontFamily: 'MonoplexKRWideNerd-Bold' }}
        className="flex flex-row basis-5/12"
      >
        <div className="basis-1/2 text-center flex flex-col">
          <div>
            {arenatypesp !== '' ? (
              <Image
                src={arenatypesp as StaticImport}
                height={20}
                alt={`${arenaData.SP}`}
                className=""
              />
            ) : (
              arenaData.SP
            )}
          </div>
          <p className="text-xs">SP</p>
        </div>
        <div className="basis-1/2 text-center flex flex-col">
          <div>
            {arenatypedp !== '' ? (
              <Image
                src={arenatypedp as StaticImport}
                height={18}
                alt={`${arenaData.DP}`}
              />
            ) : (
              arenaData.DP
            )}
          </div>
          <p className="text-xs text-center">DP</p>
        </div>
      </div>
    </div>
  );
};

export default Profilearena;
