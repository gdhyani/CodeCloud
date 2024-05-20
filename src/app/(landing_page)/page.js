import { Mainherosection } from "@/components/main-herosection";
import Image from "next/image";

export default function Home() {
    return (
        <main className="dark h-full">
            <Mainherosection />
            {/* <Image className="border-4 border-[#212121]" src="/hero.jpg" alt="hero" width={1000} height={1000}/> */}
            {/* <div className="min-h-screen md:border-t-2 border-slate-400">
                <h1 className="text-3xl md:text-6xl text-center font-semibold md:py-20 py-5">
                    Features
                </h1>
            </div> */}
        </main>
    );
}
