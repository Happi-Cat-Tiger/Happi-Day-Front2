import { LoginState } from '@/atom/LoginState';
import { useGetSignoutService } from '@/hooks/queries/auth/authService';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import {
  BsUniversalAccessCircle,
  BsClipboard,
  BsBag,
  BsBalloonHeart,
  BsHandIndexThumb,
  BsEggFried,
  BsGear,
} from 'react-icons/bs';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';

const NavDropdownUserMenu = () => {
  const [, setIsLoggedIn] = useRecoilState(LoginState);
  const [isClick, setIsClick] = useState<boolean>(false);
  const router = useRouter();

  // 로그아웃 api
  // const logoutQuery = useGetSignoutService({ isClick });

  // if (logoutQuery.isSuccess) {
  //   setIsLoggedIn(false);
  //   setIsClick(false);
  //   toast('로그아웃되었습니다.');
  // }

  return (
    <div className="group relative z-10">
      <AiOutlineUser className="icon-default rounded-full bg-[#F5F5F5] p-1" />
      <div className="absolute h-5 w-[100px]"></div>
      <div className="absolute right-0 top-10 hidden w-[180px] flex-col gap-5 rounded border-[1px] border-gray6 bg-white p-3 shadow-2xl group-hover:flex md:top-12 md:w-[200px] md:gap-7 md:p-4">
        <div className="flex items-center gap-2">
          <AiOutlineUser className="icon-default rounded-full bg-[#F5F5F5] p-1" />
          <span className="prose-h7 md:prose-h6">닉네임</span>
        </div>
        <div>
          <ul className="prose-subtitle-M grid gap-3 md:prose-subtitle-L md:gap-4">
            <li className="nav-user-li" onClick={() => router.push('/mypage/profile')}>
              <BsUniversalAccessCircle className="icon-deco" />
              프로필
            </li>
            <li className="nav-user-li" onClick={() => router.push('/mypage/my-posts')}>
              <BsClipboard className="icon-deco" />
              나의 게시글
            </li>
            <li className="nav-user-li" onClick={() => router.push('/mypage/my-orders')}>
              <BsBag className="icon-deco" />
              나의 쇼핑
            </li>
            <li className="nav-user-li" onClick={() => router.push('/mypage/my-sales')}>
              <BsBalloonHeart className="icon-deco" />
              나의 굿즈 판매
            </li>
            <li className="nav-user-li" onClick={() => router.push('/mypage/my-subscribes')}>
              <BsHandIndexThumb className="icon-deco" />
              나의 구독
            </li>
            <li className="nav-user-li" onClick={() => router.push('/mypage/my-events')}>
              <BsEggFried className="icon-deco" />
              나의 이벤트
            </li>
            <li className="nav-user-li" onClick={() => router.push('/mypage')}>
              <BsGear className="icon-deco" />
              나의 관리자 메뉴
            </li>
          </ul>
        </div>
        <div>
          <button className=" prose-btn-XS text-gray3 md:prose-btn-S" type="submit" onClick={() => setIsClick(true)}>
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavDropdownUserMenu;
