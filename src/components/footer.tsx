import Link from 'next/link';
import { BsDiscord, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-bbblack bg-opacity-100 text-ttext p-8 mb-8 grid md:grid-cols-3 gap-8 text-sm relative z-10">
      <div className="flex flex-col gap-6 w-[70%]">
        <Link href="/" className="text-xl font-bold h-[30px] flex items-end">
          IIDX<span className="text-primary">PASTAINFO</span>
        </Link>
        <div className="flex gap-4">
          <Link href="https://twitter.com/iidx_pastainfo" target="_blank">
            <BsTwitter className="h-6 w-6" />
          </Link>
          <Link href="https://discord.gg/6UAwubFP" target="_blank">
            <BsDiscord className="h-6 w-6" />
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
        <Link href="https://twitter.com/IIDX_OFFICIAL" target="_blank">
          IIDX Official Twitter
        </Link>
        <Link href="https://p.eagate.573.jp/" target="_blank">
          e-amusement
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
        <Link
          href="https://remywiki.com/Beatmania_IIDX_Information"
          target="_blank"
        >
          RemyWiki
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
