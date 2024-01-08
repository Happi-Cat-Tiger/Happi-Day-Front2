'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import StyledButton from '@/components/Button/StyledButton';

const page = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="mb-[200px] mt-[100px] flex w-full flex-col">
      <Link href="/events">
        <div className="cursor-pointer text-[30px]">←</div>
      </Link>
      <div className="relative flex w-full flex-col items-center gap-[16px]">
        <h3 className="prose-h3">세븐틴 호시 생일 카페</h3>
        <ul className="prose-body-S flex gap-[16px] text-gray4">
          <li>🧑 닉네임</li>
          <li>💬 0건</li>
          <li>👁️ 481회</li>
          <li>24-01-08 19:30</li>
        </ul>
        <ul className="prose-body-S flex w-full gap-[16px] border-b-[1px] border-t-[1px] border-gray6 p-[10px] text-gray4">
          <li>#세븐틴</li>
          <li>#호시</li>
        </ul>
        <div className="my-[30px] h-[800px] w-[800px] bg-blue-200">thumbnail</div>
        <div className="my-[30px] h-[800px] w-[800px] bg-green-200">poster</div>
        <div className="my-[100px] w-[800px]">
          <p className="prose-body-L">
            이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에
            관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가
            설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에
            관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가
            설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명이벤트에
            관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가
            설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명
            이벤트에 관한 추가 설명 이벤트에 관한 추가 설명이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한
            추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명
            이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명이벤트에 관한
            추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명
            이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에
            관한 추가 설명 이벤트에 관한 추가 설명이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가
            설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명
            이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명
          </p>
        </div>
        <div className="absolute right-[0] top-[50%] flex translate-x-[100%] translate-y-[-50%] flex-col items-center gap-[16px]">
          <div className="flex flex-col items-center">
            <h6 className="prose-h6 text-gray5">Place</h6>
            <p className="prose-body-S">카페 소공원</p>
          </div>
          <div className="flex flex-col items-center">
            <h6 className="prose-h6 text-gray5">Location</h6>
            <p className="prose-body-S">서울 마포구 어울림마당로 5길 52 2층</p>
          </div>
          <div className="flex h-[150px] w-[200px] items-center justify-center border-2 border-black">지도</div>
          <div className="flex flex-col items-center">
            <h6 className="prose-h6 text-gray5">Date</h6>
            <p className="prose-body-S">2024-01-08 ~ 2024-01-09</p>
          </div>
        </div>
      </div>
      <div>
        <ul className="prose-body-S flex gap-[16px]">
          <li>♥️ 좋아요 30</li>
          <li>💬 댓글 16</li>
        </ul>
        <div>
          <div className="relative my-[10px] flex gap-[20px] border-b-2 border-t-2 border-[#ddd] pb-[70px] pt-[30px]">
            <p className="prose-body-S w-[10%] text-gray4">🧑 닉네임</p>
            <p className="prose-body-S w-[90%]">댓글 댓글 댓글 댓글 댓글</p>
            <p className="prose-body-XXS absolute bottom-[10px] text-gray6">2024.01.08 19:30</p>
          </div>
          <div className="relative my-[10px] flex gap-[20px] border-b-2 border-t-2 border-[#ddd] pb-[70px] pt-[30px]">
            <p className="prose-body-S w-[10%] text-gray4">🧑 닉네임</p>
            <p className="prose-body-S w-[90%]">댓글 댓글 댓글 댓글 댓글</p>
            <p className="prose-body-XXS absolute bottom-[10px] text-gray6">2024.01.08 19:30</p>
          </div>
        </div>
        <div className="mb-[26px] flex flex-col gap-[26px] border-2 border-[#ddd] p-[20px]">
          <p className="prose-body-S text-gray4">작성자 닉네임</p>
          <textarea
            placeholder="이 곳에 다녀온 후기를 간단하게 작성해주세요! 더 길게 작성하고 싶으면 자유게시판으로 ~~"
            className="prose-body-S w-full text-gray5 outline-none"
          />
        </div>
        <div className="text-right">
          <StyledButton
            label="등록"
            onClick={() => null}
            disabled={false}
            className="prose-btn-L rounded-[16px] bg-gray5 px-[24px] py-[16px] text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
