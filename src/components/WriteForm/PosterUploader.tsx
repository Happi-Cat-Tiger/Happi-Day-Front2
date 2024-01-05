import React from 'react';
import ImageUploader from '../Tool/ImageUploader';

const PosterUploader = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="prose-h6 md:prose-h5">
        <span>포스터 사진 등록</span> <span className="text-red-600">*</span>
      </div>
      <ImageUploader />
    </div>
  );
};

export default PosterUploader;
