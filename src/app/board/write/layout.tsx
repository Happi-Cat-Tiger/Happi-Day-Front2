export default function BoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className="h-full w-full">{children}</div>
    </section>
  );
}
