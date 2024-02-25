import React, { ReactNode } from 'react';

const ArtistProfileList = ({ children }: { children: ReactNode }) => {
  return <div className="flex w-full flex-wrap justify-center py-4 md:justify-start">{children}</div>;
};

export default ArtistProfileList;
