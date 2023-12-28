import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="m-auto h-screen border-2 border-black md:max-w-[1280px]">{children}</div>;
};

export default layout;
