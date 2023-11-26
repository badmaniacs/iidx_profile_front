import useGeneratePass from '@/hooks/useGeneratePass';
import useGetProfile from '@/hooks/useUpdateProfile';
import useProfileStore from '@/store/ProfileDataStore';
import Link from 'next/link';
import useAuthStore from '@/store/AuthStore';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Spinner from '@/components/spinner';

const Update = () => {
  const { generateHandler, status, canGenerate, passMutation } =
    useGeneratePass();
  const { updateHandler, updateMutation } = useGetProfile();
  const { profile } = useProfileStore();
  const { isLoggedIn } = useAuthStore();
  const router = useRouter();

  const kstDate = new Date(profile?.createAt).toLocaleString('ko-KR', {
    timeZone: 'Asia/Seoul',
  });

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/signin');
    }
  }, [isLoggedIn, router]);

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-16">
      {updateMutation.isLoading && <Spinner />}
      {passMutation.isLoading && <Spinner />}
      <div className="col-span-2 flex flex-col gap-8">
        <h2 className="text-2xl font-bold svelte-1vnrqhj">
          개인용 업데이터 토큰
        </h2>
        <div className="col-span-2 flex flex-col gap-4 bg-bbblack p-4 bg-opacity-50">
          <div className="code flex items-center">
            <div className="flex-1 relative h-[48px]">
              <div className="overflow-hidden overflow-ellipsis absolute left-0 top-0 w-full h-full leading-[48px] pr-4">
                <span className="opacity-50">{status}</span>
              </div>
            </div>
            <div className="h-full flex items-center justify-center">
              <button
                className="btn btn-primary"
                disabled={!canGenerate}
                onClick={generateHandler}
              >
                발급하기
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl font-bold svelte-1vnrqhj">업데이트 시작하기</h2>
        <div className="flex flex-col gap-4">
          <span>
            토큰을 발급 받은 후에{` `}
            <Link href="https://p.eagate.573.jp/" className="text-primary" target='_blank'>
              e-amusement
            </Link>
            에 접속합니다.
          </span>
          <div className="bg-bbblack bg-opacity-50 p-4">
            javascript:$.getScript(&quot;https://iidxdatascraper.s3.ap-northeast-2.amazonaws.com/bundle.js&quot;)
          </div>
          <p>
            베이직 코스에 가입 된 계정에 로그인 한 다음, 크롬 브라우저에서 F12
            버튼을 눌러 개발자 도구를 열고, Console 탭에 위의 스크립트를
            붙여넣기 후 엔터를 눌러주세요.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl font-bold svelte-1vnrqhj">업데이터 이용하기</h2>
        <div className="flex flex-col gap-4">
          <p>
            업데이터가 로딩 된 후, 발급 받은 토큰을 사용해서 업데이트를
            진행해주세요. 갱신이 완료된 후, 아래의 버튼을 누르면 서버에 저장된
            최근의 기록을 홈페이지로 가져옵니다.
          </p>
        </div>
        <p className="bg-bbblack bg-opacity-50 p-4">
          마지막으로 가져온 데이터 : {profile ? `${kstDate} 생성됨.` : `없음`}
        </p>
        <div className="flex flex-row justify-center">
          <button className="btn btn-primary w-[25%]" onClick={updateHandler}>
            최신화하기
          </button>
        </div>
      </div>
      <div className="col-span-2">
        <h2 className="text-2xl font-bold">주의사항</h2>
        <br />
        <div className="bg-bbblack bg-opacity-50 p-4">
          <p>베이직 코스에 가입 된 계정만 이용할 수 있습니다.</p>
          <br />
          <p>
            토큰은 30분에 한 번 발급 가능하며 갱신이 완료되면 더이상 사용할 수
            없습니다.
          </p>
          <br />
          <p>
            본 서비스는 크롬 브라우저에 맞춰 제작되었으며, 다른 브라우저 이용시
            원할하게 작동되지 않을 수 있습니다.
          </p>
          <br />
          <p>
            크롬 브라우저의 번역 기능을 통해 e-amusement 사이트가 번역이
            되어있는 경우, 업데이터가 제대로 작동하지 않는 버그가 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Update;
