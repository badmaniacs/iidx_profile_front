import { useRef } from 'react';
import useProfileStore from '@/store/ProfileDataStore';
import useSearchresultStore from '@/store/SearchresultStore';

import Searchbar from './searchbar';
import Profiledata from './profiledata';
import Profiletitle from './profiletitle';
import Profileclass from './profileclass';
import Profilearena from './profilearena';
import Profileqpro from './profileqpro';
import Profileradar from './profileradar';
import Profilescore from './profilescore';

import { captureComponent } from '@/utils/screenshot';
import { RiScreenshot2Fill } from 'react-icons/ri';

const Profiletable = () => {
  const { profile } = useProfileStore();
  const { Searchresult } = useSearchresultStore();

  const captureRef = useRef<HTMLDivElement>(null);

  const handleCapture = async () => {
    await captureComponent(captureRef);
  };

  const profileCategory = [
    {
      category: 'DJ NAME',
      data: profile ? profile.djName : '---',
    },
    {
      category: 'IIDX ID',
      data: profile ? profile.iidxId : '---',
    },
    {
      category: '소속 에리어',
      data: profile ? profile.region : '---',
    },
  ];

  return (
    <>
      <div className="flex items-center justify-center md:pb-10 pt-10">
        <div className="flex flex-col gap-0 flex-grow text-sm max-w-screen-sm">
          <Searchbar />
          <div
            ref={captureRef}
            className="relative flex flex-col border-2 border-black bg-profileback text-white h-[742px] mt-4"
          >
            {profile && (
              <div className="flex flex-col">
                <Profiletitle />
                <div className="grid grid-cols-5">
                  <div className="flex flex-col col-span-3">
                    {profileCategory.map((item) => (
                      <Profiledata
                        category={item.category}
                        data={item.data}
                        key={item.category}
                      />
                    ))}
                    <Profileclass classData={profile.class} />
                    <Profilearena arenaData={profile.arena} />
                  </div>
                  <Profileqpro qpro={profile.qpro} />
                </div>
                <Profileradar radar={profile.radar} />
              </div>
            )}
            <div className="grid grid-cols-5 grid-rows-3  self-center bg-black w-[94%] h-[23%] ">
              {Searchresult?.map((item) => (
                <Profilescore key={item.title} SearchresultProps={item} />
              ))}
            </div>
            <div className="font-extrabold mt-1 text-right font-color-gray">
              PASTAINFO.XYZ&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </div>
      {/* <div className="">
        <RiScreenshot2Fill
          onClick={handleCapture}
          className="h-10 w-10 mx-auto hover:cursor-pointer"
        />
      </div> */}
    </>
  );
};

export default Profiletable;
