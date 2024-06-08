'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { AiFillHeart, AiOutlineMessage, AiTwotoneEye } from 'react-icons/ai';
import { getDate } from '@/utils/GetDate';
import Badge from './Badge/Badge';
import { eventsSortList } from '@/atom/eventsAtom';
import { useRecoilValue } from 'recoil';

interface CardProps {
  id: number;
  cardType: 'events' | 'sales' | 'board';
  categoryId?: number;
  thumbnailUrl: string;
  title: string;
  artist: string[];
  hashtags: string[];
  location?: string;
  startTime: Date;
  endTime: Date;
  address?: string;
  joinMember?: number;
  likeCount: number;
  commentCount: number;
  viewCount: number;
  badge?: string;
}

const Card = ({
  id,
  cardType,
  categoryId,
  thumbnailUrl,
  title,
  artist,
  hashtags,
  location,
  startTime,
  endTime,
  address,
  joinMember,
  likeCount,
  commentCount,
  viewCount,
  badge,
}: CardProps) => {
  const [eventState, setEventState] = useState('');
  const eventSort = useRecoilValue(eventsSortList);

  const router = useRouter();
  const url = cardType === 'sales' ? `/sales/${categoryId}/${id}` : `/${cardType}/${id}`;

  const getDate = (value: Date) => {
    const date = new Date(value);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${(month < 10 ? '0' : '') + month}.${(day < 10 ? '0' : '') + day}`;
  };

  // 이벤트 기간 뱃지 (진행 예정, 진행중, 종료)
  const date = new Date();
  useEffect(() => {
    const getBadgeState = (today: any, start: any, end: any) => {
      if (today < start) {
        setEventState('진행 예정');
      } else if (today >= start && today <= end) {
        setEventState('진행중');
      } else {
        setEventState('종료');
      }
    };
    getBadgeState(getDate(date), getDate(startTime), getDate(endTime));
  }, [eventSort]);

  return (
    <div
      key={id}
      onClick={() =>
        cardType === 'sales' ? router.push(`/sales/${categoryId}/${id}`) : router.push(`/${cardType}/${id}`)
      }
      className="flex h-[300px] w-[224px] cursor-pointer flex-col gap-[12px] p-[12px] shadow-lg">
      <div className="relative h-[170px] w-[100%]">
        {thumbnailUrl && <Image src={thumbnailUrl} fill alt="thumbnail" className="rounded-[4px]" priority />}
      </div>
      <div className="flex h-[130px] flex-col items-center justify-center gap-1 border-t-[1px] border-black pt-[10px]">
        <div className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-center">
          <span className="prose-h6">{title}</span>
        </div>
        <span className="prose-body-S text-orange2">{artist}</span>
        {cardType === 'events' && <span className="prose-body-S">{location}</span>}
        <span className="prose-body-XS">{`${getDate(startTime)} ~ ${getDate(endTime)}`}</span>
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
