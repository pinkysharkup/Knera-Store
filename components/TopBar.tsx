

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 w-full h-[40px] bg-[#c7b1a6] text-white z-[200] shadow-sm">

      <div className="
        h-full
        flex items-center justify-center
        text-[11px] sm:text-xs md:text-sm
        px-3
      ">

        <span className="truncate">
          Products Made With Love.
        </span>

        <span className="underline cursor-pointer ml-1 whitespace-nowrap">
          Check our store
        </span>

      </div>

    </div>
  );
}