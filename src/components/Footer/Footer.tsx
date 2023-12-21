import { FiInstagram } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa6';

export default function Footer() {
  return (
    <div className="my-10 flex w-full shrink-0 flex-col items-center justify-end rounded-[2px] border-t-[1px] border-orange3 text-center text-xs font-medium leading-[150%] text-gray2">
      <div className="flex w-[1024px] flex-col gap-[25px] pt-[25px]">
        <div className="flex items-start justify-center gap-[20px] md:gap-[100px]">
          <div>이용약관</div>
          <div>개인정보취급방침</div>
          <div>이메일문의</div>
          <div>모바일버전</div>
        </div>
        <div className="gap-5 flex items-center justify-center">
          <FiInstagram className="h-5 w-5" />
          <FaFacebookF className="h-5 w-5" />
        </div>
        <div>
          대표 : 김도영 &nbsp; 개인정보관리자 : 김도영
          <br />
          대표번호 : 010-5364-2934 &nbsp; 메일 : kdybe01@gmail.com
          <br />
          COPYRIGHT (c) happiday.com ALL RIGHTS RESERVED.
        </div>
      </div>
    </div>
  );
}
