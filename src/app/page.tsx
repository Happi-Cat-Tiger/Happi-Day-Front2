'use client';
import StyledButton from '@/components/Button/StyledButton';
import HappiDayBanner from '../../public/images/happiDayBanner.png';
import SubBanner from '../../public/images/subscriptionBanner.png';
import Image from 'next/image';
import Card from '@/components/Card';
import { useEffect, useState } from 'react';
import ArticleList from '@/components/List/ArticleList';
import Slick from 'react-slick';
import '../slider/slick.css';
import '../slider/slick-theme.css';
import { useRouter } from 'next/navigation';
import { useRecoilState, useRecoilValue } from 'recoil';
import { LoginState } from '@/atom/LoginState';
import LoadingSpinner from '@/containers/loading/LoadingSpinner';
import { getSalesPostListService } from '@/hooks/queries/sales/salesService';
import { getSalesPostListApi } from '@/api/sales/salesApi';

interface MockData {
  id: number;
  thumbnailUrl: string;
  title: string;
  artist: string;
  place: string;
  startDate: Date;
  endDate: Date;
  location: string;
  like: number;
  comment: number;
  view: number;
  joinCount: number;
}

const settings = {
  dots: true, // 슬라이더 하단 점
  infinite: false, // 마지막 콘텐츠와 처음 콘텐츠 연결
  speed: 500, // 콘텐츠 전환 속도. 작아질수록 속도가 빠르다
  slidesToShow: 5, // 보여지는 컨텐츠 개수
  slideToScroll: 1, // 한번에 넘어가는 콘텐츠의 개수
  arrows: true, // 좌우 화살표
  draggable: false, // 슬라이더 드래그 활성화
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

const Home = () => {
  // const { data } = usegetSubscribedListService();
  // console.log(data);
  // const { data } = getSalesPostListService();
  // const { res } = getSalesPostListApi();
  const date = new Date();
  const mockData = [
    {
      id: 1,
      thumbnailUrl: 'https://www.fitpetmall.com/wp-content/uploads/2023/10/230420-0668-1.png',
      title: '방탄소년단 생일 카페1',
      artist: '방탄소년단',
      place: '용산 슈퍼스타 떡볶이',
      startDate: date,
      endDate: date,
      location: '서울시 용산구',
      like: 1,
      comment: 1,
      view: 1,
      joinCount: 1,
    },
    {
      id: 2,
      thumbnailUrl: 'https://blog.kakaocdn.net/dn/tEMUl/btrDc6957nj/NwJoDw0EOapJNDSNRNZK8K/img.jpg',
      title: '방탄소년단 생일 카페2',
      artist: '방탄소년단',
      place: '용산 슈퍼스타 떡볶이',
      startDate: date,
      endDate: date,
      location: '서울시 용산구',
      like: 2,
      comment: 2,
      view: 2,
      joinCount: 2,
    },
    {
      id: 3,
      thumbnailUrl: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/E172/production/_126241775_getty_cats.png',
      title: '방탄소년단 생일 카페3',
      artist: '방탄소년단',
      place: '용산 슈퍼스타 떡볶이',
      startDate: date,
      endDate: date,
      location: '서울시 용산구',
      like: 3,
      comment: 3,
      view: 3,
      joinCount: 3,
    },
    {
      id: 4,
      thumbnailUrl:
        'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4arX/image/rZ1xSXKCJ4cd-IExOYahRWdrqoo.jpg',
      title: '방탄소년단 생일 카페4',
      artist: '방탄소년단',
      place: '용산 슈퍼스타 떡볶이',
      startDate: date,
      endDate: date,
      location: '서울시 용산구',
      like: 4,
      comment: 4,
      view: 4,
      joinCount: 4,
    },
    {
      id: 5,
      thumbnailUrl:
        'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/kVe/image/i16oISROMcKXVyuQUWEY26qjF5E.jpg',
      title: '방탄소년단 생일 카페5',
      artist: '방탄소년단',
      place: '용산 슈퍼스타 떡볶이',
      startDate: date,
      endDate: date,
      location: '서울시 용산구',
      like: 5,
      comment: 5,
      view: 5,
      joinCount: 5,
    },
  ];

  // 유저 정보 가져오기 (로그인 정보 => get통신까지 시간이 오래 걸림ㅠㅠ)
  const isLoggedIn = useRecoilValue(LoginState);
  // const { data: userData, isLoading } = useGetProfileInfoService({ isLoggedIn });

  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <LoadingSpinner />;

  return (
    <div className="my-32 h-auto sm:my-10 sm:px-[8px] lg:my-20">
      <div className="m-auto flex flex-col gap-16 md:max-w-[1280px]">
        <div className="max-w-[1280px]">
          <Image src={SubBanner} alt="구독 배너" className="w-[1280px]" />
        </div>
        <div className="flex h-[420px] max-w-[1280px] flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between">
            <h3 className="border-b-[3px] border-orange2 p-[8px] sm:prose-h6 md:prose-h3">인기 이벤트</h3>
            <StyledButton
              label="More+"
              onClick={() => router.push('/events')}
              className="prose-subtitle-M rounded-[16px] bg-orange2 px-[13px] py-[4px] text-white"
            />
          </div>
          <div className="h-[340px]">
            <Slick {...settings}>
              {mockData.map((el: MockData, idx: number) => (
                <Card
                  key={idx}
                  id={el.id}
                  cardType="events"
                  thumbnailUrl={el.thumbnailUrl}
                  title={el.title}
                  artist={el.artist}
                  location={el.place}
                  startTime={el.startDate}
                  endTime={el.endDate}
                  address={el.location}
                  likeCount={el.like}
                  commentCount={el.comment}
                  viewCount={el.view}
                />
              ))}
            </Slick>
          </div>
        </div>
        <div className="flex h-[420px] max-w-[1280px] flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between">
            <h3 className="border-b-[3px] border-orange2 p-[8px] sm:prose-h6 md:prose-h3">인기 굿즈</h3>
            <StyledButton
              label="More+"
              onClick={() => router.push('/sales')}
              className="prose-subtitle-M rounded-[16px] bg-orange2 px-[13px] py-[4px] text-white"
            />
          </div>
          <div className="h-[340px]">
            <Slick {...settings}>
              {mockData.map((el: MockData, idx: number) => (
                <Card
                  key={idx}
                  id={el.id}
                  cardType="events"
                  thumbnailUrl={el.thumbnailUrl}
                  title={el.title}
                  artist={el.artist}
                  location={el.place}
                  startTime={el.startDate}
                  endTime={el.endDate}
                  address={el.location}
                  likeCount={el.like}
                  commentCount={el.comment}
                  viewCount={el.view}
                />
              ))}
            </Slick>
          </div>
        </div>
        <div className="flex h-[420px] max-w-[1280px] flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between">
            <h3 className="border-b-[3px] border-orange2 p-[8px] sm:prose-h6 md:prose-h3">인기 공구</h3>
            <StyledButton
              label="More+"
              onClick={() => router.push('/sales')}
              className="prose-subtitle-M rounded-[16px] bg-orange2 px-[13px] py-[4px] text-white"
            />
          </div>
          <div className="h-[340px]">
            <Slick {...settings}>
              {mockData.map((el: MockData, idx: number) => (
                <Card
                  key={idx}
                  id={el.id}
                  cardType="events"
                  thumbnailUrl={el.thumbnailUrl}
                  title={el.title}
                  artist={el.artist}
                  location={el.place}
                  startTime={el.startDate}
                  endTime={el.endDate}
                  address={el.location}
                  likeCount={el.like}
                  commentCount={el.comment}
                  viewCount={el.view}
                />
              ))}
            </Slick>
          </div>
        </div>
        <div className="flex h-[476px] w-full gap-[24px]">
          <div className="flex flex-col items-start gap-[35px] sm:w-full md:w-[65%]">
            <h3 className="border-b-[3px] border-orange2 p-[8px] sm:prose-h6 md:prose-h3">인기 게시글</h3>
            <ul className="flex h-full w-full flex-col justify-between">
              <li className="flex h-[65px] items-center justify-between border-b-[1px]">
                <ArticleList path="/" />
              </li>
              <li className="flex h-[65px] items-center justify-between border-b-[1px]">
                <ArticleList path="/" />
              </li>
              <li className="flex h-[65px] items-center justify-between border-b-[1px]">
                <ArticleList path="/" />
              </li>
              <li className="flex h-[65px] items-center justify-between border-b-[1px]">
                <ArticleList path="/" />
              </li>
              <li className="flex h-[65px] items-center justify-between border-b-[1px]">
                <ArticleList path="/" />
              </li>
            </ul>
          </div>
          <Image
            src={HappiDayBanner}
            alt="Happi Day 배너"
            className="sm:hidden md:block md:min-w-[350px] lg:w-[450px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
