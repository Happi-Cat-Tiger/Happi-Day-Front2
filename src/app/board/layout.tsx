export default function BoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className="mx-auto flex h-full items-center justify-center border-2 border-solid md:max-w-[1280px]">
        <div className="h-full px-2">
          <div className="h-full w-full">{children}</div>
        </div>
      </div>
    </section>
  );
}
