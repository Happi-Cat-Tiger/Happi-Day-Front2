'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { AiFillHeart, AiOutlineMessage, AiTwotoneEye } from 'react-icons/ai';

interface CardProps {
  id: number;
  cardType: 'events' | 'sales' | 'board';
  thumbnailUrl: string;
  title: string;
  artist: string;
  location?: string;
  startTime: string;
  endTime: string;
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
  return (
    <div
      key={id}
      onClick={() => router.push(`${cardType}/${id}`)}
      className="flex h-[300px] w-[224px] cursor-pointer flex-col gap-[12px] p-[12px] shadow-lg">
      {thumbnailUrl && (
        <Image src={thumbnailUrl} width={100} height={140} alt="thumbnail" className="flex-1 rounded-[4px]" priority />
      )}
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
            <span className="flex items-center gap-[2px]">
              <AiFillHeart style={{ color: 'red' }} />
              {likeCount}
            </span>
            <span className="flex items-center gap-[2px] ">
              <AiOutlineMessage />
              {commentCount}
            </span>
            <span className="flex items-center gap-[2px]">
              <AiTwotoneEye />
              {viewCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
