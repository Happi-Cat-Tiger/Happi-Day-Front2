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
import Reveiw from '../review/Review';
import { IoStar } from 'react-icons/io5';
import { IoStarOutline } from 'react-icons/io5';
import TwoButtonModal from '@/components/Modal/TwoButtonModal';
import KakaoMap from '@/components/Map/KakaoMap';
import { usePathname } from 'next/navigation';
import { getEventsDetail } from '@/hooks/queries/events/eventsService';
import { LoginState } from '@/atom/LoginState';
import { useGetProfileInfoService } from '@/hooks/queries/user/userService';
import { ProfileResponse } from '@/api/user/type';
import { useRouter } from 'next/navigation';

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
  const [reviewValue, setReviewValue] = useRecoilState(eventsReviewValue);
  const [allReview, setAllReview] = useRecoilState<reviewProps[]>(allEventsReviewValue);
  const [isModal, setIsModal] = useState(false);
  const modalState = () => {
    setIsModal(true);
    setReviewValue({ starRate: 0, review: '', date: '', reviewImage: [] });
  };

  console.log('comments', comments);
  console.log('commentsValue', commentsValue);

  // 로그인 상태
  const isLoggedIn = useRecoilValue(LoginState);

  const getComments = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentsValue(e.target.value);
  };

  const addComments = () => {
    if (commentsValue) {
      const currentTime = new Date().toLocaleString();
      const newComment = {
        id: comments.length + 1,
        user: userData.nickname,
        comment: `${commentsValue}`,
        date: `${currentTime}`,
      };

      setComments([...comments, newComment]);
      setCommentsValue('');
    } else {
      alert('댓글을 입력해주세요 !');
    }
  };

  const path = usePathname();
  const pathId = Number(path.replace('/events/', ''));

  const { data } = getEventsDetail({ eventId: pathId });

  const getDate = (value: string) => {
    const date = new Date(value);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${(month < 10 ? '0' : '') + month}.${(day < 10 ? '0' : '') + day}`;
  };

  const { data: userData, isLoading: isAuthLoading } = useGetProfileInfoService({ isLoggedIn }) as {
    data: ProfileResponse;
    isLoading: boolean;
  };

  console.log('user', userData);

  // // 작성자만 수정/삭제 가능
  const isAuthor: boolean = isLoggedIn ? userData.nickname === data?.username : false;
  console.log(data);
  // 이벤트 수정
  const router = useRouter();
  const putEvents = () => {
    router.push('/events/write');
  };
  // 이벤트 삭제
  const deleteEvents = () => {
    if (confirm('이벤트를 삭제하시겠습니까?')) {
      router.push('/events');
    } else {
      return;
    }
  };

  console.log('allReview', allReview);

  return (
    <div className="mb-[200px] flex w-full flex-col px-[8px] sm:mt-[50px]">
      <div className="flex items-center justify-between">
        <Link href="/events">
          <div className="cursor-pointer text-[30px]">←</div>
        </Link>
        {isAuthor && (
          <div className="flex items-center gap-[10px]">
            <StyledButton
              label="수정"
              onClick={putEvents}
              disabled={false}
              className="rounded-[10px] bg-orange1 px-[18px] py-[10px] text-white sm:prose-btn-S md:prose-btn-M"
            />
            <StyledButton
              label="삭제"
              onClick={deleteEvents}
              disabled={false}
              className="rounded-[10px] bg-gray5 px-[18px] py-[10px] text-white sm:prose-btn-S md:prose-btn-M"
            />
          </div>
        )}
      </div>
      <div className="relative mb-[100px] flex w-full flex-col items-center gap-[16px]">
        <h3 className="sm:prose-h4 md:prose-h3">{data?.title}</h3>
        <ul className="flex gap-[16px] text-gray4 sm:prose-body-XS md:prose-body-S">
          <li className="flex items-center gap-[3px]">
            <img src={data?.userProfileUrl} className="h-[20px] w-[20px]" /> {data?.username}
          </li>
          <li className="flex items-center gap-[3px]">
            <AiOutlineMessage />
            {data?.commentCount}건
          </li>
          <li className="flex items-center gap-[3px]">
            <AiTwotoneEye /> {data?.viewCount}회
          </li>
          <li className="flex items-center gap-[3px]">
            <AiOutlineClockCircle />
            {getDate(data?.updatedAt)}
          </li>
        </ul>
        <ul className="flex w-full gap-[16px] border-b-[1px] border-t-[1px] border-gray6 p-[10px] text-gray4 sm:prose-body-XS md:prose-body-S">
          {data?.hashtags.map((el: string, idx: number) => <li key={idx}>#{el}</li>)}
        </ul>
        <img
          src={data?.thumbnailUrl}
          alt="썸네일 이미지"
          className="my-[30px] sm:w-[300px] md:w-[600px] lg:w-[800px]"
        />
        <img src={data?.imageUrl} alt="썸네일 이미지" className="my-[30px] sm:w-[300px] md:w-[600px] lg:w-[800px]" />
        <div className="my-[100px] sm:w-[400px] md:w-[600px] lg:w-[800px]">
          <p className="sm:prose-body-S md:prose-body-L">{data?.description}</p>
        </div>
        <div className="flex w-full flex-col items-center gap-[16px] bg-[#FEF9D0] py-[20px]">
          <div className="flex flex-col items-center">
            <h6 className="text-gray5 sm:prose-h7 md:prose-h6">Place</h6>
            <p className="sm:prose-body-XS md:prose-body-S">{data?.address}</p>
          </div>
          <div className="flex flex-col items-center">
            <h6 className="text-gray5 sm:prose-h7 md:prose-h6">Location</h6>
            <p className="sm:prose-body-XS md:prose-body-S">{data?.location}</p>
          </div>
          <KakaoMap mapAddress={data?.address} />
          <div className="flex flex-col items-center">
            <h6 className="text-gray5 sm:prose-h7 md:prose-h6">Date</h6>
            <p className="sm:prose-body-XS md:prose-body-S">
              {getDate(data?.startTime)} ~ {getDate(data?.endTime)}
            </p>
          </div>
        </div>
      </div>
      <div>
        <ul className="flex gap-[16px] sm:prose-body-XS md:prose-body-S">
          <li className="flex items-center gap-[3px]">
            <AiFillHeart style={{ color: 'red' }} /> 좋아요 {data?.likeCount}
          </li>
          <li className="flex items-center gap-[3px]">
            <AiOutlineMessage /> 댓글 {data?.commentCount}
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
        {!isLoggedIn ? (
          <div className="flex h-[200px] items-center justify-center border-2 border-gray6">
            <p className="prose-subtitle-M text-gray5">로그인 후 댓글을 남겨주세요!</p>
          </div>
        ) : (
          <>
            <div className="mb-[26px] flex flex-col gap-[26px] border-2 border-gray6 p-[20px]">
              <p className="text-gray4 sm:prose-body-XS md:prose-body-S">{userData.nickname}</p>
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
          {isLoggedIn && (
            <StyledButton
              label="후기 작성하기"
              onClick={() => modalState()}
              disabled={false}
              className=" bg-orange1 px-[20px] py-[10px] text-white sm:prose-btn-XS md:prose-btn-S"
            />
          )}
        </div>
        <TwoButtonModal
          isOpen={isModal}
          setOpen={() => setIsModal(false)}
          children={<Reveiw />}
          buttonLabel="등록"
          onClose={() => setAllReview([...allReview, { ...reviewValue }])}
        />
        {!isLoggedIn ? (
          <div className="flex h-[200px] items-center justify-center border-2 border-gray6">
            <p className="prose-subtitle-M text-gray5">로그인 후 후기를 작성해주세요!</p>
          </div>
        ) : allReview.length > 0 ? (
          allReview.map((review) => (
            <div className="flex flex-col gap-[10px] border-t-4 border-gray-300 py-[50px]">
              <div className="flex items-center gap-[10px]">
                <img src={data?.userProfileUrl} className="h-[20px] w-[20px] rounded-[50px] bg-gray-300" />
                <p className="prose-body-S text-gray4">{userData.nickname}</p>
                <p className="prose-body-XS text-gray5">{review.date}</p>
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
                  {review.reviewImage.map((el) => (
                    <img
                      className="h-[200px] w-[200px] cursor-pointer rounded-[10px]"
                      src={el ? URL.createObjectURL(el) : ''}
                    />
                  ))}
                </Slick>
              </div>
              <div className="mt-[30px]">
                <p className="w-[60%] min-w-[500px]">{review.review}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center border-2 border-gray6 py-[50px]">
            <p className="text-gray5">등록된 후기가 없습니다</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
