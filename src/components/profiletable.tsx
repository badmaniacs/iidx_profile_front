import useProfileStore from '@/store/ProfileDataStore';
import Radarchart from './radarchart';
import Searchbar from './searchbar';

const Profiletable = () => {
  const { profile } = useProfileStore();

  return (
    <div className="flex items-center justify-center md:pb-32">
      <div className="flex flex-col gap-0 flex-grow text-sm max-w-screen-sm">
        <Searchbar />
        <div className="relative flex flex-col border-2 border-black bg-profileback text-white h-[750px] mt-4">
          <div className="flex flex-col">
            <div className="self-center text-lg pt-2">INFORMATION</div>
            <br />
            <div className="grid grid-cols-5">
              <div className="flex flex-col col-span-3">
                <div className="bg-black ml-5 mb-3 p-2 w-[79%] flex justify-between">
                  <p>DJ NAME</p>
                  <p>{profile?.djName}</p>
                </div>
                <div className="bg-black ml-5 mb-3 p-2 w-[79%] flex justify-between">
                  <p>IIDX ID</p>
                  <p>{profile?.iidxId}</p>
                </div>
                <div className="bg-black ml-5 mb-3 p-2 w-[79%] flex justify-between">
                  <p>소속 에리어</p>
                  <p>{profile?.region}</p>
                </div>
                <div className="bg-black ml-5 mb-3 p-2 w-[79%] flex justify-between">
                  <p>취득 단위</p>
                  <p>
                    {profile?.class.SP} {profile?.class.DP}
                  </p>
                </div>
                <div className="bg-black ml-5 mb-3 p-2 w-[79%] flex justify-between">
                  <p>아레나 클래스</p>
                  <p>
                    {profile?.arena.SP} {profile?.arena.DP}
                  </p>
                </div>
              </div>
              <div className="col-span-2">
                <picture>
                  <img src={profile?.qpro} alt="qpro" />
                </picture>
              </div>
            </div>
            <div className="grid grid-cols-2 bg-black justify-between m-5 mt-0">
              <div className="flex flex-row">
                <p className="p-2 basis-2/5">SP레이더</p>
                <div className="basis-3/5 w-[70%]">
                  <Radarchart radardata={profile?.radar.SP!} />
                </div>
              </div>
              <div className="flex flex-row">
                <p className="p-2 basis-2/5">DP레이더</p>
                <div className="basis-3/5 w-[70%]">
                  <Radarchart radardata={profile?.radar.DP!} />
                </div>
              </div>
            </div>
          </div>
          <div className="self-center bg-black w-[92%] h-[27%]">
            <p>명트리플어쩌구 마레트리플어쩌구</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiletable;
