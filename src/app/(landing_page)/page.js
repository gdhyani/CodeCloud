import { Mainherosection } from "@/components/main-herosection";
import Image from "next/image";

export default function Home() {
    return (
        <main className="dark h-full">
            <Mainherosection />
            <section className="h-screen"></section>
        </main>
    );
}
