import { cn } from "@/lib/utils";

export const BentoGrid = ({ className, children }) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({ className, title, description, header }) => {
    return (
        <div
            className={cn(
                "row-span-1 z-10 rounded-2xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-[#1c1c1c] dark:border-white/[0.2] bg-black border border-transparent justify-between flex flex-col space-y-4",
                className
            )}
        >
            <div className="flex h-full mt-5 flex-col items-center text-center ">
                {header}
            </div>

            <div className="group-hover/bento:translate-x-2 transition duration-200">
                <div className="font-sans text-left text-3xl font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                    {title}
                </div>
            </div>
        </div>
    );
};
