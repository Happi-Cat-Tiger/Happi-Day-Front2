import React, { useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import StyledButton from '../Button/StyledButton';
interface DaumPostProps {
  handleChangeAdress: (value: string) => void;
}
const DaumPost = ({ handleChangeAdress }: DaumPostProps) => {
  const scriptUrl = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(scriptUrl);

  const [address, setAddress] = useState<string>('');
  const [detailAddress, setDetailAddress] = useState<string>('');

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') extraAddress += data.bname;
      if (data.buildingName !== '') extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setAddress(fullAddress);
    handleChangeAdress(fullAddress);
    // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4">
        <input
          type="text"
          className="prose-body-S w-full flex-1 rounded-md border border-gray3 px-3 py-3 focus:border-orange1 focus:outline-none "
          placeholder="주소"
          value={address}
          readOnly
        />
        <StyledButton
          label="주소 검색"
          onClick={() => open({ onComplete: handleComplete })}
          className="prose-btn-M w-fit rounded-lg bg-pink px-5 py-3 text-white"
        />
      </div>
      <input
        type="text"
        defaultValue={detailAddress}
        onChange={(e) => {
          setDetailAddress(e.target.value);
          handleChangeAdress(address + ' ' + e.target.value);
        }}
        className="prose-body-S w-full flex-1 rounded-md border border-gray3 px-3 py-3 focus:border-orange1 focus:outline-none "
        placeholder="상세주소"
      />
    </div>
  );
};

export default DaumPost;
