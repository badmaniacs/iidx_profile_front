import { Radar, RadarData } from '@/gql/graphql';
import Radarchart from './radarchart';

interface ProfileRadarProps {
  radar: RadarData;
}

const Profileradar: React.FC<ProfileRadarProps> = ({ radar }) => {
  return (
    <div className="grid grid-cols-2 bg-black justify-between m-5 mt-0 mb-3">
      <div className="flex flex-row">
        <div
          className="p-2 basis-2/5"
          style={{ fontFamily: 'MonoplexKRWideNerd-Bold' }}
        >
          <p>SP레이더</p>
          <p>{radar!.SP!.TOTAL}</p>
        </div>
        <div className="basis-3/5 w-[70%]">
          <Radarchart radardata={radar!.SP!} />
        </div>
      </div>
      <div className="flex flex-row">
        <div
          className="p-2 basis-2/5"
          style={{ fontFamily: 'MonoplexKRWideNerd-Bold' }}
        >
          <p>DP레이더</p>
          <p>{radar!.DP!.TOTAL}</p>
        </div>
        <div className="basis-3/5 w-[70%]">
          <Radarchart radardata={radar!.DP!} />
        </div>
      </div>
    </div>
  );
};

export default Profileradar;
