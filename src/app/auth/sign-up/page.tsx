'use client';
import AuthInput from '@/components/Auth/AuthInput';
import { AiOutlineUser, AiOutlineLock, AiOutlinePhone } from 'react-icons/ai';

const SignUp = () => {
  const inputPlaceHolder = [
    { label: '아이디', name: 'id', type: 'text', icon: AiOutlineUser, content: 'example@happiday.com' },
    { label: '비밀번호', name: 'pw', type: 'password', icon: AiOutlineLock, content: '********' },
    { label: '비밀번호 확인', name: 'pwConfirm', type: 'password', icon: AiOutlineLock, content: '********' },
    { label: '이름', name: 'name', type: 'text', icon: AiOutlineUser, content: '홍길동' },
    { label: '휴대폰 번호', name: 'phoneNumber', type: 'text', icon: AiOutlinePhone, content: '01012345678' },
    { label: '닉네임', name: 'nickName', type: 'text', icon: AiOutlineUser, content: 'ex)해피데이' },
  ];

  return (
    <>
      <div className="m-auto flex w-[360px] flex-col items-center gap-10 px-4 py-10 md:w-[476px] md:gap-[60px] md:py-[60px]">
        <div className="prose-h4 text-gray1 md:prose-h3">회원가입</div>
        <AuthInput inputPlaceHolder={inputPlaceHolder} />
      </div>
    </>
  );
};

export default SignUp;
