'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import StyledButton from '@/components/Button/StyledButton';
import { AiTwotoneEye, AiOutlineClockCircle, AiOutlineMessage, AiFillHeart } from 'react-icons/ai';
import { useRecoilState, useRecoilValue } from 'recoil';
import { allEventsReviewValue, eventsCommentValue, eventsReviewValue, reviewProps } from '@/atom/eventsAtom';
import Slick from 'react-slick';
import '../../../slider/slick.css';
import '../../../slider/slick-theme.css';
import Modal from '@/components/Modal/Modal';
import Reveiw from '../review/Reveiw';
import { IoStar } from 'react-icons/io5';
import { IoStarOutline } from 'react-icons/io5';

const settings = {
  dots: false, // 슬라이더 하단 점
  infinite: false, // 마지막 콘텐츠와 처음 콘텐츠 연결
  speed: 500, // 콘텐츠 전환 속도. 작아질수록 속도가 빠르다
  slidesToShow: 5, // 보여지는 컨텐츠 개수
  slideToScroll: 1, // 한번에 넘어가는 콘텐츠의 개수
  arrows: false, // 좌우 화살표
  draggable: true, // 슬라이더 드래그 활성화
  fade: false, // fade 효과
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 910,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const page = () => {
  const [comments, setComments] = useRecoilState(eventsCommentValue);
  const [commentsValue, setCommentsValue] = useState<string>();

  // 이벤트 후기 목록
  const reviewValue = useRecoilValue(eventsReviewValue);
  const [allReview, setAllReview] = useRecoilState<reviewProps[]>(allEventsReviewValue);
  const [isModal, setIsModal] = useState(true);
  const modalState = () => {
    setIsModal(true);
  };

  console.log('allReveiw', allReview);
  console.log('reviewvalue', reviewValue);

  // 임시 로그인 상태
  const userState = false;

  const getComments = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentsValue(e.target.value);
  };

  const addComments = () => {
    if (commentsValue) {
      const currentTime = new Date().toLocaleString();
      const newComment = {
        id: comments.length + 1,
        user: '성동윤',
        comment: `${commentsValue}`,
        date: `${currentTime}`,
      };

      setComments([...comments, newComment]);
      setCommentsValue('');
    } else {
      alert('댓글을 입력해주세요 !');
    }
  };

  return (
    <div className="mb-[200px] flex w-full flex-col px-[8px] sm:mt-[50px]">
      <Link href="/events">
        <div className="cursor-pointer text-[30px]">←</div>
      </Link>
      <div className="relative mb-[100px] flex w-full flex-col items-center gap-[16px]">
        <h3 className="sm:prose-h4 md:prose-h3">세븐틴 호시 생일 카페</h3>
        <ul className="flex gap-[16px] text-gray4 sm:prose-body-XS md:prose-body-S">
          <li className="flex items-center gap-[3px]">🧑 닉네임</li>
          <li className="flex items-center gap-[3px]">
            <AiOutlineMessage />
            0건
          </li>
          <li className="flex items-center gap-[3px]">
            <AiTwotoneEye /> 481회
          </li>
          <li className="flex items-center gap-[3px]">
            <AiOutlineClockCircle />
            24-01-08 19:30
          </li>
        </ul>
        <ul className="flex w-full gap-[16px] border-b-[1px] border-t-[1px] border-gray6 p-[10px] text-gray4 sm:prose-body-XS md:prose-body-S">
          <li>#세븐틴</li>
          <li>#호시</li>
        </ul>
        <div className="my-[30px] bg-blue-200 sm:h-[300px] sm:w-[300px] md:h-[600px] md:w-[600px] lg:h-[800px] lg:w-[800px]">
          thumbnail
        </div>
        <div className="my-[30px] bg-green-200 sm:h-[300px] sm:w-[300px] md:h-[600px] md:w-[600px] lg:h-[800px] lg:w-[800px]">
          poster
        </div>
        <div className="my-[100px] sm:w-[400px] md:w-[600px] lg:w-[800px]">
          <p className="sm:prose-body-S md:prose-body-L">
            이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에
            관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가
            설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에
            관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가
            설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명이벤트에
            관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가
            설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명
            이벤트에 관한 추가 설명 이벤트에 관한 추가 설명이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한
            추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명
            이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명이벤트에 관한
            추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명
            이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에
            관한 추가 설명 이벤트에 관한 추가 설명이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가
            설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명
            이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명 이벤트에 관한 추가 설명
          </p>
        </div>
        <div className="flex w-full flex-col items-center gap-[16px] bg-[#FEF9D0] py-[20px]">
          <div className="flex flex-col items-center">
            <h6 className="text-gray5 sm:prose-h7 md:prose-h6">Place</h6>
            <p className="sm:prose-body-XS md:prose-body-S">카페 소공원</p>
          </div>
          <div className="flex flex-col items-center">
            <h6 className="text-gray5 sm:prose-h7 md:prose-h6">Location</h6>
            <p className="sm:prose-body-XS md:prose-body-S">서울 마포구 어울림마당로 5길 52 2층</p>
          </div>
          <div className="flex h-[150px] w-[200px] items-center justify-center border-2 border-black">지도</div>
          <div className="flex flex-col items-center">
            <h6 className="text-gray5 sm:prose-h7 md:prose-h6">Date</h6>
            <p className="sm:prose-body-XS md:prose-body-S">2024-01-08 ~ 2024-01-09</p>
          </div>
        </div>
      </div>
      <div>
        <ul className="flex gap-[16px] sm:prose-body-XS md:prose-body-S">
          <li className="flex items-center gap-[3px]">
            <AiFillHeart style={{ color: 'red' }} /> 좋아요 30
          </li>
          <li className="flex items-center gap-[3px]">
            <AiOutlineMessage /> 댓글 16
          </li>
        </ul>
        <div className="my-[10px] flex flex-col gap-[5px]">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="relative flex gap-[20px] border-b-2 border-t-2 border-[#ddd] pb-[70px] pt-[30px]">
              <p className="text-gray4 sm:prose-body-XS md:prose-body-S sm:w-[25%] md:w-[10%]">🧑 {comment.user}</p>
              <p className="sm:prose-body-XS md:prose-body-S sm:w-[75%] md:w-[90%]">{comment.comment}</p>
              <p className="prose-body-XXS absolute bottom-[10px] text-gray3">{comment.date}</p>
            </div>
          ))}
        </div>
        {userState ? (
          <div className="flex h-[200px] items-center justify-center border-2 border-gray-200">
            <p className="prose-subtitle-M text-gray5">로그인 후 댓글을 남겨주세요!</p>
          </div>
        ) : (
          <>
            <div className="mb-[26px] flex flex-col gap-[26px] border-2 border-[#ddd] p-[20px]">
              <p className="text-gray4 sm:prose-body-XS md:prose-body-S">작성자 닉네임</p>
              <textarea
                placeholder="이 곳에 다녀온 후기를 간단하게 작성해주세요! 더 길게 작성하고 싶으면 자유게시판으로 ~~"
                className="w-full text-gray5 outline-none sm:prose-body-XS md:prose-body-S"
                value={commentsValue}
                onChange={getComments}
              />
            </div>
            <div className="text-right">
              <StyledButton
                label="등록"
                onClick={() => addComments()}
                disabled={false}
                className="rounded-[16px] bg-gray5 px-[24px] py-[16px] text-white sm:prose-btn-M md:prose-btn-L"
              />
            </div>
          </>
        )}
      </div>
      <div className="mt-[100px]">
        <div className="my-[20px] flex justify-between">
          <p className="prose-h4">이벤트 후기</p>
          <StyledButton
            label="후기 작성하기"
            onClick={() => modalState()}
            disabled={false}
            className=" bg-orange1 px-[20px] py-[10px] text-white sm:prose-btn-XS md:prose-btn-S"
          />
        </div>
        <Modal
          isOpen={isModal}
          children={<Reveiw />}
          buttonLabel="등록"
          onClose={() => setAllReview([{ ...allReview, ...reviewValue }])}
        />
        {allReview.map((review) => (
          <div className="flex flex-col gap-[10px] border-t-4 border-gray-300 py-[50px]">
            <div className="flex items-center gap-[10px]">
              <img src="" className="h-[20px] w-[20px] rounded-[50px] bg-gray-300" />
              <p className="prose-body-S text-gray4">닉네임</p>
              <p className="prose-body-XS text-gray5">2023.12.03</p>
            </div>
            <div className="flex">
              {[...Array(review.starRate)].map((el, idx) => (
                <IoStar color="gold" key={idx} />
              ))}
              {[...Array(5 - review.starRate)].map((el, idx) => (
                <IoStarOutline className="text-gray6" key={idx} />
              ))}
            </div>
            <div className="h-[250px] w-[100%] overflow-hidden">
              <Slick {...settings}>
                <img
                  className="h-[200px] w-[200px] cursor-pointer rounded-[10px]"
                  src="https://www.fitpetmall.com/wp-content/uploads/2023/10/230420-0668-1.png"
                />
                <img
                  className="h-[200px] w-[200px] cursor-pointer rounded-[10px]"
                  src="https://blog.kakaocdn.net/dn/tEMUl/btrDc6957nj/NwJoDw0EOapJNDSNRNZK8K/img.jpg"
                />
                <img
                  className="h-[200px] w-[200px] cursor-pointer rounded-[10px]"
                  src="https://ichef.bbci.co.uk/news/640/cpsprodpb/E172/production/_126241775_getty_cats.png"
                />
                <img
                  className="h-[200px] w-[200px] cursor-pointer rounded-[10px]"
                  src="https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4arX/image/rZ1xSXKCJ4cd-IExOYahRWdrqoo.jpg"
                />
                <img
                  className="h-[200px] w-[200px] cursor-pointer rounded-[10px]"
                  src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/kVe/image/i16oISROMcKXVyuQUWEY26qjF5E.jpg"
                />
                <img
                  className="h-[200px] w-[200px] cursor-pointer rounded-[10px]"
                  src="https://www.fitpetmall.com/wp-content/uploads/2023/10/230420-0668-1.png"
                />
              </Slick>
            </div>
            <div className="mt-[30px]">
              <p className="w-[60%] min-w-[500px]">{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
