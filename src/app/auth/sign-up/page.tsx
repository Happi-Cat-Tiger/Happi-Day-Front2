'use client';
import AuthInput from '@/components/Auth/AuthInput';
import SubmitButton from '@/components/Button/SubmitButton';
import { AiOutlineUser, AiOutlineLock, AiOutlinePhone } from 'react-icons/ai';

const SignUp = () => {
  const inputPlaceHolder = [
    { name: 'id', label: '아이디', type: 'text', icon: AiOutlineUser, content: 'example@happiday.com' },
    { name: 'password', label: '비밀번호', type: 'password', icon: AiOutlineLock, content: '********' },
    { name: 'verifyPassword', label: '비밀번호 확인', type: 'password', icon: AiOutlineLock, content: '********' },
    { name: 'name', label: '이름', type: 'text', icon: AiOutlineUser, content: '홍길동' },
    { name: 'phoneNumber', label: '휴대폰 번호', type: 'text', icon: AiOutlinePhone, content: '000-0000-0000' },
    { name: 'nickName', label: '닉네임', type: 'text', icon: AiOutlineUser, content: 'ex)해피데이' },
  ];

  const handleButtonClick = () => {};

  return (
    <>
      <div className="py-10 px-4 gap-10 m-auto flex w-[360px] flex-col items-center md:w-[476px] md:gap-[60px] md:py-[60px]">
        <div className="prose-h4 text-gray1 md:prose-h3">회원가입</div>
        <AuthInput inputPlaceHolder={inputPlaceHolder} />
        <SubmitButton label="가입하기" disabled={true} onClick={handleButtonClick} />
      </div>
    </>
  );
};

export default SignUp;
