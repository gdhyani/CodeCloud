import {
    GalleryHorizontalEnd,
    Github,
    Linkedin,
    LinkedinIcon,
    SquareDashedBottomCode,
    Twitter,
    TwitterIcon,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex flex-col border-t bg-black capitalize text-white">
            <div className="flex flex-col md:flex-row px-10 md:px-40 pt-20 text-sm md:pb-16 pb-14 justify-between">
                <div className="flex flex-col">
                    <Link href="#">
                        <SquareDashedBottomCode size={40} />
                    </Link>
                    <div className="flex flex-row mt-6 gap-2 mb-10 md:mb-0">
                        <Link
                            className="hover:bg-[#2a2a2a] px-2 py-2 rounded-xl"
                            href="https://www.github.com/gdhyani"
                        >
                            <Github />
                        </Link>
                        <Link
                            className="hover:bg-[#2a2a2a] px-2 py-2 rounded-xl"
                            href="https://www.x.com/im_paracetamol"
                        >
                            <TwitterIcon />
                        </Link>
                        <Link
                            className="hover:bg-[#2a2a2a] px-2 py-2 rounded-xl"
                            href="https://www.linkedin.com/gaurav-dhyani-/"
                        >
                            <LinkedinIcon />
                        </Link>
                        <Link
                            className="hover:bg-[#2a2a2a] px-2 py-2 rounded-xl"
                            href="/"
                        >
                            <GalleryHorizontalEnd />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-wrap md:flex-row md:gap-32 leading-loose">
                    <div className="flex flex-col w-1/2 md:w-auto mb-10 md:mb-0">
                        <h1 className="font-bold">Developer</h1>
                        <Link
                            href="#"
                            className="hover:underline underline-offset-2"
                        >
                            Contributions
                        </Link>
                        <Link
                            href="#"
                            className="hover:underline underline-offset-2"
                        >
                            API Reference
                        </Link>
                        <Link
                            href="#"
                            className="hover:underline underline-offset-2"
                        >
                            Dev Tools
                        </Link>
                        <Link
                            href="#"
                            className="hover:underline underline-offset-2"
                        >
                            Status
                        </Link>
                    </div>
                    <div className="flex flex-col pl-10 w-1/2 md:w-auto">
                        <h1 className="font-bold">Explore</h1>
                        <Link
                            href="#"
                            className="hover:underline underline-offset-2"
                        >
                            Discover
                        </Link>
                        <Link
                            href="#"
                            className="hover:underline underline-offset-2"
                        >
                            Changelog
                        </Link>
                        <Link
                            href="#"
                            className="hover:underline underline-offset-2"
                        >
                            Documentation
                        </Link>
                        <Link
                            href="#"
                            className="hover:underline underline-offset-2"
                        >
                            Blog
                        </Link>
                    </div>
                    <div className="flex flex-col w-1/2 md:w-auto">
                        <h1 className="font-bold">Company</h1>
                        <Link
                            href="#"
                            className="hover:underline underline-offset-2"
                        >
                            About
                        </Link>
                        <Link
                            href="#"
                            className="hover:underline underline-offset-2"
                        >
                            Support
                        </Link>
                        <Link
                            href="#"
                            className="hover:underline underline-offset-2"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="#"
                            className="hover:underline underline-offset-2"
                        >
                            Pricing
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col text-center md:flex-row gap-4 text-[#6a6a6a] border-t mt-10 mb-5 text-sm pt-5 justify-between px-5 md:px-40">
                <h1>Copyright © 2024, CodeCloudAI. All rights reserved.</h1>
                <div className="flex gap-6 text-center m-auto md:m-0">
                    <Link
                        className="hover:underline underline-offset-2"
                        href="/"
                    >
                        Terms and Conditions
                    </Link>
                    <Link
                        className="hover:underline underline-offset-2"
                        href="/"
                    >
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </div>
    );
}
