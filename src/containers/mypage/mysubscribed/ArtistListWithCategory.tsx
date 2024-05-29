'use client';

import React, { useState } from 'react';
import HorizontalOnClickList from '@/components/List/HorizontalOnClickList';
import ArtistList from './ArtistList';
import TeamList from './TeamList';
import ArtistProfileList from '@/components/List/ArtistProfileList';

const ArtistsWithCategory = () => {
  const [categoryNum, setCategoryNum] = useState<number>(1);

  const categoryList = [
    {
      label: '개인',
      onClick: () => {
        setCategoryNum(0);
      },
    },
    {
      label: '팀',
      onClick: () => {
        setCategoryNum(1);
      },
    },
  ];

  return (
    <div className="flex flex-col">
      <HorizontalOnClickList category={categoryList} categoryNum={categoryNum} />
      <ArtistProfileList>
        {categoryNum == 0 ? <ArtistList /> : null}
        {categoryNum == 1 ? <TeamList /> : null}
      </ArtistProfileList>
    </div>
  );
};

export default ArtistsWithCategory;
