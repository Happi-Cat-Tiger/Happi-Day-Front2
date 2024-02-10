import React, { ReactNode } from 'react';

const Content = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

export default Content;
