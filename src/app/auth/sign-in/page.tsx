import Footer from '@/components/Footer/Footer';
import AuthInput from '@/components/Auth/AuthInput';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';

const signIn = () => {
  const inputPlaceHolder = [
    { title: '', icon: AiOutlineUser, content: 'example@happiday.com' },
    { title: '', icon: AiOutlineLock, content: '비밀번호' },
  ];

  return (
    <>
      <div className="pt-20 px-2 md:gap-10 flex w-[360px] items-start gap-[37px] pb-[130px] md:py-[120px]">
        <div className="prose-h4 text-gray1 md:prose-h3">로그인</div>
        <AuthInput inputPlaceHolder={inputPlaceHolder} />
        <div className="flex-column md:gap-10 flex items-center gap-[33px] self-stretch">
          <div className="gap-3 prose-body-XS flex items-center text-gray1">
            <div>이메일 찾기</div>
            <div>|</div>
            <div>비밀번호 찾기</div>
            <div>|</div>
            <div>회원가입</div>
          </div>
          <button>로그인</button>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default signIn;
