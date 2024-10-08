export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className="max-w-[1200px] h-full mx-auto px-4">{children}</div>;
}
