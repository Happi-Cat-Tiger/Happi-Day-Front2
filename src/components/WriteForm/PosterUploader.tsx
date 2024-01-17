import React from 'react';
import ImageUploader from '../Tool/ImageUploader';
import { useRecoilState } from 'recoil';
import { writingInfoState } from '@/atom/write';

const PosterUploader = () => {
  const [writingInfoValue, setWritingInfoValue] = useRecoilState(writingInfoState);

  const { poster } = writingInfoValue;
  const handleChangePoster = (value: any) => {
    setWritingInfoValue({
      ...writingInfoValue,
      poster: value,
    });
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="prose-h6 md:prose-h5">
        <span>포스터 사진 등록</span> <span className="text-red-600">*</span>
      </div>
      <ImageUploader handleChange={handleChangePoster} image={poster} />
    </div>
  );
};

export default PosterUploader;
