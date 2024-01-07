'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

const page = () => {
  const pathname = usePathname();
  console.log(pathname);
  return <div>Event Detail Page{pathname}</div>;
};

export default page;
