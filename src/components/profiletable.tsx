import useProfileStore from '@/store/ProfileDataStore';

const Profiletable = () => {
  const { profile } = useProfileStore();

  return (
    <div className="flex items-center justify-center md:pb-32">
      <div className="flex flex-col gap-2 flex-grow text-sm max-w-screen-sm">
        <div className="relative flex flex-col border-2 border-black bg-profileback text-white h-[550px]">
          <div className="flex flex-col">
            <div className="self-center text-lg pt-2">INFORMATION</div>
            <br />
            <div className="grid grid-cols-5">
              <div className="flex flex-col col-span-3">
                <div className="bg-black ml-5 mb-3 p-2 w-[85%]">
                  DJ NAME {profile?.djName}
                </div>
                <div className="bg-black ml-5 mb-3 p-2 w-[85%]">
                  IIDX ID {profile?.iidxId}
                </div>
                <div className="bg-black ml-5 mb-3 p-2 w-[85%]">
                  소속 에리어 {profile?.region}
                </div>
                <div className="bg-black ml-5 mb-3 p-2 w-[85%]">
                  취득 단위 {profile?.class.SP} {profile?.class.DP}
                </div>
                <div className="bg-black ml-5 mb-3 p-2 w-[85%]">
                  아레나 클래스 {profile?.arena.SP} {profile?.arena.DP}
                </div>
              </div>
              <div className="col-span-2">
                <picture>
                  <img src={profile?.qpro} alt="qpro" />
                </picture>
              </div>
            </div>
          </div>
          <div className="self-center bg-black w-[92%] h-[30%]"></div>
        </div>
      </div>
    </div>
  );
};

export default Profiletable;
