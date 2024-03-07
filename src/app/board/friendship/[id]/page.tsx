'use client';

import React from 'react';
import BoardArticlePage from '@/containers/board/BoardArticlePage';

const page = ({ params }: { params: any }) => {
  return <BoardArticlePage params={params} />;
};

export default page;
