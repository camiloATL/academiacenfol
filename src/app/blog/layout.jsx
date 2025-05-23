export default function BlogLayout({ children }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 py-10">{children}</main>
    </div>
  );
}
