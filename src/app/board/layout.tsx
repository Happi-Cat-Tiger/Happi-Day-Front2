export default function BoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className="flex justify-center items-center mx-auto md:max-w-[1280px] border-gray1 border-solid border-2">
        <div className="h-full min-h-screen px-2">
          <div className="w-full">{children}</div>
        </div>
      </div>
    </section>
  );
}
