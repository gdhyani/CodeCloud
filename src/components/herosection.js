"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";

export default function Herosection() {
    return (
        <HeroHighlight className="w-full">
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -6, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-3xl flex flex-col px-4 md:text-4xl lg:text-6xl font-semibold text-neutral-700 dark:text-white max-w-4xl leading-snug lg:leading-snug text-center mx-auto "
            >
                CodeCloudAI: Your Virtual Coding Companion - {" "}
                <Highlight className="text-black m-auto dark:text-white">
                Solve, Debug, Excel !
                </Highlight><br></br>
                <button className="ms:text-2xl text-xl px-4 py-1 m-auto md:px-10 md:py-2 rounded-lg border-2 hover:bg-white hover:text-black transition-all border-yellow-400">Start Building</button>
            </motion.h1>
        </HeroHighlight>
    );
}
