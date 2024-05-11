'use client';
import HappiDayBanner from '../../public/images/happiDayBanner.png';
import SubBanner from '../../public/images/subscriptionBanner.png';
import Image from 'next/image';
import Card from '@/components/Card';
import ArticleList from '@/components/List/ArticleList';
import LinkButton from '@/components/Button/LinkButton';
import { MOCKDATA } from '@/constants/mockdata';
import Slick from 'react-slick';
import { settings } from '@/slider/setting';
import '../slider/slick.css';
import '../slider/slick-theme.css';

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

const Home = () => {
  const mockData = MOCKDATA.appPage;
  return (
    <div className="my-32 h-auto sm:my-10 sm:px-[8px] lg:my-20">
      <div className="m-auto flex flex-col gap-16 md:max-w-[1280px]">
        <div className="max-w-[1280px]">
          <Image src={SubBanner} alt="구독 배너" className="w-[1280px]" />
        </div>
        <div className="flex h-[420px] max-w-[1280px] flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between">
            <h3 className="border-b-[3px] border-orange2 p-[8px] sm:prose-h6 md:prose-h3">인기 이벤트</h3>
            <LinkButton
              label="More+"
              href="/events"
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
            <LinkButton
              label="More+"
              href="/events"
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
            <LinkButton
              label="More+"
              href="/events"
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
