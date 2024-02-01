import useProfileStore from '@/store/ProfileDataStore';
import Radarchart from './radarchart';
import Searchbar from './searchbar';
import useSearchresultStore from '@/store/SearchresultStore';
import Profilescore from './profilescore';
import { useRef } from 'react';
import { RiScreenshot2Fill } from 'react-icons/ri';
import { captureComponent } from '@/utils/screenshot';

import { classParser } from '@/utils/classParser';
import { arenaParser } from '@/utils/arenaParser';

import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

const Profiletable = () => {
  const { profile } = useProfileStore();
  const { Searchresult } = useSearchresultStore();

  const captureRef = useRef<HTMLDivElement>(null);

  const handleCapture = async () => {
    await captureComponent(captureRef);
  };

  let classtypesp;
  let classtypedp;
  let arenatypesp;
  let arenatypedp;

  if (profile) {
    classtypesp = classParser(profile.class.SP as string);
    classtypedp = classParser(profile.class.DP as string);
    arenatypesp = arenaParser(profile.arena.SP as string);
    arenatypedp = arenaParser(profile.arena.DP as string);
  }

  return (
    <>
      <div className="flex items-center justify-center md:pb-10 pt-10">
        <div className="flex flex-col gap-0 flex-grow text-sm max-w-screen-sm">
          <Searchbar />
          <div
            ref={captureRef}
            className="relative flex flex-col border-2 border-black bg-profileback text-white h-[740px] mt-4"
          >
            <div className="flex flex-col">
              <div
                className="self-center text-lg pt-2 mb-3"
                style={{ fontFamily: 'MonoplexKRWideNerd-Bold' }}
              >
                INFORMATION
              </div>
              <div className="grid grid-cols-5">
                <div className="flex flex-col col-span-3">
                  <div
                    className="bg-black ml-5 mb-3 p-2 w-[79%] flex justify-between"
                    style={{ fontFamily: 'MonoplexKRWideNerd-Bold' }}
                  >
                    <p>DJ NAME</p>
                    <p>{profile?.djName}</p>
                  </div>
                  <div
                    className="bg-black ml-5 mb-3 p-2 w-[79%] flex justify-between"
                    style={{ fontFamily: 'MonoplexKRWideNerd-Bold' }}
                  >
                    <p>IIDX ID</p>
                    <p>{profile?.iidxId}</p>
                  </div>
                  <div
                    className="bg-black ml-5 mb-3 p-2 w-[79%] flex justify-between"
                    style={{ fontFamily: 'MonoplexKRWideNerd-Bold' }}
                  >
                    <p>소속 에리어</p>
                    <p
                      style={{ fontFamily: 'MonoplexKRWideNerd-Bold' }}
                      className="font-bold"
                    >
                      {profile?.region}
                    </p>
                  </div>
                  <div
                    className="bg-black ml-5 mb-3 p-2 w-[79%] flex flex-row"
                    style={{ fontFamily: 'MonoplexKRWideNerd-Bold' }}
                  >
                    <p className="basis-7/12">취득 단위</p>
                    <div className="font-bold flex flex-row basis-5/12">
                      <div className={`basis-1/2 text-center`}>
                        <div>
                          <div className={classtypesp}>{profile?.class.SP}</div>
                          <div className="text-xs">SP</div>
                        </div>
                      </div>
                      <div className={`basis-1/2 text-center`}>
                        <div>
                          <div className={classtypedp}>{profile?.class.DP}</div>
                          <div className="text-xs">DP</div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                              alt={`${profile?.arena.SP}`}
                              className=""
                            />
                          ) : (
                            profile?.arena.SP
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
                              alt={`${profile?.arena.DP}`}
                            />
                          ) : (
                            profile?.arena.DP
                          )}
                        </div>
                        <p className="text-xs text-center">DP</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 ">
                  <picture>
                    <img
                      src={`${profile?.qpro}?timestamp=${new Date().getTime()}`}
                      alt="qpro"
                      className="w-full h-auto"
                      style={{ marginLeft: '-20px' }}
                    />
                  </picture>
                </div>
              </div>
              <div className="grid grid-cols-2 bg-black justify-between m-5 mt-0 mb-3">
                <div className="flex flex-row">
                  <div
                    className="p-2 basis-2/5"
                    style={{ fontFamily: 'MonoplexKRWideNerd-Bold' }}
                  >
                    <p>SP레이더</p>
                    <p>{profile?.radar.SP?.TOTAL}</p>
                  </div>
                  <div className="basis-3/5 w-[70%]">
                    <Radarchart radardata={profile?.radar.SP!} />
                  </div>
                </div>
                <div className="flex flex-row">
                  <div
                    className="p-2 basis-2/5"
                    style={{ fontFamily: 'MonoplexKRWideNerd-Bold' }}
                  >
                    <p>DP레이더</p>
                    <p>{profile?.radar.DP?.TOTAL}</p>
                  </div>
                  <div className="basis-3/5 w-[70%]">
                    <Radarchart radardata={profile?.radar.DP!} />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5 grid-rows-3  self-center bg-black w-[94%] h-[23%] ">
              {Searchresult?.map((item) => (
                <Profilescore key={item.title} SearchresultProps={item} />
              ))}
            </div>
            <div className="font-extrabold mt-2 text-right font-color-gray">
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
