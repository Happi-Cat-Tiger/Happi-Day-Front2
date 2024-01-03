export default function FriendshipLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className="w-full">{children}</div>
    </section>
  );
}
