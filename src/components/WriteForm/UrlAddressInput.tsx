import { writingInfoState } from '@/atom/write';
import { useRecoilState } from 'recoil';
import React from 'react';

const UrlAddressInput = () => {
  const [writingInfoValue, setWritingInfoValue] = useRecoilState(writingInfoState);

  const { urlAddress } = writingInfoValue;

  const handleChangeUrl = (value: any) => {
    setWritingInfoValue({
      ...writingInfoValue,
      urlAddress: value,
    });
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="prose-h6 md:prose-h5">
        <span>url 주소 등록</span>
        {/* <span className="text-red-600">*</span> */}
      </div>
      <input
        type="text"
        defaultValue={urlAddress}
        onChange={(e) => handleChangeUrl(e.target.value)}
        className="text-input"
        placeholder="url 주소를 입력해주세요."
      />
    </div>
  );
};

export default UrlAddressInput;
