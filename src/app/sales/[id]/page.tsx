'use client';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { handleOptionSelectState, handleInputSelectState } from '@/atom/salesAtom';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import OptionsSelect from '@/containers/sales/OptionsSelect';
import SalesInformation from '@/containers/sales/SalesInformation';
import StyledSubmitButton from '@/components/Button/StyledSubmitButton';
import SalesModal from '@/components/Modal/SalesModal';
import { AiFillHeart } from 'react-icons/ai';

const Page = () => {
  const hashtag = [
    { value: 'tag1', label: '뉴진스' },
    { value: 'tag2', label: '하니' },
    { value: 'tag3', label: '포카' },
  ];

  const router = useRouter();
  const isAllOptionsSelected = useRecoilValue(handleOptionSelectState);
  const isAllInputsSelected = useRecoilValue(handleInputSelectState);
  const [isChecked, setIsChecked] = useState(false);
  const canPurchase = isChecked && isAllOptionsSelected && isAllInputsSelected;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const myPageSales = () => {
    router.push('/mypage/my-orders');
  };

  return (
    <div
      className={`mb-[200px] mt-[50px] flex w-full flex-col px-[8px] md:mt-[100px] ${
        isModalOpen ? 'pointer-events-none invisible' : ''
      }`}>
      <Link href="/sales">
        <div className="cursor-pointer text-[30px]">←</div>
      </Link>
      <div className="m-auto w-[360px] border-[1px] border-gray6 md:w-[1026px]">
        <div className="flex w-full border-b-[1px] border-gray6 pb-[30px] sm:flex-col md:flex-row md:justify-between">
          <div className="h-full w-full">
            <div className="flex flex-col items-center gap-[7px]">
              <div className="h-[308px] w-full bg-gray6 md:h-[580px]">사진</div>
              <div className="flex w-full justify-between px-1">
                <div className="prose-body-M flex gap-1 text-gray4">
                  {hashtag.map((content, index) => (
                    <div key={index} className="rounded-2xl border-[1px] border-gray4 px-2">
                      <div>#{content.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-none items-center gap-1">
                  <AiFillHeart className="text-[#D80000]" />
                  <div>찜하기</div>
                  <div className="font-extrabold">12</div>
                </div>
              </div>
            </div>
          </div>
          <OptionsSelect />
        </div>
        <SalesInformation />
        <div className="flex flex-col items-center gap-[35px] py-[30px]">
          <div className="flex flex-col items-center gap-[22px]">
            <div className="flex w-[340px] flex-col gap-[7px] bg-gray7 p-5 md:w-[840px]">
              <div className="prose-h7">
                개인정보 수집 및 동의<span className="text-[#D80000]">&nbsp;*</span>
              </div>
              <div className="prose-body-XS md:prose-body-M">
                상품 주문 및 배송을 위해 입력된 개인정보를 수집합니다.수집한 개인정보는 주문과 배송이외의 목적으로는
                사용하지 않으며, 전자상거래 등에서의 소비자 보호에 관한 법률에 따라 5년까지 보관합니다. 개인정보의 수집
                및 이용에 대한 동의를 거부할 수 있으며, 이 경우 상품 주문이 어려울 수 있습니다.
              </div>
            </div>
            <div className="flex gap-1">
              <div>동의합니다.</div>
              <input type="checkbox" onChange={() => setIsChecked(!isChecked)} />
            </div>
          </div>
          <StyledSubmitButton
            label="구매하기"
            type="submit"
            onClick={() => {
              setIsModalOpen(true);
            }}
            className={`prose-btn-M h-10 w-[260px] rounded-3xl text-white md:prose-h4 md:h-[56px] ${
              canPurchase ? 'bg-pink' : 'bg-gray6'
            }`}
            disabled={!canPurchase}
            isSubmitting={false}
          />
        </div>
      </div>
      <div className="m-auto my-[100px] w-[400px] md:w-[600px] lg:w-[800px]">
        <p className="sm:prose-body-S md:prose-body-L">
          굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명
          굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명
          굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명
          굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명
          굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명
          굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명
          굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명
          굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명
          굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명
          굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명
          굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명
          굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명 굿즈에 관한 추가 설명
        </p>
      </div>
      <SalesModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          myPageSales();
        }}
        title=""
        buttonLabel="주문 상세 확인하기">
        <div className="flex flex-col gap-[23px] p-3 text-black">
          <div className="flex flex-col items-start gap-[23px] md:gap-10">
            <div className="prose-h4 md:prose-h3">주문 완료되었습니다!</div>
            <div className="prose-h5 md:prose-h4">아래 계좌로 입금해주세요.</div>
          </div>
          <div className="prose-subtitle-M flex w-[300px] flex-col gap-[18px] bg-gray7 p-5 md:prose-caption md:w-[550px] md:gap-[18px]">
            <div className="flex justify-center gap-3 ">
              <div>00은행</div>
              <div>123344567</div>
              <div>홍*동</div>
            </div>
            <div className="flex justify-center gap-1 ">
              <div>금액:</div>
              <div>15000</div>
              <div>원</div>
            </div>
          </div>
        </div>
      </SalesModal>
    </div>
  );
};

export default Page;
