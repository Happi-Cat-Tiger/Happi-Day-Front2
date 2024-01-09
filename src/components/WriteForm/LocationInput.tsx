import { writingInfoState } from '@/atom/write';
import { useRecoilState } from 'recoil';
import React from 'react';

const LocationInput = () => {
  const [writingInfoValue, setWritingInfoValue] = useRecoilState(writingInfoState);

  const { location } = writingInfoValue;

  const handleChangeLocation = (value: any) => {
    setWritingInfoValue({
      ...writingInfoValue,
      location: value,
    });
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="prose-h6 md:prose-h5">
        <span>장소 등록</span> <span className="text-red-600">*</span>
      </div>
      <input
        type="text"
        defaultValue={location}
        onChange={(e) => handleChangeLocation(e.target.value)}
        className="text-input"
        placeholder="이벤트가 진행되는 장소의 이름을 입력해주세요."
      />
    </div>
  );
};

export default LocationInput;
