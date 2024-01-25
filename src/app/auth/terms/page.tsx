'use client';
import React, { useState, useEffect } from 'react';
import PrimaryButton from '@/components/Button/PrimaryButton';
import CheckBox from '@/hooks/CheckBox';

const Terms = () => {
  const [checkBoxData, setCheckBoxData] = useState([
    {
      id: 1,
      title: '전체 동의하기',
      content: 'Happi Day의 모든 약관을 확인하고 전체 동의합니다. (전체동의, 선택항목도 포함됩니다.)',
      isChecked: false,
    },
    {
      id: 2,
      title: '(필수) 이용약관',
      content:
        '제1조(목적)이 약관은 주식회사 AMP(이하 "회사"라 한다)가 운영하는 인터넷 웹사이트인 Duckzill(https://shop.duckzill.com)(이하 "사이트"라 한다)에서 제공하는 인터넷 관련 서비스(이하 "서비스"라 한다)를 이용함에 있어 서비스와 서비스 이용자의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.※ 「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.」',
      isChecked: false,
    },
    {
      id: 3,
      title: '(필수) 개인정보 수집 및 이용',
      content:
        '회사는 회원가입, 민원 등 고객상담 처리, 본인확인(14세 미만 아동 확인) 등 의사소통을 위한 정보 활용 및 이벤트 등과 같은 마케팅용도 활용, 회원의 서비스 이용에 대한 통계, 이용자들의 개인정보를 통한 서비스 개발을 위해 아래와 같은 개인정보를 수집하고 있습니다 1. - 목적 : 이용자 식별 및 본인여부 확인- 항목 : 이름, 아이디, 비밀번호,닉네임, 이메일, 휴대폰번호, 주소, 전화번호 등',
      isChecked: false,
    },
  ]);

  const [allAgreed, setAllAgreed] = useState(false);

  const handleAgreementChange = (id: number, isChecked: boolean) => {
    const updatedCheckBoxData = checkBoxData.map((item) => (item.id === id ? { ...item, isChecked } : item));
    setCheckBoxData(updatedCheckBoxData);
    setAllAgreed(updatedCheckBoxData.slice(1).every((item) => item.isChecked));
  };

  const toggleAllAgreements = () => {
    const allChecked = !allAgreed;
    const updatedCheckBoxData = checkBoxData.map((item) => ({ ...item, isChecked: allChecked }));
    setCheckBoxData(updatedCheckBoxData);
    setAllAgreed(allChecked);
  };

  const handleButtonClick = () => {
    // 버튼 클릭 시 처리
  };

  useEffect(() => {
    const allExceptAllAgreed = checkBoxData.slice(1);
    const allExceptAllAgreedChecked = allExceptAllAgreed.every((item) => item.isChecked);
    setAllAgreed(allExceptAllAgreedChecked);
  }, [checkBoxData]);

  return (
    <>
      <div className="m-auto flex w-[360px] flex-col items-center gap-4 px-2 py-[18px] pb-[130px] pt-10 md:w-[752px] md:px-[26px] md:py-[60px]">
        <div className="prose-h4 text-gray1 md:prose-h3">이용약관 동의</div>
        <div className="flex w-[319px] flex-col items-center gap-[30px] p-2.5 md:w-[680px] md:p-2.5">
          <div className="flex flex-shrink-0 flex-col items-start justify-center gap-1.5 self-stretch">
            <CheckBox
              checkBoxData={checkBoxData[0]}
              handleAgreementChange={handleAgreementChange}
              toggleAllAgreements={toggleAllAgreements}
            />
            <div className="flex w-[299px] flex-[1_0_0%] items-start justify-center gap-2.5 px-[22px] md:w-full">
              <div className="prose-body-S w-[294px] flex-shrink-0 text-gray4 md:prose-body-M md:w-full">
                {checkBoxData[0].content}
              </div>
            </div>
          </div>
          <div className="flex flex-shrink-0 flex-col items-start justify-center gap-1.5 self-stretch">
            <CheckBox
              checkBoxData={checkBoxData[1]}
              handleAgreementChange={handleAgreementChange}
              toggleAllAgreements={toggleAllAgreements}
            />
            <div className="whitespace-wrap flex h-[100px] w-[304px] flex-shrink-0 items-start justify-center gap-2.5 overflow-y-auto rounded-lg border-[1px] border-gray5 px-[15px] py-2.5 md:h-[130px] md:w-[660px]">
              <div className="prose-body-S flex-[1_1_0%] flex-shrink-0 text-gray4 md:prose-body-M">
                {checkBoxData[1].content}
              </div>
            </div>
          </div>
          <div className="flex flex-shrink-0 flex-col items-start justify-center gap-1.5 self-stretch">
            <CheckBox
              checkBoxData={checkBoxData[2]}
              handleAgreementChange={handleAgreementChange}
              toggleAllAgreements={toggleAllAgreements}
            />
            <div className="whitespace-wrap flex h-[100px] w-[304px] flex-shrink-0 items-start justify-center gap-2.5 overflow-y-auto rounded-lg border-[1px] border-gray5 px-[15px] py-2.5 md:h-[130px] md:w-[660px]">
              <div className="prose-body-S flex-[1_1_0%] flex-shrink-0 text-gray4 md:prose-body-M">
                {checkBoxData[2].content}
              </div>
            </div>
          </div>
        </div>
        <PrimaryButton label="다음 단계" disabled={!allAgreed} onClick={handleButtonClick} />
      </div>
    </>
  );
};
export default Terms;
