'use client';
const BoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto my-[100px] flex h-full flex-col items-center justify-center border-2 border-solid px-2 py-10 md:max-w-[1280px]">
      {children}
    </div>
  );
};

export default BoardLayout;
