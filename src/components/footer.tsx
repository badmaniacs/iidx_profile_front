import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-bbblack bg-opacity-100 text-ttext p-8 mb-8 grid md:grid-cols-4 gap-8 text-sm relative z-10">
      <div className="flex flex-col gap-8">
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
          <Link href="/temp">Privacy Policy</Link>
          <Link href="/temp">Terms and Conditions</Link>
          <div>
            © 2023 IIDXPASTAINFO
            <br />
            All rights reserved.
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="h-[30px] flex items-end">
          <span className="text-base opacity-50">Useful Links</span>
        </div>
        <Link href="/A">A</Link>
        <Link href="/B">B</Link>
        <Link href="/C">C</Link>
        <Link href="/D">D</Link>
      </div>
      <div className="flex flex-col gap-4">
        <div className="h-[30px] flex items-end">
          <span className="text-base opacity-50">Ref</span>
        </div>
        <Link href="/A">A</Link>
        <Link href="/B">B</Link>
        <Link href="/C">C</Link>
        <Link href="/D">D</Link>
      </div>
    </footer>
  );
};

export default Footer;
