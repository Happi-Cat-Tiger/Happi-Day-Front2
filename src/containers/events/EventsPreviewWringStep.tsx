import React from 'react';
import { useRecoilValue } from 'recoil';
import { writeState, writingInfoState } from '@/atom/write';

const EventsPreviewWringStep = () => {
  const writingInfoValue = useRecoilValue(writingInfoState);
  const writeValue = useRecoilValue(writeState);

  const currentDate = new Date();
  const formattedCurrentDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')} ${currentDate
    .getHours()
    .toString()
    .padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}`;

  const getDate = (value: string | Date | null) => {
    if (!value) return '';

    const date = new Date(value);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${(month < 10 ? '0' : '') + month}.${(day < 10 ? '0' : '') + day}`;
  };

  return (
    <div className="flex h-[500px] w-full flex-col items-center gap-4 overflow-auto border p-2 text-center shadow-inner md:p-4">
      <p className=" prose-h4 md:prose-h3">{writeValue.articleTitle}</p>
      <div className="prose-body-XS flex items-center justify-center gap-2 md:prose-body-S">{formattedCurrentDate}</div>
      <hr />
      <p className=" prose-body-XS text-left text-gray4 md:prose-body-S">{writingInfoValue.hashtag}</p>
      <hr />
      {writingInfoValue.thumbnailImage && (
        <img
          src={URL.createObjectURL(writingInfoValue.thumbnailImage)}
          alt="썸네일 이미지"
          className="h-[100%] w-[600px]"
        />
      )}
      {writingInfoValue.poster && (
        <img src={URL.createObjectURL(writingInfoValue.poster)} alt="포스터 이미지" className="h-[100%] w-[600px]" />
      )}
      <div dangerouslySetInnerHTML={{ __html: writeValue.editValue }} className="prose-body-M md:prose-body-L" />
      <div className="flex w-full flex-col items-center gap-[16px] bg-[#FEF9D0] py-[20px]">
        <div>
          <p>Place</p>
          <p>{writingInfoValue.location}</p>
        </div>
        <div className="flex flex-col items-center">
          <p>Loacation</p>
          <p>{writingInfoValue.eventAddress.address}</p>
          <p>{writingInfoValue.eventAddress.detailAddress}</p>
          <div className="h-[200px] w-[200px] border border-red-200">카카오지도</div>
        </div>
        <div>
          <p>Date</p>
          <p>{getDate(writingInfoValue.startTime)} ~ </p>
          <p>{getDate(writingInfoValue.endTime)} ~ </p>
        </div>
      </div>
    </div>
  );
};

export default EventsPreviewWringStep;
