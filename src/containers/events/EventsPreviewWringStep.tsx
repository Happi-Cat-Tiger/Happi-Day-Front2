import React from 'react';
import { useRecoilState } from 'recoil';
import { eventsWriteState } from '@/atom/eventsAtom';
import { writingInfoState } from '@/atom/write';

const EventsPreviewWringStep = () => {
  const [eventsWriteValue] = useRecoilState(eventsWriteState);
  const [writingInfoValue] = useRecoilState(writingInfoState);
  return (
    <div className="flex h-[500px] w-full flex-col gap-4 overflow-auto border p-2 text-center shadow-inner md:p-4">
      <p className=" prose-h4 md:prose-h3">{eventsWriteValue.eventsTitle}</p>
      <div className="prose-body-XS flex items-center justify-center gap-2 md:prose-body-S">
        닉네임, 댓글수, 조회수, 시간
      </div>
      <hr />
      <p className=" prose-body-XS text-left text-gray4 md:prose-body-S">{writingInfoValue.hashtag}</p>
      <hr />
      <div className="h-[600px] w-[600px] border-2 border-red-300">썸네일 이미지</div>
      <div className="h-[600px] w-[600px] border-2 border-red-300">포스터 이미지</div>
      <div
        dangerouslySetInnerHTML={{ __html: eventsWriteValue.eventsEditValue }}
        className="prose-body-M md:prose-body-L"
      />
      <div className="flex w-full flex-col items-center gap-[16px] bg-[#FEF9D0] py-[20px]">
        <div>
          <p>Place</p>
          <p>{writingInfoValue.location}</p>
        </div>
        <div className="flex flex-col items-center">
          <p>Loacation</p>
          <p>{writingInfoValue.eventAddress.address}</p>
          <p>{writingInfoValue.eventAddress.detailAddress}</p>
          <div className="h-[200px] w-[200px] border-2 border-red-200">카카오지도</div>
        </div>
        <div>
          <p>Date</p>
          <p>{writingInfoValue.startTime?.toLocaleDateString()} ~ </p>
          <p>{writingInfoValue.endTime?.toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default EventsPreviewWringStep;
