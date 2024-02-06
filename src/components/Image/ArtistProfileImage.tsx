import React from 'react';
import { SizeType } from '@/types/size';

interface Props {
  imageUrl: string;
  imageAlt: string;
  size: SizeType;
}
const ArtistProfileImage = ({ imageUrl, imageAlt, size }: Props) => {
  const sizeVariants = {
    s: 'h-16 w-16 rounded-2xl',
    m: 'h-24 w-24 rounded-3xl',
    l: 'h-32 w-32 rounded-3xl',
    xl: 'h-44 w-44 rounded-3xl',
    xxl: 'h-60 w-60 rounded-3xl',
  };

  return (
    <div className="mx-auto flex max-w-sm">
      <img className={`${sizeVariants[size]}`} src={imageUrl} alt={imageAlt} />
    </div>
  );
};

export default ArtistProfileImage;
