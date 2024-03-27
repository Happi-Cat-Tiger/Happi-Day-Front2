'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface CardProps {
  id: number;
  cardType: 'events' | 'sales' | 'board';
  thumbnailUrl: string;
  title: string;
  artist: string;
  location?: string;
  startTime: Date;
  endTime: Date;
  address?: string;
  joinMember?: number;
  likeCount: number;
  commentCount: number;
  viewCount: number;
}

const Card = ({
  id,
  cardType,
  thumbnailUrl,
  title,
  artist,
  location,
  startTime,
  endTime,
  address,
  joinMember,
  likeCount,
  commentCount,
  viewCount,
}: CardProps) => {
  const router = useRouter();

  const startDate = `${startTime.getFullYear()}.${startTime.getMonth() + 1}.${startTime.getDate()}`;
  const endDate = `${endTime.getFullYear()}.${endTime.getMonth() + 1}.${endTime.getDate()}`;

  return (
    <div
      key={id}
      onClick={() => router.push(`${cardType}/${id}`)}
      className="flex h-[300px] w-[224px] cursor-pointer flex-col gap-[12px] p-[12px] shadow-lg">
      {/*임시로 넣은 이미지는 next.config.js에서 모듈 이미지 경로 설정해야함*/}
      {thumbnailUrl && (
        <Image src={thumbnailUrl} width={200} height={140} alt="thumbnail" className="flex-1 rounded-[4px]" priority />
      )}
      <div className="flex flex-1 flex-col items-center justify-center gap-1 border-t-[1px] border-black">
        <span className="prose-h6">{title}</span>
        <span className="prose-body-S text-orange2">{artist}</span>
        {cardType === 'events' && <span className="prose-body-S">{location}</span>}
        <span className="prose-body-XS">{`${startDate} ~ ${endDate}`}</span>
        <div className="mt-5 flex w-full flex-row justify-between text-gray5">
          {cardType === 'events' ? (
            <span className="prose-body-XXS">{address}</span>
          ) : (
            <span className="prose-body-XXS">참여중인 인원 {joinMember}명</span>
          )}
          <div className="prose-body-XXS flex gap-[8px]">
            <span>♥️{likeCount}</span>
            <span>💬{commentCount}</span>
            <span>👁️{viewCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
