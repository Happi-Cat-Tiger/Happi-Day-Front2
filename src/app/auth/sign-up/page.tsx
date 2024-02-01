'use client';
import AuthInput from '@/components/Auth/AuthInput';
import { SIGN_UP } from '@/constants/auth';

const signUp = () => {
  return (
    <div className="m-auto flex w-[360px] flex-col items-center gap-10 px-4 py-10 md:w-[476px] md:gap-[60px] md:py-[60px]">
      <div className="prose-h4 text-gray1 md:prose-h3">회원가입</div>
      <AuthInput inputPlaceHolder={SIGN_UP.INPUT_PLACE_HOLDER} />
    </div>
  );
};

export default signUp;
