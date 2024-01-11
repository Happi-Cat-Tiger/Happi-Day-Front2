import useUploadImage from '@/hooks/useUploadImage';
import React, { useState, useEffect } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
interface Props {
  handleChange: (value: any) => void;
}
const ImageUploader = ({ handleChange }: Props) => {
  const [isActive, setActive] = useState<boolean>(false);
  const [imgFile, setImgFile] = useState<File | null>(null);

  const { uploadedImage, handleDrop, handleUpload } = useUploadImage({ setImgFile });

  useEffect(() => {
    handleChange(uploadedImage);
  }, [uploadedImage]);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-5">
      <label
        className={` preview flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed hover:bg-gray-100 ${
          isActive ? 'border-black bg-gray-300' : 'border-gray-300 bg-gray-50'
        }`}
        onDragEnter={() => setActive(true)}
        onDragLeave={() => setActive(false)}
        onDragOver={(event) => event.preventDefault()}
        onDrop={(event) => handleDrop(event, setActive)}
        htmlFor="dropzone-file">
        <div className="flex flex-col items-center justify-center pb-6 pt-5">
          <AiOutlineCloudUpload className="mb-4 h-8 w-8 text-gray-500" />
          <p className="text-md mb-2 text-gray-500">
            <span className="font-semibold">업로드를 누르거나</span> 드래그 앤 드롭해주세요
          </p>
          <p className="text-xs text-gray-500">PNG, JPG, JPEG, BMP or GIF (10MB 이하)</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" onChange={(e) => handleUpload(e, setActive)} />
      </label>
      <div className="mx-auto w-2/3 rounded-lg border-2 border-gray-300 bg-gray-100 p-5">
        {uploadedImage ? (
          <img src={uploadedImage.imageUrl} className="mx-auto h-auto w-[250px]" />
        ) : (
          <p className="prose-body-XS text-center text-gray-600 md:prose-body-S">이미지 미리보기</p>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
