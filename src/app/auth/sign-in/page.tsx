import AuthInput from '@/components/Auth/AuthInput';
import LoginButton from '@/components/Button/LoginButton';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';

const signIn = () => {
  const inputPlaceHolder = [
    { title: '', icon: AiOutlineUser, content: 'example@happiday.com' },
    { title: '', icon: AiOutlineLock, content: '비밀번호' },
  ];

  const handleButtonClick = {};

  return (
    <>
      <div className="pt-20 px-2 md:gap-10 m-auto flex w-[360px] flex-col items-center gap-[37px] pb-[130px] md:py-[120px]">
        <div className="prose-h4 text-gray1 md:prose-h3">로그인</div>
        <AuthInput inputPlaceHolder={inputPlaceHolder} />
        <div className="md:gap-10 flex flex-col items-center gap-[33px] self-stretch">
          <div className="gap-3 prose-body-XS flex items-center text-gray1">
            <div>이메일 찾기</div>
            <div>|</div>
            <div>비밀번호 찾기</div>
            <div>|</div>
            <div>회원가입</div>
          </div>
          <LoginButton disabled={false} onClick={handleButtonClick} />
        </div>
      </div>
    </>
  );
};
export default signIn;
