import React from 'react';
import logo from '../../public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
  const navList = ['게시판', '이벤트', '굿즈/공구', '로그인'];
  const navLink = ['/board/all', '/events', '/sales', '/auth/login'];

  return (
    <div className="w-full border-b-2 border-orange2">
      <div className="m-auto flex h-[60px] w-[1024px] flex-row items-center justify-between">
        <Link href="/">
          <Image src={logo} alt="logo" className="h-[29px] w-[131px] cursor-pointer" />
        </Link>
        <div>
          <ul className="flex flex-row gap-[50px]">
            {navList.map((el, idx) => (
              <li key={idx} className="prose-h6 cursor-pointer hover:text-orange2">
                <Link href={navLink[idx]}>{el}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
