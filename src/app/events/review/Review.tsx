import { eventsReviewValue } from '@/atom/eventsAtom';
import React, { ChangeEvent, Dispatch, DragEvent, SetStateAction, useCallback, useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { IoStar } from 'react-icons/io5';
import { IoStarOutline } from 'react-icons/io5';
import { useRecoilState } from 'recoil';
import { getDate } from '@/utils/GetDate';

const Review = () => {
  const [reviewValue, setReviewValue] = useRecoilState(eventsReviewValue);
  const { rating, description, imageFiles } = reviewValue;

  const onChangeReview = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewValue({
      ...reviewValue,
      description: e.target.value,
      // date: getDate(),
    });
  };

  const handleChangeThumbnail = (value: File, reviewValue: any) => {
    const updatedImageArr = [...reviewValue.imageFiles];
    updatedImageArr.push(value);

    setReviewValue({
      ...reviewValue,
      imageFiles: updatedImageArr,
    });
  };

  const [isActive, setIsActive] = useState<boolean>(false);

  // drag & drop
  const handleDrop = useCallback(
    (e: DragEvent<HTMLLabelElement>, setIsActive?: Dispatch<SetStateAction<boolean>>, reviewValue?: any) => {
      e.preventDefault();
      const file = e.dataTransfer?.files[0];

      if (file && file.type.includes('image')) {
        handleChangeThumbnail(file, reviewValue);
      }
      if (setIsActive) setIsActive(false);
    },
    [],
  );

  // 이미지 첨부하기
  const handleUpload = useCallback(
    (e: ChangeEvent<HTMLInputElement>, setIsActive?: Dispatch<SetStateAction<boolean>>, reviewValue?: any) => {
      e.preventDefault();
      const files = e.target?.files;
      let fileArr = [];

      if (!files || files.length === 0) {
        console.error('No files selected');
        return;
      }

      for (let i = 0; i < files.length; i++) {
        fileArr.push(files[i]);

        fileArr.map((el: any) => {
          if (el.type.includes('image')) {
            handleChangeThumbnail(el, reviewValue);
          } else {
            console.error('Invalid file type:', el.name);
          }
        });
      }

      if (setIsActive) setIsActive(false);
    },
    [],
  );

  return (
    <>
      <h1 className="prose-h4 mb-[20px] w-[100%] text-left">이벤트 후기 작성</h1>
      <div className="flex w-[700px] flex-col gap-[50px] border-2 border-gray5 p-[20px]">
        <div>
          <h1 className="prose-h5 mb-[20px] text-black">이벤트는 만족하셨나요?</h1>
          <div className="flex justify-center">
            {[...Array(rating)].map((el, idx) => (
              <IoStar
                color="gold"
                size="50"
                className="cursor-pointer"
                key={idx}
                onClick={() => setReviewValue({ ...reviewValue, rating: idx + 1 })}
              />
            ))}
            {[...Array(5 - rating)].map((el, idx) => (
              <IoStarOutline
                size="50"
                className="cursor-pointer text-gray6"
                key={idx}
                onClick={() => setReviewValue({ ...reviewValue, rating: rating + idx + 1 })}
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className="prose-h5 mb-[20px] text-black">후기를 남겨주세요</h1>
          <textarea
            className="w-[100%] border-2 border-[#ddd] p-[20px] outline-none"
            value={description}
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
              onDrop={(event) => handleDrop(event, setIsActive, reviewValue)}
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
                onChange={(e) => handleUpload(e, setIsActive, reviewValue)}
              />
            </label>
            <div className="mx-auto w-2/3 rounded-lg border-2 border-gray-300 bg-gray-100 p-5">
              {imageFiles ? (
                imageFiles.map((el) => (
                  <img src={el ? URL.createObjectURL(el) : ''} className="mx-auto h-auto w-[250px]" />
                ))
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
