import React from 'react';

const MySalesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <div className="mx-auto flex h-full min-h-screen justify-center md:max-w-[1280px]">
        <div className="mx-2 flex w-full rounded-lg md:mx-6 md:my-6 md:border md:border-gray6">
          <div className="mx-5 my-3 flex w-full flex-col gap-4 md:mx-14 md:my-10">
            <div className="prose prose-h4">판매 내역</div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySalesLayout;
