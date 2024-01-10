'use client';
import StyledButton from '@/components/Button/StyledButton';
import HappiDayBanner from '../../public/images/happiDayBanner.png';
import SubBanner from '../../public/images/subscriptionBanner.png';
import Image from 'next/image';
import Card from '@/components/Card';
import { AiOutlineSmile, AiOutlineCalendar, AiOutlineEye } from 'react-icons/ai';

interface MockData {
  id: number;
  thumbnailUrl: string;
  title: string;
  artist: string;
  place: string;
  startDate: string;
  endDate: string;
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
      thumbnailUrl: 'https://www.fitpetmall.com/wp-content/uploads/2023/10/230420-0668-1.png',
      title: '방탄소년단 생일 카페1',
      artist: '방탄소년단',
      place: '용산 슈퍼스타 떡볶이',
      startDate: '2023.12.04',
      endDate: '2023.12.05',
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
      startDate: '2023.12.04',
      endDate: '2023.12.05',
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
      startDate: '2023.12.04',
      endDate: '2023.12.05',
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
      startDate: '2023.12.04',
      endDate: '2023.12.05',
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
      startDate: '2023.12.04',
      endDate: '2023.12.05',
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
        <div className="max-w-[1280px]">
          <Image src={SubBanner} alt="구독 배너" className="w-[1280px]" />
        </div>
        <div className="flex h-[386px] max-w-[1280px] flex-col justify-between">
          <div className="flex items-center justify-between">
            <h3 className="prose-h3 border-b-[3px] border-orange2 p-[8px]">인기 이벤트</h3>
            <StyledButton
              label="More+"
              onClick={() => null}
              className="prose-subtitle-M rounded-[16px] bg-orange2 px-[13px] py-[4px] text-white"
            />
          </div>
          <div className="flex justify-between">
            {mockData.slice(0, 5).map((el: MockData, idx: number) => (
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
            {mockData.slice(0, 5).map((el: MockData, idx: number) => (
              <Card
                key={idx}
                id={el.id}
                cardType="sales"
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
            {mockData.slice(0, 5).map((el: MockData, idx: number) => (
              <Card
                key={idx}
                id={el.id}
                cardType="sales"
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
          </div>
        </div>
        <div className="flex h-[476px] w-full gap-[24px]">
          <div className="flex w-[870px] flex-col items-start gap-[35px]">
            <h3 className="prose-h3 border-b-[3px] border-orange2 p-[8px]">인기 게시글</h3>
            <ul className="flex h-full w-full flex-col justify-between">
              <li className="flex h-[65px] items-center justify-between border-b-[1px] px-[16px]">
                <div className="flex w-full flex-row items-center gap-[8px]">
                  <StyledButton
                    label="자유"
                    disabled={false}
                    onClick={() => null}
                    className="prose-body-L rounded-[8px] bg-gray5 px-[12px] py-[4px] text-white"
                  />
                  <div className="prose-btn-L flex-1">
                    <span>콘서트 같이 가실분</span>
                    <span className="text-[#891BDF]">(1)</span>
                  </div>
                </div>
                <div className="prose-body-XS flex w-[194px] items-center justify-between ">
                  <span className="flex items-center gap-[5px] text-gray4">
                    <AiOutlineSmile />
                    닉네임
                  </span>
                  <span className="flex items-center gap-[5px] text-gray4">
                    <AiOutlineCalendar />
                    12.01
                  </span>
                  <span className="flex items-center gap-[5px] text-gray4">
                    <AiOutlineEye />
                    50
                  </span>
                </div>
              </li>
              <li className="flex h-[65px] items-center justify-between border-b-[1px] px-[16px]">
                <div className="flex w-full flex-row items-center gap-[8px]">
                  <StyledButton
                    label="자유"
                    disabled={false}
                    onClick={() => null}
                    className="prose-body-L rounded-[8px] bg-gray5 px-[12px] py-[4px] text-white"
                  />
                  <div className="prose-btn-L flex-1">
                    <span>콘서트 같이 가실분</span>
                    <span className="text-[#891BDF]">(1)</span>
                  </div>
                </div>
                <div className="prose-body-XS flex w-[194px] items-center justify-between ">
                  <span className="flex items-center gap-[5px] text-gray4">
                    <AiOutlineSmile />
                    닉네임
                  </span>
                  <span className="flex items-center gap-[5px] text-gray4">
                    <AiOutlineCalendar />
                    12.01
                  </span>
                  <span className="flex items-center gap-[5px] text-gray4">
                    <AiOutlineEye />
                    50
                  </span>
                </div>
              </li>
              <li className="flex h-[65px] items-center justify-between border-b-[1px] px-[16px]">
                <div className="flex w-full flex-row items-center gap-[8px]">
                  <StyledButton
                    label="자유"
                    disabled={false}
                    onClick={() => null}
                    className="prose-body-L rounded-[8px] bg-gray5 px-[12px] py-[4px] text-white"
                  />
                  <div className="prose-btn-L flex-1">
                    <span>콘서트 같이 가실분</span>
                    <span className="text-[#891BDF]">(1)</span>
                  </div>
                </div>
                <div className="prose-body-XS flex w-[194px] items-center justify-between ">
                  <span className="flex items-center gap-[5px] text-gray4">
                    <AiOutlineSmile />
                    닉네임
                  </span>
                  <span className="flex items-center gap-[5px] text-gray4">
                    <AiOutlineCalendar />
                    12.01
                  </span>
                  <span className="flex items-center gap-[5px] text-gray4">
                    <AiOutlineEye />
                    50
                  </span>
                </div>
              </li>
              <li className="flex h-[65px] items-center justify-between border-b-[1px] px-[16px]">
                <div className="flex w-full flex-row items-center gap-[8px]">
                  <StyledButton
                    label="자유"
                    disabled={false}
                    onClick={() => null}
                    className="prose-body-L rounded-[8px] bg-gray5 px-[12px] py-[4px] text-white"
                  />
                  <div className="prose-btn-L flex-1">
                    <span>콘서트 같이 가실분</span>
                    <span className="text-[#891BDF]">(1)</span>
                  </div>
                </div>
                <div className="prose-body-XS flex w-[194px] items-center justify-between ">
                  <span className="flex items-center gap-[5px] text-gray4">
                    <AiOutlineSmile />
                    닉네임
                  </span>
                  <span className="flex items-center gap-[5px] text-gray4">
                    <AiOutlineCalendar />
                    12.01
                  </span>
                  <span className="flex items-center gap-[5px] text-gray4">
                    <AiOutlineEye />
                    50
                  </span>
                </div>
              </li>
              <li className="flex h-[65px] items-center justify-between border-b-[1px] px-[16px]">
                <div className="flex w-full flex-row items-center gap-[8px]">
                  <StyledButton
                    label="자유"
                    disabled={false}
                    onClick={() => null}
                    className="prose-body-L rounded-[8px] bg-gray5 px-[12px] py-[4px] text-white"
                  />
                  <div className="prose-btn-L flex-1">
                    <span>콘서트 같이 가실분</span>
                    <span className="text-[#891BDF]">(1)</span>
                  </div>
                </div>
                <div className="prose-body-XS flex w-[194px] items-center justify-between ">
                  <span className="flex items-center gap-[5px] text-gray4">
                    <AiOutlineSmile />
                    닉네임
                  </span>
                  <span className="flex items-center gap-[5px] text-gray4">
                    <AiOutlineCalendar />
                    12.01
                  </span>
                  <span className="flex items-center gap-[5px] text-gray4">
                    <AiOutlineEye />
                    50
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <Image src={HappiDayBanner} alt="Happi Day 배너" className="sm:hidden md:block md:h-[300px] md:w-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default Home;
