'use client';
import React from 'react';
import { getTeamInfoService, getArtistInfoService } from '@/hooks/queries/artist/artistService';
import ArtistAndTeamInfo from '@/containers/mypage/mysubscribed/ArtistAndTeamInfo';

const page = ({ params }: { params: { id: string; type: string } }) => {
  const id = parseInt(params.id, 10);
  const type = params.type;

  const { data: teamInfo } = getTeamInfoService({ teamId: id, type });
  const { data: artistInfo } = getArtistInfoService({ artistId: id, type });
  const isDataAvailable = artistInfo && teamInfo;

  return (
    isDataAvailable && (
      <div className="w-full">
        <div className="flex w-full flex-col gap-8">
          <div className="prose prose-h4 flex justify-center">{type == 'artist' ? '아티스트 정보' : '팀 정보'}</div>
          <ArtistAndTeamInfo type={type} data={type == 'artist' ? artistInfo : teamInfo} />
        </div>
      </div>
    )
  );
};

export default page;

// const TeamInfoMockdata: TeamInfo = {
//   id: 1,
//   name: '동방신기',
//   logoUrl: 'https://source.unsplash.com/random/400x400/?singer',
//   description:
//     '동방신기는 SM 엔터테인먼트 소속의 대한민국의 2인조 남성 음악 그룹으로 활동하고있다. 2004년 1월, 첫 데뷔 싱글 <Hug> 를 발매하며 가요계에 데뷔했다. 비공식 데뷔 무대는 싱글 발매 직전인 2003년 12월 26일 이루어졌다. ',
//   subscribed: false,
//   artists: [
//     { id: 1, name: '유노윤호', profileUrl: 'https://source.unsplash.com/random/400x400/?singer' },
//     { id: 2, name: '시아준수', profileUrl: 'https://source.unsplash.com/random/400x400/?singer' },
//   ],
//   sales: [
//     {
//       id: 1,
//       categoryName: '굿즈',
//       userNickName: '우왕쓰',
//       name: '동방신기 티셔츠',
//       salesStauts: 'ON_SALES',
//       thumbnailUrl: 'https://source.unsplash.com/random/400x400/?singer',
//     },
//     {
//       id: 2,
//       categoryName: '굿즈',
//       userNickName: '우왕쓰',
//       name: '[2차]시아준수 키링',
//       salesStauts: 'ON_SALES',
//       thumbnailUrl: 'https://source.unsplash.com/random/400x400/?singer',
//     },
//     {
//       id: 3,
//       categoryName: '굿즈',
//       userNickName: '우왕쓰',
//       name: '동방신기 8집 앨범',
//       salesStauts: 'ON_SALES',
//       thumbnailUrl: 'https://source.unsplash.com/random/400x400/?singer',
//     },
//   ],
//   events: [
//     {
//       id: 1,
//       nickname: 'qwer',
//       title: '동방신기 팬미팅',
//       updatedAt: '2024-02-05',
//       startTime: '2024-02-15',
//       endTime: '2024-02-19',
//       location: '서울특별시 송파구',
//       thumbnailUrl: 'https://source.unsplash.com/random/400x400/?singer',
//       artists: ['유노윤호', '시아준수'],
//       teams: ['동방신기'],
//       hashtags: ['유노윤호', '시아준수'],
//       commentCount: 3,
//       likeCount: 0,
//       viewCount: 94,
//       reviewCount: 10,
//     },
//     {
//       id: 2,
//       nickname: 'qwer',
//       title: '동방신기 팬미팅',
//       updatedAt: '2024-02-05',
//       startTime: '2024-02-15',
//       endTime: '2024-02-19',
//       location: '서울특별시 송파구',
//       thumbnailUrl: 'https://source.unsplash.com/random/400x400/?singer',
//       artists: ['유노윤호', '시아준수'],
//       teams: ['동방신기'],
//       hashtags: ['유노윤호', '시아준수'],
//       commentCount: 3,
//       likeCount: 0,
//       viewCount: 94,
//       reviewCount: 10,
//     },
//     {
//       id: 3,
//       nickname: 'qwer',
//       title: '동방신기 팬미팅',
//       updatedAt: '2024-02-05',
//       startTime: '2024-02-15',
//       endTime: '2024-02-19',
//       location: '서울특별시 송파구',
//       thumbnailUrl: 'https://source.unsplash.com/random/400x400/?singer',
//       artists: ['유노윤호', '시아준수'],
//       teams: ['동방신기'],
//       hashtags: ['유노윤호', '시아준수'],
//       commentCount: 3,
//       likeCount: 0,
//       viewCount: 94,
//       reviewCount: 10,
//     },
//     {
//       id: 4,
//       nickname: 'qwer',
//       title: '동방신기 팬미팅',
//       updatedAt: '2024-02-05',
//       startTime: '2024-02-15',
//       endTime: '2024-02-19',
//       location: '서울특별시 송파구',
//       thumbnailUrl: 'https://source.unsplash.com/random/400x400/?singer',
//       artists: ['유노윤호', '시아준수'],
//       teams: ['동방신기'],
//       hashtags: ['유노윤호', '시아준수'],
//       commentCount: 3,
//       likeCount: 0,
//       viewCount: 94,
//       reviewCount: 10,
//     },
//     {
//       id: 5,
//       nickname: 'qwer',
//       title: '동방신기 팬미팅',
//       updatedAt: '2024-02-05',
//       startTime: '2024-02-15',
//       endTime: '2024-02-19',
//       location: '서울특별시 송파구',
//       thumbnailUrl: 'https://source.unsplash.com/random/400x400/?singer',
//       artists: ['유노윤호', '시아준수'],
//       teams: ['동방신기'],
//       hashtags: ['유노윤호', '시아준수'],
//       commentCount: 3,
//       likeCount: 0,
//       viewCount: 94,
//       reviewCount: 10,
//     },
//     {
//       id: 6,
//       nickname: 'qwer',
//       title: '동방신기 팬미팅',
//       updatedAt: '2024-02-05',
//       startTime: '2024-02-15',
//       endTime: '2024-02-19',
//       location: '서울특별시 송파구',
//       thumbnailUrl: 'https://source.unsplash.com/random/400x400/?singer',
//       artists: ['유노윤호', '시아준수'],
//       teams: ['동방신기'],
//       hashtags: ['유노윤호', '시아준수'],
//       commentCount: 3,
//       likeCount: 0,
//       viewCount: 94,
//       reviewCount: 10,
//     },
//   ],
// };

// const ArtistMockdata: ArtistInfo = {
//   id: 1,
//   name: '유노윤호',
//   profileUrl: 'https://source.unsplash.com/random/400x400/?singer',
//   description: '동방신기 춤신춤왕을 담당하고 있는 멤버입니다',
//   subscribed: true,
//   teams: [{ id: 1, name: '동방신기', logoUrl: 'https://source.unsplash.com/random/400x400/?singer' }],
//   sales: [
//     {
//       id: 1,
//       categoryName: '굿즈',
//       userNickName: '우왕쓰',
//       name: '동방신기 티셔츠',
//       salesStauts: 'ON_SALES',
//       thumbnailUrl: 'https://source.unsplash.com/random/400x400/?singer',
//     },
//     {
//       id: 2,
//       categoryName: '굿즈',
//       userNickName: '우왕쓰',
//       name: '[2차]시아준수 키링',
//       salesStauts: 'ON_SALES',
//       thumbnailUrl: 'https://source.unsplash.com/random/400x400/?singer',
//     },
//     {
//       id: 3,
//       categoryName: '굿즈',
//       userNickName: '우왕쓰',
//       name: '동방신기 8집 앨범',
//       salesStauts: 'ON_SALES',
//       thumbnailUrl: 'https://source.unsplash.com/random/400x400/?singer',
//     },
//   ],
//   events: [
//     {
//       id: 1,
//       nickname: 'qwer',
//       title: '동방신기 팬미팅',
//       updatedAt: '2024-02-05',
//       startTime: '2024-02-15',
//       endTime: '2024-02-19',
//       location: '서울특별시 송파구',
//       thumbnailUrl: 'https://source.unsplash.com/random/400x400/?singer',
//       artists: ['유노윤호', '시아준수'],
//       teams: ['동방신기'],
//       hashtags: ['유노윤호', '시아준수'],
//       commentCount: 3,
//       likeCount: 0,
//       viewCount: 94,
//       reviewCount: 10,
//     },
//     {
//       id: 2,
//       nickname: 'qwer',
//       title: '유노윤호 팬사인회',
//       updatedAt: '2024-02-05',
//       startTime: '2024-02-15',
//       endTime: '2024-02-19',
//       location: '서울특별시 송파구',
//       thumbnailUrl: 'https://source.unsplash.com/random/400x400/?singer',
//       artists: ['유노윤호', '시아준수'],
//       teams: ['동방신기'],
//       hashtags: ['유노윤호', '시아준수'],
//       commentCount: 3,
//       likeCount: 0,
//       viewCount: 94,
//       reviewCount: 10,
//     },
//   ],
// };
