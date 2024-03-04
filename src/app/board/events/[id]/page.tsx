'use client';

import React from 'react';
import BoardArticle from '@/containers/board/BoardArticle';

const page = ({ params }: { params: any }) => {
  return <BoardArticle params={params} />;
};

export default page;
