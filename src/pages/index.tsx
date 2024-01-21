import Link from 'next/link';
import { Timeline } from 'react-twitter-widgets';
import useAuthStore from '@/store/AuthStore';
import Head from 'next/head';

export default function Home() {
  const { isLoggedIn } = useAuthStore();
  const isMobile = window.innerWidth <= 600

  return (
    <>
      <Head>
        <meta
          name="description"
          content="beatmania IIDX 서열표, 난이도표, 프로필 제공 서비스 PASTAINFO"
        />
      </Head>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl text-center font-bold leading-normal">
            IIDX PASTAINFO에 오신 것을 환영합니다.
          </h2>
          <p className="text-xl text-center leading-relaxed">
            PASTAINFO는 Beatmania IIDX 시리즈의 악곡 데이터베이스와
            e-amusement에서 제공하는 플레이 데이터를 기반으로, 서열표 및 프로필
            생성 기능 등을 제공합니다.
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          {!isLoggedIn && (
            <div>
              <Link href="/signup" className="btn btn-primary">
                시작하기
              </Link>
            </div>
          )}
        </div>
        <hr className="border-t border-gray-300 my-0" />
        <div className="flex flex-col text-center gap-4 justify-center">
          <h2 className="text-2xl text-bold">공지사항</h2>
          <div className="flex justify-center">
            <Timeline
              dataSource={{
                sourceType: 'url',
                url: 'https://twitter.com/iidx_pastainfo',
              }}
              options={{
                height: isMobile ? '200px' : '400px',
                width: isMobile ? '300px' : '600px',
                theme: 'dark',
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
