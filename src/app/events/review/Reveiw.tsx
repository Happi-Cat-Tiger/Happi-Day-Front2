import { eventsReviewValue } from '@/atom/eventsAtom';
import React from 'react';
import { IoStar } from 'react-icons/io5';
import { IoStarOutline } from 'react-icons/io5';
import { useRecoilState } from 'recoil';

const Reveiw = () => {
  const [reveiwValue, setReviewValue] = useRecoilState(eventsReviewValue);
  const { starRate, review } = reveiwValue;

  const onChangeReview = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewValue({
      ...reveiwValue,
      review: e.target.value,
    });
  };

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
          <h1 className="prose-h5 text-black">사진 첨부하기</h1>
        </div>
      </div>
    </>
  );
};

export default Reveiw;
