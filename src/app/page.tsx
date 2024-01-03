'use client';
import StyledButton from '@/components/Button/StyledButton';
import HappiDayBanner from '../../public/images/happiDayBanner.png';
import SubBanner from '../../public/images/subscriptionBanner.png';
import Image from 'next/image';

interface MockData {
  id: number;
  title: string;
  artist: string;
  place: string;
  date: string;
  location: string;
  like: number;
  comment: number;
  view: number;
  joinCount: number;
}

const Home = () => {
  const mockData = [
    {
      id: 1,
      title: '방탄소년단 생일 카페1',
      artist: '방탄소년단',
      place: '용산 슈퍼스타 떡볶이',
      date: '2023.12.04 ~ 2023.12.05',
      location: '서울시 용산구',
      like: 1,
      comment: 1,
      view: 1,
      joinCount: 1,
    },
    {
      id: 2,
      title: '방탄소년단 생일 카페2',
      artist: '방탄소년단',
      place: '용산 슈퍼스타 떡볶이',
      date: '2023.12.04 ~ 2023.12.05',
      location: '서울시 용산구',
      like: 2,
      comment: 2,
      view: 2,
      joinCount: 2,
    },
    {
      id: 3,
      title: '방탄소년단 생일 카페3',
      artist: '방탄소년단',
      place: '용산 슈퍼스타 떡볶이',
      date: '2023.12.04 ~ 2023.12.05',
      location: '서울시 용산구',
      like: 3,
      comment: 3,
      view: 3,
      joinCount: 3,
    },
    {
      id: 4,
      title: '방탄소년단 생일 카페4',
      artist: '방탄소년단',
      place: '용산 슈퍼스타 떡볶이',
      date: '2023.12.04 ~ 2023.12.05',
      location: '서울시 용산구',
      like: 4,
      comment: 4,
      view: 4,
      joinCount: 4,
    },
    {
      id: 5,
      title: '방탄소년단 생일 카페5',
      artist: '방탄소년단',
      place: '용산 슈퍼스타 떡볶이',
      date: '2023.12.04 ~ 2023.12.05',
      location: '서울시 용산구',
      like: 5,
      comment: 5,
      view: 5,
      joinCount: 5,
    },
  ];
  return (
    <div className="my-32 h-auto">
      <div className="m-auto flex flex-col gap-16 md:max-w-[1280px]">
        <div className="md:w-[1280px]">
          <Image src={SubBanner} alt="구독 배너" className="w-[1280px]" />
        </div>
        <div className="flex h-[386px] w-full flex-col justify-between gap-[35px]">
          <div className="flex items-center justify-between">
            <h3 className="prose-h3 border-b-[3px] border-orange2 p-[8px]">인기 이벤트</h3>
            <StyledButton
              label="More+"
              onClick={() => null}
              className="prose-subtitle-M rounded-[16px] bg-orange2 px-[13px] py-[4px] text-white"
            />
          </div>
          <div className="flex justify-between">
            {mockData.map((el: MockData, idx: number) => (
              <div key={idx} className="h-[300px] w-[224px] border-2 border-black">
                {el.title}
                {el.artist}
                {el.place}
                {el.date}
                {el.location}
                {el.like}
                {el.view}
                {el.comment}
              </div>
            ))}
          </div>
        </div>
        <div className="flex h-[386px] w-full flex-col justify-between gap-[35px]">
          <div className="flex items-center justify-between">
            <h3 className="prose-h3 border-b-[3px] border-orange2 p-[8px]">인기 굿즈</h3>
            <StyledButton
              label="More+"
              onClick={() => null}
              className="prose-subtitle-M rounded-[16px] bg-orange2 px-[13px] py-[4px] text-white"
            />
          </div>
          <div className="flex justify-between">
            {mockData.map((el: MockData, idx: number) => (
              <div key={idx} className="h-[300px] w-[224px] border-2 border-black">
                {el.title}
                {el.artist}
                {el.place}
                {el.date}
                {el.location}
                {el.like}
                {el.view}
                {el.comment}
              </div>
            ))}
          </div>
        </div>
        <div className="flex h-[386px] w-full flex-col justify-between gap-[35px]">
          <div className="flex items-center justify-between">
            <h3 className="prose-h3 border-b-[3px] border-orange2 p-[8px]">인기 공구</h3>
            <StyledButton
              label="More+"
              onClick={() => null}
              className="prose-subtitle-M rounded-[16px] bg-orange2 px-[13px] py-[4px] text-white"
            />
          </div>
          <div className="flex justify-between">
            {mockData.map((el: MockData, idx: number) => (
              <div key={idx} className="h-[300px] w-[224px] border-2 border-black">
                {el.title}
                {el.artist}
                {el.place}
                {el.date}
                {el.location}
                {el.like}
                {el.view}
                {el.comment}
              </div>
            ))}
          </div>
        </div>
        <div className="flex h-[476px] w-full gap-[24px]">
          <div className="flex w-[870px] flex-col items-start gap-[35px]">
            <h3 className="prose-h3 border-b-[3px] border-orange2 p-[8px]">인기 게시글</h3>
            <ul className="flex h-full w-full flex-col justify-between">
              <li className="flex h-[65px] items-center justify-between border-b-[1px] px-[16px]">
                <div className="flex w-full flex-row gap-[8px]">
                  <button className="">자유</button>
                  <div className="flex-1 ">콘서트 같이 가실분(1)</div>
                </div>
                <div className="prose-body-XXS flex w-[194px] gap-[8px] ">
                  <span>💬닉네임</span>
                  <span>💬12.01</span>
                  <span>💬50</span>
                </div>
              </li>
              <li className="flex h-[65px] items-center justify-between border-b-[1px] px-[16px]">
                <div className="flex w-full flex-row gap-[8px]">
                  <button className="">자유</button>
                  <div className="flex-1 ">콘서트 같이 가실분(1)</div>
                </div>
                <div className="prose-body-XXS flex w-[194px] gap-[8px] ">
                  <span>💬닉네임</span>
                  <span>💬12.01</span>
                  <span>💬50</span>
                </div>
              </li>
              <li className="flex h-[65px] items-center justify-between border-b-[1px] px-[16px]">
                <div className="flex w-full flex-row gap-[8px]">
                  <button className="">자유</button>
                  <div className="flex-1 ">콘서트 같이 가실분(1)</div>
                </div>
                <div className="prose-body-XXS flex w-[194px] gap-[8px] ">
                  <span>💬닉네임</span>
                  <span>💬12.01</span>
                  <span>💬50</span>
                </div>
              </li>
              <li className="flex h-[65px] items-center justify-between border-b-[1px] px-[16px]">
                <div className="flex w-full flex-row gap-[8px]">
                  <button className="">자유</button>
                  <div className="flex-1 ">콘서트 같이 가실분(1)</div>
                </div>
                <div className="prose-body-XXS flex w-[194px] gap-[8px] ">
                  <span>💬닉네임</span>
                  <span>💬12.01</span>
                  <span>💬50</span>
                </div>
              </li>
              <li className="flex h-[65px] items-center justify-between border-b-[1px] px-[16px]">
                <div className="flex w-full flex-row gap-[8px]">
                  <button className="">자유</button>
                  <div className="flex-1 ">콘서트 같이 가실분(1)</div>
                </div>
                <div className="prose-body-XXS flex w-[194px] gap-[8px] ">
                  <span>💬닉네임</span>
                  <span>💬12.01</span>
                  <span>💬50</span>
                </div>
              </li>
            </ul>
          </div>
          <Image src={HappiDayBanner} alt="Happi Day 배너" />
        </div>
      </div>
    </div>
  );
};

export default Home;
