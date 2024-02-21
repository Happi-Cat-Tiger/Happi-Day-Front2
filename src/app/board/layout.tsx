const BoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto my-[40px] flex h-full w-full flex-col items-center justify-center md:my-[60px] md:max-w-[1280px]">
      {children}
    </div>
  );
};

export default BoardLayout;
