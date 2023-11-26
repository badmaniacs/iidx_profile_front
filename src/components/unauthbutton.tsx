import Link from 'next/link';

const Unauthbutton = () => {
  return (
    <>
      <li className="mr-3 md:block">
        <Link className="" href="/signin">
          로그인
        </Link>
      </li>
      <li className="md:block">
        <Link
          className=""
          href="/signup"
          style={{ textDecoration: 'none' }}
        >
          회원가입
        </Link>
      </li>
    </>
  );
};

export default Unauthbutton;
