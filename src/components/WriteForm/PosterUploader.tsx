import React, { ChangeEvent, DragEvent, useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';
import { writingInfoState } from '@/atom/write';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const PosterUploader = () => {
  const [writingInfoValue, setWritingInfoValue] = useRecoilState(writingInfoState);
  const { imageFile } = writingInfoValue;

  const handleChangePoster = useCallback(
    (value: File) => {
      setWritingInfoValue({
        ...writingInfoValue,
        imageFile: value,
      });
    },
    [writingInfoValue, setWritingInfoValue],
  );

  const [isActive, setActive] = useState<boolean>(false);

  const handleDrop = useCallback(
    (e: DragEvent<HTMLLabelElement>) => {
      e.preventDefault();
      const file = e.dataTransfer?.files[0];

      if (file && file.type.includes('image')) {
        handleChangePoster(file);
      }
      setActive(false);
    },
    [handleChangePoster],
  );

  const handleUpload = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const file = e.target?.files?.[0];

      if (file && file.type.includes('image')) {
        handleChangePoster(file);
      } else {
        console.error('No file selected');
      }
      setActive(false);
    },
    [handleChangePoster],
  );

  return (
    <div className="flex flex-col gap-2">
      <div className="prose-h6 md:prose-h5">
        <span>포스터 등록</span> <span className="text-red-600">*</span>
      </div>
      <form className="flex w-full flex-col items-center justify-center gap-5">
        <label
          className={`preview flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed hover:bg-gray-100 ${
            isActive ? 'border-black bg-gray-300' : 'border-gray-300 bg-gray-50'
          }`}
          onDragEnter={() => setActive(true)}
          onDragLeave={() => setActive(false)}
          onDragOver={(event) => event.preventDefault()}
          onDrop={handleDrop}
          htmlFor="dropzone-file">
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <AiOutlineCloudUpload className="mb-4 h-8 w-8 text-gray-500" />
            <p className="text-md mb-2 text-gray-500">
              <span className="font-semibold">업로드를 누르거나</span> 드래그 앤 드롭해주세요
            </p>
            <p className="text-xs text-gray-500">PNG, JPG, JPEG, BMP or GIF (10MB 이하)</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" onChange={handleUpload} />
        </label>
        <div className="mx-auto w-2/3 rounded-lg border-2 border-gray-300 bg-gray-100 p-5">
          {imageFile ? (
            <img src={imageFile ? URL.createObjectURL(imageFile) : ''} className="mx-auto h-auto w-[250px]" />
          ) : (
            <p className="prose-body-XS text-center text-gray-600 md:prose-body-S">이미지 미리보기</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default PosterUploader;
