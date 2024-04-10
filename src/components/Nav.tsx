'use client';
import React, { useEffect, useState } from 'react';
import logo from 'public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { usePathname } from 'next/navigation';
import useScrollControl from '@/hooks/useScrollControl';
import { useRecoilState } from 'recoil';
import { LoginState } from '@/atom/LoginState';
import NavDropdownUserMenu from './Nav/NavDropdownUserMenu';
import { NAV } from '@/constants/nav';
import { v4 as uuidv4 } from 'uuid';

const Nav = () => {
  // ssr hybrate 랜더링
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);

  const [isClient, setIsClient] = useState(false);

  if (!localStorage.getItem('token')) {
    console.log('토큰이 없습니다');
    setIsLoggedIn(false);
  }

  useEffect(() => {
    setIsClient(true);
  }, []);

  const pathname = usePathname();
  const firstPath = '/' + pathname.split('/')[1];

  const [isOpen, setIsOpen] = useState(false);

  // isOpen 상태에서는 스크롤 제어
  useScrollControl(isOpen);

  return (
    <div>
      {isClient && (
        <>
          <div className="w-full border-b border-orange3 bg-white">
            <div className="mx-auto flex h-[48px] w-full max-w-[1280px] items-center justify-between px-3 md:h-[62px] md:px-0 ">
              <Link href="/">
                <Image src={logo} alt="logo" className="h-[19px] w-[102px] md:h-[29px] md:w-[131px]" priority />
              </Link>
              <div className="flex items-center gap-5 md:gap-[50px]">
                <ul className="hidden gap-[20px] md:flex md:gap-[50px]">
                  {NAV.MENU_LIST.map((navItem) => (
                    <Link key={uuidv4()} href={navItem.href}>
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
                  <NavDropdownUserMenu />
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
          </div>
          {isOpen && (
            <div className="absolute flex h-full w-full overflow-hidden bg-white md:hidden">
              <ul className="m-2 w-full">
                {NAV.MENU_LIST.map((navItem) => (
                  <Link key={uuidv4()} href={navItem.href}>
                    <li
                      className={`prose-h7 border-b border-orange1 px-2 py-4 md:prose-h6 hover:text-orange2 ${
                        navItem.href === firstPath && 'text-orange2'
                      }`}>
                      {navItem.label}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Nav;
