'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface SimpleCardProps {
  id: number;
  cardType: 'events' | 'sales';
  thumbnailUrl?: string;
  title: string;
  startTime?: string;
  endTime?: string;
  location?: string;
}

const SimpleCard = ({ id, cardType, thumbnailUrl, title, location, startTime, endTime }: SimpleCardProps) => {
  const router = useRouter();
  return (
    <div
      key={id}
      onClick={() => router.push(`/${cardType}/${id}`)}
      className="flex h-[300px] w-[224px] cursor-pointer flex-col gap-[12px] p-[12px] shadow-lg">
      {/*임시로 넣은 이미지는 next.config.js에서 모듈 이미지 경로 설정해야함*/}
      {thumbnailUrl && (
        <Image src={thumbnailUrl} width={`${200}`} height={140} alt="thumbnail" className="rounded-[4px]" />
      )}
      <div className="flex flex-col items-center justify-center gap-1 border-t-[1px] border-black">
        <span className="prose-h6">{title}</span>
        {cardType === 'events' && (
          <>
            <span className="prose-body-S">{location}</span>
            <span className="prose-body-XS">{`${startTime} ~ ${endTime}`}</span>
            <div className="flex w-full flex-row justify-between text-gray5"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default SimpleCard;
