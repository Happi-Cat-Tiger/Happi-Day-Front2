import React from 'react';

export default function MySubscribesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      <div className="flex-co mx-auto flex h-full min-h-screen justify-center md:max-w-[1280px]">
        <div>{children}</div>
      </div>
    </div>
  );
}
