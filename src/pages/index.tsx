import Link from 'next/link';

export default function Home() {
  /* 
  @TODO 
  메인 페이지에 들어갈 컴포넌트 제작
  웰컴 컴포넌트 : 인삿말과 이용자 수
  공지사항 컴포넌트 : Tweet wizet
  문의사항
  */

  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl text-center font-bold leading-normal">
          성과를 포함한 IIDX 프로필을 만들어보세요
        </h2>
        <p className="text-xl text-center leading-relaxed">
          IIDX PASTAINFO은 e-amusement의 IIDX 홈페이지에서 플레이 기록을 가져와,
          프로필을 만들 수 있는 서비스입니다.
        </p>
      </div>
      <div className="flex gap-4 justify-center">
        <div>
          <Link href="/signup" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
