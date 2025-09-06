export default function CodeHeader({ text }: { text?: string }) {
  return (
    <div className="h-10 py-1 rounded-tr-[6px] rounded-tl-[6px] px-3 text-center bg-black mt-4 text-muted-foreground text-sm flex items-center justify-between border-b border-neutral-900">
      <div className="flex space-x-1">
        <span className="h-[10px] w-[10px] rounded-full bg-gray-600"></span>
        <span className="h-[10px] w-[10px] rounded-full bg-gray-500"></span>
        <span className="h-[10px] w-[10px] rounded-full bg-gray-400"></span>
      </div>
      <p>{text}</p>
    </div>
  );
}
