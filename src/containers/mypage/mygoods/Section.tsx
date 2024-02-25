import React, { ReactNode } from 'react';

const Section = ({ children }: { children: ReactNode }) => {
  return <section className="flex flex-col gap-4">{children}</section>;
};

export default Section;
