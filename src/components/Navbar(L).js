import { SquareDashedBottomCode } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="md:px-20 px-4 py-3 border-b md:py-6 flex justify-between items-center ">
            <div className="flex gap-3 items-center">
                <SquareDashedBottomCode size={40} />
                <h1 className="md:text-3xl text-xl font-semibold md:border-r pr-4">CodeCloudAi</h1>
                <h1 className="mt-auto font-mono hidden md:block">Much more than a compiler</h1>
            </div>
            <div className="flex items-center gap-1 md:gap-3">
                <Link href="#" className="text-sm md:text-base md:hover:underline px-2 md:px-4 py-1 rounded-md underline-offset-8 border-2 border-transparent">Start Building</Link>
                <Link href="#" className="text-sm border rounded-md px-2 md:px-5 py-1 border-muted-foreground md:text-lg">Sign In</Link>
            </div>
        </div>
    );
}
