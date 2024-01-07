export default function AllLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className="h-full w-full">{children}</div>
    </section>
  );
}
