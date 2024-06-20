import { SquareDashedBottomCode } from "lucide-react";
import Link from "next/link";



export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 right-0 bg-black z-50">
            <div className="md:px-20  px-4 py-3 text-sm border-b md:py-3 flex flex-col ">
                <div className="flex flex-row justify-between items-center ">
                    <div className="flex gap-4 flex-col md:flex-row">
                        <SquareDashedBottomCode size={32} />
                        <div className="md:flex hidden items-center gap-5 text-[#c6c6c6]">
                            <Link className="hover:text-white" href="#">
                                Features
                            </Link>
                            <Link className="hover:text-white" href="#">
                                Use Case
                            </Link>
                            <Link className="hover:text-white" href="#">
                                Contribution
                            </Link>
                            <Link className="hover:text-white" href="#">
                                Docs
                            </Link>
                            <Link className="hover:text-white" href="#">
                                Support
                            </Link>
                            <Link className="hover:text-white" href="#">
                                Pricing
                            </Link>
                        </div>
                    </div>
                    <div className="flex gap-4 md:gap-8  items-center">
                        <Link
                            className="text-[#c6c6c6] hover:underline underline-offset-4"
                            href="/login"
                        >
                            Sign In
                        </Link>
                        <Link
                            className="px-3 hover:border-white text-[#343434] font-semibold hover:border border border-transparent rounded-sm pt-1 pb-1 md:pb-[6px] bg-[#dcff50]"
                            href="/code"
                        >
                            Try for free
                        </Link>
                    </div>
                </div>
            </div>
            <div className="md:hidden dark border-b px-3 py-3 justify-around flex items-center gap-5 text-sm text-[#c6c6c6]">
                <Link className="hover:text-white" href="#">
                    Features
                </Link>
                <Link className="hover:text-white" href="#">
                    Contribution
                </Link>
                <Link className="hover:text-white" href="#">
                    Docs
                </Link>
                <Link className="hover:text-white" href="#">
                    Support
                </Link>
                <Link className="hover:text-white" href="#">
                    Pricing
                </Link>
            </div>
        </div>
    );
}
