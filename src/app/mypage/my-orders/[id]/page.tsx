'use client';
import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const page = () => {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  return <div>zzz</div>;
};

export default page;
