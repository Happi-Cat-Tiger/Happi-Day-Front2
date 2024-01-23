'use client';

import React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const page = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  console.log(pathname, searchParams);
  return <div>판매 상세 내역</div>;
};

export default page;
