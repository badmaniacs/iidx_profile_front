import { classParser } from '@/utils/classParser';

interface profileClassProps {
  classData: {
    SP?: string | null | undefined;
    DP?: string | null | undefined;
  };
}

const Profileclass: React.FC<profileClassProps> = ({ classData }) => {
  const classtypesp = classParser(classData ? classData.SP! : '---');
  const classtypedp = classParser(classData ? classData.DP! : '---');

  return (
    <div
      className="bg-black ml-5 mb-3 p-2 w-[79%] flex flex-row"
      style={{ fontFamily: 'MonoplexKRWideNerd-Bold' }}
    >
      <p className="basis-7/12">취득 단위</p>
      <div className="font-bold flex flex-row basis-5/12">
        <div className={`basis-1/2 text-center`}>
          <div>
            <div className={classtypesp}>
              {classData ? classData.SP! : '---'}
            </div>
            <div className="text-xs">SP</div>
          </div>
        </div>
        <div className={`basis-1/2 text-center`}>
          <div>
            <div className={classtypedp}>
              {classData ? classData.DP! : '---'}
            </div>
            <div className="text-xs">DP</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profileclass;
