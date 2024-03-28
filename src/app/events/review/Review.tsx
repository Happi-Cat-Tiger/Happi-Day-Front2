import { eventsReviewValue } from '@/atom/eventsAtom';
import React, { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { IoStar } from 'react-icons/io5';
import { IoStarOutline } from 'react-icons/io5';
import { useRecoilState } from 'recoil';

const Review = () => {
  const [reveiwValue, setReviewValue] = useRecoilState(eventsReviewValue);
  const { starRate, review, reviewImage } = reveiwValue;

  const getDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    return `${year}.${(month < 10 ? '0' : '') + month}.${(day < 10 ? '0' : '') + day} ${
      (hour < 10 ? '0' : '') + hour
    }:${(min < 10 ? '0' : '') + min}:${(sec < 10 ? '0' : '') + sec}`;
  };

  const onChangeReview = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewValue({
      ...reveiwValue,
      review: e.target.value,
      date: getDate(),
    });
  };

  const handleChangeThumbnail = (value: File, reveiwValue: any) => {
    setReviewValue({
      ...reveiwValue,
      reviewImage: value,
    });
  };

  const [isActive, setIsActive] = useState<boolean>(false);

  // drag & drop
  const handleDrop = useCallback(
    (e: DragEvent<HTMLLabelElement>, setIsActive?: Dispatch<SetStateAction<boolean>>, reveiwValue?: any) => {
      e.preventDefault();
      const file = e.dataTransfer?.files[0];

      if (file && file.type.includes('image')) {
        handleChangeThumbnail(file, reveiwValue);
      }
      if (setIsActive) setIsActive(false);
    },
    [],
  );

  // 이미지 첨부하기
  const handleUpload = useCallback(
    (e: ChangeEvent<HTMLInputElement>, setIsActive?: Dispatch<SetStateAction<boolean>>, reveiwValue?: any) => {
      e.preventDefault();
      const file = e.target?.files?.[0];

      // image 파일이 맞다면 imgFile에 file을 저장하고, 이미지 url 정보를 가져오는 함수를 호출
      if (file && file.type.includes('image')) {
        handleChangeThumbnail(file, reveiwValue);
      } else console.error('No file selected');
      if (setIsActive) setIsActive(false);
    },
    [],
  );

  console.log('review', reveiwValue);

  return (
    <>
      <h1 className="prose-h4 mb-[20px] w-[100%] text-left">이벤트 후기 작성</h1>
      <div className="flex w-[700px] flex-col gap-[50px] border-2 border-gray5 p-[20px]">
        <div>
          <h1 className="prose-h5 mb-[20px] text-black">이벤트는 만족하셨나요?</h1>
          <div className="flex justify-center">
            {[...Array(starRate)].map((el, idx) => (
              <IoStar
                color="gold"
                size="50"
                className="cursor-pointer"
                key={idx}
                onClick={() => setReviewValue({ ...reveiwValue, starRate: idx + 1 })}
              />
            ))}
            {[...Array(5 - starRate)].map((el, idx) => (
              <IoStarOutline
                size="50"
                className="cursor-pointer text-gray6"
                key={idx}
                onClick={() => setReviewValue({ ...reveiwValue, starRate: starRate + idx + 1 })}
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className="prose-h5 mb-[20px] text-black">후기를 남겨주세요</h1>
          <textarea
            className="w-[100%] border-2 border-[#ddd] p-[20px] outline-none"
            value={review}
            onChange={(e) => onChangeReview(e)}
          />
        </div>
        <div>
          <h1 className="prose-h5 mb-[20px] text-black">사진 첨부하기</h1>
          <form className="flex w-full flex-col items-center justify-center gap-5">
            <label
              className={` preview flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed hover:bg-gray-100 ${
                isActive ? 'border-black bg-gray-300' : 'border-gray-300 bg-gray-50'
              }`}
              onDragEnter={() => setIsActive(true)}
              onDragLeave={() => setIsActive(false)}
              onDragOver={(event) => event.preventDefault()}
              onDrop={(event) => handleDrop(event, setIsActive, reveiwValue)}
              htmlFor="dropzone-file-t">
              <div className="flex flex-col items-center justify-center pb-6 pt-5">
                <AiOutlineCloudUpload className="mb-4 h-8 w-8 text-gray-500" />
                <p className="text-md mb-2 text-gray-500">
                  <span className="font-semibold">업로드를 누르거나</span> 드래그 앤 드롭해주세요
                </p>
                <p className="text-xs text-gray-500">PNG, JPG, JPEG, BMP or GIF (10MB 이하)</p>
              </div>
              <input
                id="dropzone-file-t"
                type="file"
                className="hidden"
                multiple
                onChange={(e) => handleUpload(e, setIsActive, reveiwValue)}
              />
            </label>
            <div className="mx-auto w-2/3 rounded-lg border-2 border-gray-300 bg-gray-100 p-5">
              {reviewImage ? (
                <img src={reviewImage ? URL.createObjectURL(reviewImage) : ''} className="mx-auto h-auto w-[250px]" />
              ) : (
                <p className="prose-body-XS text-center text-gray-600 md:prose-body-S">이미지 미리보기</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Review;
