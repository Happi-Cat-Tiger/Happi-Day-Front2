import React from 'react';

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <div className="mx-2 flex h-full min-h-screen justify-center rounded-lg md:mx-6 md:my-6 md:max-w-[1280px] md:border md:border-gray6">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default ProfileLayout;
