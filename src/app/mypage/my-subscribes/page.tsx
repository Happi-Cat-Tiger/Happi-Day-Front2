'use client';
import React from 'react';
import Label from '@/containers/mypage/mygoods/Label';
import Section from '@/containers/mypage/mygoods/Section';
import SubscribedArtists from '@/containers/mypage/mysubscribed/SubscribedArtists';
import ArtistsWithCategory from '@/containers/mypage/mysubscribed/ArtistListWithCategory';

const Page = () => {
  return (
    <div className="w-full">
      <div className="flex w-full flex-col gap-8">
        <div className="prose prose-h4 flex justify-center">당신의 아티스트를 구독해주세요!</div>
        <div className="flex flex-col gap-8">
          <Section>
            <Label>현재 구독 중인 아티스트</Label>
            <SubscribedArtists />
          </Section>

          <Section>
            <Label>새로운 아티스트 찾기</Label>
            <ArtistsWithCategory />
          </Section>
        </div>
      </div>
    </div>
  );
};

export default Page;
