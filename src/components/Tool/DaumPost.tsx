import React from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import StyledButton from '../Button/StyledButton';
interface DaumPostProps {
  handleChangeAdress: (value: string) => void;
  handleChangeDetail: (value: string) => void;
  eventAddress: { address: string; detailAddress: string };
}
const DaumPost = ({ handleChangeAdress, handleChangeDetail, eventAddress }: DaumPostProps) => {
  const scriptUrl = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(scriptUrl);

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') extraAddress += data.bname;
      if (data.buildingName !== '') extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    handleChangeAdress(fullAddress);
    // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4">
        <input type="text" className="text-input flex-1" placeholder="주소" value={eventAddress.address} readOnly />
        <StyledButton
          label="주소 검색"
          onClick={() => open({ onComplete: handleComplete })}
          className="prose-btn-M w-fit rounded-lg bg-pink px-5 py-3 text-white"
        />
      </div>
      <input
        type="text"
        defaultValue={eventAddress.detailAddress}
        onChange={(e) => {
          handleChangeDetail(e.target.value);
        }}
        className="text-input flex-1"
        placeholder="상세주소"
      />
    </div>
  );
};

export default DaumPost;
