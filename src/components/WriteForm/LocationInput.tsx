import { writingInfoState } from '@/atom/write';
import { useRecoilState } from 'recoil';
import React from 'react';
import { eventsCardState } from '@/atom/eventsAtom';

const LocationInput = () => {
  const [writingInfoValue, setWritingInfoValue] = useRecoilState(writingInfoState);

  const { location } = writingInfoValue;

  // 임시로 생성한 이벤트 location값
  const [eventsCardValue, setEventsCardValue] = useRecoilState(eventsCardState);

  const handleChangeLocation = (value: any) => {
    setWritingInfoValue({
      ...writingInfoValue,
      location: value,
    });
    // 임시로 생성한 이벤트 location값
    setEventsCardValue({ ...eventsCardValue, location: value });
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
