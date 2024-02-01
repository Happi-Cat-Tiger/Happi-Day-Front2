'use client';
import React, { useState } from 'react';
import logo from 'public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineUser, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { usePathname } from 'next/navigation';
import useScrollControl from '@/hooks/useScrollControl';

const Nav = () => {
  const navList: { label: string; href: string }[] = [
    { label: '게시판', href: '/board' },
    { label: '이벤트', href: '/events' },
    { label: '굿즈/공구', href: '/sales' },
  ];
  const isLoggedIn = false;

  const pathname = usePathname();
  const firstPath = '/' + pathname.split('/')[1];

  const [isOpen, setIsOpen] = useState(false);

  // isOpen 상태에서는 스크롤 제어
  useScrollControl(isOpen);

  return (
    <nav>
      <section className="w-full border-b border-orange3 bg-white">
        <div className="mx-auto flex h-[48px] w-full max-w-[1280px] items-center justify-between px-3 md:h-[62px] md:px-0 ">
          <Link href="/">
            <Image src={logo} alt="logo" className="h-[19px] w-[102px] md:h-[29px] md:w-[131px]" priority />
          </Link>
          <div className="flex items-center gap-5 md:gap-[50px]">
            <ul className="hidden gap-[20px] md:flex md:gap-[50px]">
              {navList.map((navItem, idx) => (
                <Link key={idx} href={navItem.href}>
                  <li
                    className={`prose-h7 md:prose-h6 hover:text-orange2 ${
                      navItem.href === firstPath && 'text-orange2'
                    }`}>
                    {navItem.label}
                  </li>
                </Link>
              ))}
            </ul>
            {isLoggedIn ? (
              <AiOutlineUser className="icon-default rounded-full bg-[#F5F5F5] p-1" />
            ) : (
              <Link href="/auth/sign-in">
                <div className="prose-h7 md:prose-h6 hover:text-orange2">로그인</div>
              </Link>
            )}
            {isOpen ? (
              <AiOutlineClose className="icon-default md:hidden" onClick={() => setIsOpen(false)} />
            ) : (
              <AiOutlineMenu className="icon-default md:hidden" onClick={() => setIsOpen(true)} />
            )}
          </div>
        </div>
      </section>
      {isOpen && (
        <section className="absolute flex h-full w-full overflow-hidden bg-white md:hidden">
          <ul className="m-2 w-full">
            {navList.map((navItem, idx) => (
              <Link key={idx} href={navItem.href}>
                <li
                  className={`prose-h7 border-b border-orange1 px-2 py-4 md:prose-h6 hover:text-orange2 ${
                    navItem.href === firstPath && 'text-orange2'
                  }`}>
                  {navItem.label}
                </li>
              </Link>
            ))}
          </ul>
        </section>
      )}
    </nav>
  );
};

export default Nav;
