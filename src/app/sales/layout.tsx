'use client';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="m-auto md:max-w-[1280px]">{children}</div>;
};

export default layout;
