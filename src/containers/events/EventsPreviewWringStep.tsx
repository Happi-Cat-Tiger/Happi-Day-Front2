import React from 'react';
import { useRecoilState } from 'recoil';
import { eventsCardState } from '@/atom/eventsAtom';
import { writingInfoState } from '@/atom/write';

const EventsPreviewWringStep = () => {
  const [writingInfoValue] = useRecoilState(writingInfoState);
  const [eventsCardValue, setEventsCardValue] = useRecoilState(eventsCardState);
  const {
    title,
    description,
    username,
    commentCount,
    viewCount,
    updatedAt,
    hashtags,
    address,
    location,
    startTime,
    endTime,
  } = eventsCardValue;
  return (
    <div className="flex h-[500px] w-full flex-col items-center gap-4 overflow-auto border p-2 text-center shadow-inner md:p-4">
      <p className=" prose-h4 md:prose-h3">{title}</p>
      <div className="prose-body-XS flex items-center justify-center gap-2 md:prose-body-S">
        {username}
        {commentCount}
        {viewCount}
        {updatedAt?.toLocaleString()}
      </div>
      <hr />
      <p className=" prose-body-XS text-left text-gray4 md:prose-body-S">{hashtags}</p>
      <hr />
      <img src="" alt="썸네일 이미지" className="h-[300px] w-[600px] border border-red-300" />
      <img src="" alt="포스터 이미지" className="h-[300px] w-[600px] border border-red-300" />
      <div dangerouslySetInnerHTML={{ __html: description }} className="prose-body-M md:prose-body-L" />
      <div className="flex w-full flex-col items-center gap-[16px] bg-[#FEF9D0] py-[20px]">
        <div>
          <p>Place</p>
          <p>{location}</p>
        </div>
        <div className="flex flex-col items-center">
          <p>Loacation</p>
          <p>{address.address}</p>
          <p>{address.detailAddress}</p>
          <div className="h-[200px] w-[200px] border border-red-200">카카오지도</div>
        </div>
        <div>
          <p>Date</p>
          <p>{startTime} ~ </p>
          <p>{endTime}</p>
        </div>
      </div>
    </div>
  );
};

export default EventsPreviewWringStep;
