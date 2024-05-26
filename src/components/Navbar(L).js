import { ArrowRight, SquareDashedBottomCode } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="md:px-20 px-4 py-3 border-b md:py-6 flex justify-between items-center ">
            <div className="flex gap-3 items-center">
                <SquareDashedBottomCode size={40} />
                <h1 className="md:text-3xl text-xl font-semibold md:border-r pr-4">
                    CodeCloudAi
                </h1>
                <h1 className="mt-auto font-mono hidden md:block">
                    Much more than a compiler
                </h1>
            </div>
            <Link
                href="#"
                className="flex flex-row gap-1 bg-[#1a1a1a] text-sm md:text-base md:hover:underline px-2 md:px-4 py-1 rounded-md border border-gray-600 items-center"
            >
                Try now its Free
                <ArrowRight size={18} />
            </Link>
        </div>
    );
}
