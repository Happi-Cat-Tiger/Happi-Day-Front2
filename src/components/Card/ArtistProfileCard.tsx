'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import ArtistProfileImage from '@/components/Image/ArtistProfileImage';
import { SizeType } from '@/types/size';
import { getTeamInfoService, getArtistInfoService } from '@/hooks/queries/artist/artistService';

interface Props {
  id: number;
  type: string;
  imageUrl: string;
  imageAlt: string;
  size: SizeType;
  title: string;
}
const ArtistProfileCard = ({ id, type, imageUrl, imageAlt, size, title }: Props) => {
  const router = useRouter();
  const sizeVariants = {
    s: 'w-16 text-sm',
    m: 'w-24 text-base',
    l: 'w-32 text-lg',
    xl: 'w-44 text-lg',
    xxl: 'x-52 text-ls',
  };

  // const { data: teamInfo } = getTeamInfoService({ teamId: id });
  // const { data: artistInfo } = getArtistInfoService({ artistId: id });

  return (
    <div className="m-2 cursor-pointer" onClick={() => router.push(`/mypage/my-subscribes/artist-info/${type}/${id}`)}>
      <div className="w- flex flex-col items-center">
        <div>
          <ArtistProfileImage imageUrl={imageUrl} imageAlt={imageAlt} size={size} />
        </div>
        <div className={`${sizeVariants[size]} text-center`}>#{title}</div>
      </div>
    </div>
  );
};

export default ArtistProfileCard;
