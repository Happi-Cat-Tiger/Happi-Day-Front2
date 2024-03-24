import React from 'react';
import DaumPost from '../Tool/DaumPost';
import { useRecoilState } from 'recoil';
import { writingInfoState } from '@/atom/write';
import { eventsCardState } from '@/atom/eventsAtom';

const AddressInput = () => {
  const [writingInfoValue, setWritingInfoValue] = useRecoilState(writingInfoState);

  const { eventAddress } = writingInfoValue;

  // 임시로 생성한 이벤트 hashtags값
  const [eventsCardValue, setEventsCardValue] = useRecoilState(eventsCardState);

  const handleChangeAdress = (value: any) => {
    setWritingInfoValue({
      ...writingInfoValue,
      eventAddress: { ...eventAddress, address: value },
    });
    // 임시로 생성한 이벤트 address값
    setEventsCardValue({
      ...eventsCardValue,
      address: { address: value, detailAddress: eventsCardValue.address.detailAddress },
    });
  };
  const handleChangeDetail = (value: any) => {
    setWritingInfoValue({
      ...writingInfoValue,
      eventAddress: { ...eventAddress, detailAddress: value },
    });
    // 임시로 생성한 이벤트 address값
    setEventsCardValue({
      ...eventsCardValue,
      address: { address: eventsCardValue.address.address, detailAddress: value },
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="prose-h6 md:prose-h5">
        <span>주소 등록</span> <span className="text-red-600">*</span>
      </div>
      <DaumPost
        handleChangeAdress={handleChangeAdress}
        handleChangeDetail={handleChangeDetail}
        eventAddress={eventAddress}
      />
    </div>
  );
};

export default AddressInput;
