import Footer from '@/components/Footer/Footer';
import AuthInput from '@/components/Auth/AuthInput';
import { AiOutlineUser, AiOutlineLock, AiOutlinePhone } from 'react-icons/ai';

const signUp = () => {
  const inputPlaceHolder = [
    { title: '아이디', icon: AiOutlineUser, content: 'example@happiday.com' },
    { title: '비밀번호', icon: AiOutlineLock, content: '********' },
    { title: '비밀번호 확인', icon: AiOutlineLock, content: '********' },
    { title: '이름', icon: AiOutlineUser, content: '홍길동' },
    { title: '휴대폰 번호', icon: AiOutlinePhone, content: '000-0000-0000' },
    { title: '닉네임', icon: AiOutlineUser, content: 'ex)해피데이' },
  ];

  return (
    <>
      <div className="py-10 px-4 gap-10 m-auto flex w-[360px] flex-col items-center md:w-[476px] md:gap-[60px] md:py-[60px]">
        <div className="prose-h4 text-gray1 md:prose-h3">회원가입</div>
        <AuthInput inputPlaceHolder={inputPlaceHolder} />
        <button>가입하기</button>
      </div>
      <Footer />
    </>
  );
};

export default signUp;
