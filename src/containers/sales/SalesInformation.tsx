'use client';
import React, { useEffect, useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { useRecoilState } from 'recoil';
import { handleInputSelectState } from '@/atom/salesAtom';
import Modal from '@/components/Modal/Modal';

const Page = () => {
  const inputPlaceholders = [
    { title: '입금정보', label: ['입금자명'] },
    { title: '환불계좌 정보', label: ['은행명', '계좌번호', '예금주명'] },
  ];

  const [isAllInputSelected, setIsAllInputSelected] = useRecoilState(handleInputSelectState);
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});
  const [zipCode, setZipcode] = useState('');
  const [roadAddress, setRoadAddress] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const completeHandler = (data: { zonecode: string; roadAddress: string }) => {
    setZipcode(data.zonecode);
    setRoadAddress(data.roadAddress);
    setIsModalOpen(false);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    const allInputsFilled = Object.values(inputValues).every((val) => val) && !!zipCode && !!roadAddress;
    setIsAllInputSelected(allInputsFilled);
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name !== '상세주소') {
      const allInputsFilled =
        Object.values({ ...inputValues, [name]: value }).every((val) => val) && !!zipCode && !!roadAddress;
      setIsAllInputSelected(allInputsFilled);
    }
  };

  useEffect(() => {
    const allInputsFilled = Object.values(inputValues).every((val) => val) && !!zipCode && !!roadAddress;
    setIsAllInputSelected(allInputsFilled);
  }, [inputValues, zipCode, roadAddress, setIsAllInputSelected]);

  return (
    <div className="flex w-full flex-col gap-[33px] border-b-[1px] border-gray6 px-2 py-4 md:flex-row md:justify-between md:px-[33px] md:py-[30px]">
      <div className="w-full">
        <div className="flex flex-col gap-7">
          {inputPlaceholders.map((content, index) => (
            <div key={index} className="flex flex-col gap-5">
              <div className="prose-h6 md:prose-h5">
                {content.title}
                <span className="text-[#D80000]">&nbsp;*</span>
              </div>
              <div className="flex flex-col gap-3">
                {content.label.map((label, idx) => (
                  <div key={idx}>
                    <input
                      type={label === '계좌번호' ? 'number' : 'text'}
                      placeholder={label}
                      name={label}
                      className={`prose-body-S w-[220px] rounded-full border-[1px] p-2 pl-4 md:prose-body-M ${
                        inputValues[label] ? 'border-gray4' : 'border-gray6'
                      }`}
                      onChange={handleInputChange}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:pl-[22px]">
        <div className="flex flex-col gap-5">
          <div className="flex gap-3">
            <div className="prose-h6 md:prose-h5">
              배송지 정보<span className="text-[#D80000]">&nbsp;*</span>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" />
              <div>주문자 정보와 동일</div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {['수령자명', '연락처'].map((label, index) => (
              <div key={index}>
                <input
                  type={label === '수령자명' ? 'text' : 'number'}
                  placeholder={label}
                  name={label}
                  className={`prose-body-S w-[220px] rounded-full border-[1px] p-2 pl-4 md:prose-body-M ${
                    inputValues[label] ? 'border-gray4' : 'border-gray6'
                  }`}
                  onChange={handleInputChange}
                />
              </div>
            ))}
            <div className="flex gap-2">
              <input
                placeholder="우편번호"
                className="prose-body-S w-[220px] rounded-full border-[1px] p-2 pl-4 md:prose-body-M"
                value={zipCode}
                disabled={true}
              />
              <button
                className="prose-btn-S w-[130px] rounded-full border-[1px] bg-gray5 p-2 text-white md:prose-body-M hover:bg-pink"
                onClick={() => setIsModalOpen(true)}>
                우편번호 찾기
              </button>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="주소"
                name="주소"
                className={`prose-body-S w-full rounded-full border-[1px] p-2 pl-4 md:prose-body-M ${
                  inputValues['주소'] ? 'border-gray4' : 'border-gray6'
                }`}
                value={roadAddress}
                disabled={true}
              />
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="상세주소"
                name="상세주소"
                className={`prose-body-S w-full rounded-full border-[1px] p-2 pl-4 md:prose-body-M ${
                  inputValues['상세주소'] ? 'border-gray4' : 'border-gray6'
                }`}
                disabled={!zipCode || !roadAddress}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title="우편번호 검색"
        buttonLabel="닫기"
        buttonDisabled={false}>
        <DaumPostcode onComplete={completeHandler} />
      </Modal>
    </div>
  );
};

export default Page;
