'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface CardProps {
  id: number;
  path: string;
  thumbnailUrl: string;
  title: string;
  location?: string;
  address?: string;
  likeCount: number;
  commentCount: number;
  viewCount: number;
}

const BoardCard = ({
  id,
  path,
  thumbnailUrl,
  title,
  location,
  address,
  likeCount,
  commentCount,
  viewCount,
}: CardProps) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`${path}/${id}`)}
      className="flex h-[235px] w-[165px] cursor-pointer flex-col gap-2 p-3 shadow-lg md:h-[300px] md:w-[224px] md:gap-3 md:py-2">
      {thumbnailUrl && (
        <Image
          src={thumbnailUrl}
          width={200}
          height={140}
          alt="thumbnail"
          className=" aspect-video flex-1 rounded"
          priority
        />
      )}
      <div className="flex flex-1 flex-col items-center justify-between gap-1 border-t-[1px] border-black p-1 md:py-2">
        <span className="prose-h7 md:prose-h6">{title}</span>
        <span className="prose-body-XS md:prose-body-S">{location}</span>
        <div className="prose-body-XXS flex w-full flex-col  justify-between text-gray5 md:flex-row">
          <span>{address}</span>
          <div className="flex gap-2">
            <span>♥️{likeCount}</span>
            <span>💬{commentCount}</span>
            <span>👁️{viewCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
