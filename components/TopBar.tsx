

export default function TopBar() {
    return (
        <div className="w-full bg-[#c7b1a6] text-white fixed top-0 left-0 z-[200] shadow-sm">

            <div className="
        h-[32px] 
        sm:h-[36px] 
        md:h-[40px] 
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