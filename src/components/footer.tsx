import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-bbblack bg-opacity-100 text-ttext p-8 mb-8 grid md:grid-cols-3 gap-8 text-sm relative z-10">
      <div className="flex flex-col gap-6 w-[70%]">
        <Link href="/" className="text-xl font-bold h-[30px] flex items-end">
          IIDX<span className="text-primary">PASTAINFO</span>
        </Link>
        <div className="flex gap-4">
          <Link href="/tweet" target="_blank">
            트위터
          </Link>
          <Link href="/git" target="_blank">
            깃헙
          </Link>
        </div>
        <div className="flex flex-col opacity-50 text-xs">
          {/* <Link href="/temp">Privacy Policy</Link>
          <Link href="/temp">Terms and Conditions</Link> */}

          <div>
            beatmania IIDX
            <br />
            ©2023 Konami Amusement
          </div>
          <p>
            This service was created by an individual who has no relationship
            with the relevant entity.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="h-[30px] flex items-end">
          <span className="text-base opacity-50">Useful Links</span>
        </div>
        <Link
          href="https://www.konami.com/amusement/video/bm2dx/"
          target="_blank"
        >
          IIDX Official Website
        </Link>
        <Link href="https://p.eagate.573.jp/" target="_blank">
          e-amusement
        </Link>
        <Link href="https://twitter.com/IIDX_OFFICIAL" target="_blank">
          IIDX Official Twitter
        </Link>
        {/* <Link href="/D">D</Link> */}
      </div>
      <div className="flex flex-col gap-4">
        <div className="h-[30px] flex items-end">
          <span className="text-base opacity-50">References</span>
        </div>
        <Link
          href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSUdp6iuEzE8Z5AL1hkoxzLexp89nJnLQMmICm6_MC0_UjCp1ImZFzabcZkvCpK7mcWvm_2t6iYoJRg/pubhtml#"
          target="_blank"
        >
          SP ☆12 서열표
        </Link>
        <Link href="https://textage.cc/" target="_blank">
          TexTage
        </Link>
        {/* <Link href="https://zasa.sakura.ne.jp/dp/readme.php" target="_blank">
          DP 서열표
        </Link> */}
        <Link href="https://iidx.org/" target="_blank">
          IIDX.org
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
