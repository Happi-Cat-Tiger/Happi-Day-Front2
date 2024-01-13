import React from 'react';
import ImageUploader from '../Tool/ImageUploader';
import { useRecoilState } from 'recoil';
import { writingInfoState } from '@/atom/write';

const ThumbnailUploader = () => {
  const [writingInfoValue, setWritingInfoValue] = useRecoilState(writingInfoState);

  const { thumbnailImage } = writingInfoValue;

  const handleChangeThumbnail = (value: any) => {
    setWritingInfoValue({
      ...writingInfoValue,
      thumbnailImage: value,
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="prose-h6 md:prose-h5">
        <span>썸네일 사진 등록</span> <span className="text-red-600">*</span>
      </div>
      <ImageUploader handleChange={handleChangeThumbnail} />
    </div>
  );
};

export default ThumbnailUploader;
