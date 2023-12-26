'use client';

import React from 'react';
import Image from 'next/image';
import logo from '../../public/images/logo.png';
import { useRouter } from 'next/navigation';

interface CardProps {
  id: number;
  cardType: 'events' | 'sales';
  thumbnailUrl: string;
  title: string;
  artist: string;
  location?: string;
  startTime: string;
  endTime: string;
  address?: string;
  joinMember?: number;
  likiCount: number;
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
  likiCount,
  commentCount,
  viewCount,
}: CardProps) => {
  const router = useRouter();
  return (
    <div
      key={id}
      onClick={() => (cardType === 'sales' ? router.push(`${cardType}/${id}`) : router.push(cardType))}
      className="flex h-[300px] w-[224px] cursor-pointer flex-col gap-[12px] p-[12px] shadow-xl">
      <Image src={logo} alt="thumbnail" className="flex-1" />
      <div className="flex flex-1 flex-col items-center justify-center gap-1 border-t-[1px] border-black">
        <span className="prose-h6">{title}</span>
        <span className="prose-body-S text-orange2">{artist}</span>
        {cardType === 'events' && <span className="prose-body-S">{location}</span>}
        <span className="prose-body-XS">{`${startTime} ~ ${endTime}`}</span>
        <div className="flex w-full flex-row justify-between text-gray5">
          {cardType === 'events' ? (
            <span className="prose-body-XXS">{address}</span>
          ) : (
            <span className="prose-body-XXS">참여중인 인원 {joinMember}명</span>
          )}
          <div className="prose-body-XXS flex gap-[8px]">
            <span>♥️{likiCount}</span>
            <span>💬{commentCount}</span>
            <span>👁️{viewCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
