import { Mainherosection } from "@/components/main-herosection";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
    return (
        <main className="bg-[#0f0e0e] h-full">
            <Mainherosection />
            <section className="">
                {/* //first */}
                <div className="bg-[#1a1a1a] pt-20 pb-20">
                    <div className="flex flex-col ml-20 w-2/6">
                        <h1 className="text-sm mb-2 font-semibold text-[#6A6A6A]">
                            ANYWHERE & ANYTIME
                        </h1>
                        <h1 className="text-4xl mb-5 font-bold">
                            Coding made easy harness the power of an{" "}
                            <span className="bg-gradient-to-r from-[#a5b0dc] to-[#93e0e4] bg-clip-text text-transparent">
                                online code editor
                            </span>{" "}
                            in your browser
                        </h1>
                        <p className="mb-5 text-[#6A6A6A] font-semibold">
                            You can prototype your application using our online
                            editor and develop it into a large project.
                        </p>
                        <p className="mb-10 text-[#6A6A6A] font-semibold">
                            It enhance collaboration through live coding
                            sessions and automates your workflow with built-in
                            activities as well as gives real-time help using
                            latest GPT-4.0 model.
                        </p>
                        <button className="border rounded-lg border-[#6a6a6a] px-3 py-2 pb-2 gap-2 w-max flex flex-row items-center">
                            Open web editor <ArrowRight size={18} />
                        </button>
                    </div>
                    {/* <Image src="" width={} height={} alt=""/> */}
                </div>
                {/* //second */}
                <div className="bg-[#729cfc] text-black pt-20 pb-20">
                    <div className="flex flex-col ml-20 w-2/6">
                        <h1 className="text-sm mb-2 font-semibold ">
                            OUR PLATFORM
                        </h1>
                        <h1 className="text-4xl mb-5 font-bold">
                            Using advance AI model work 5x faster.
                        </h1>
                        <p className="mb-5 font-semibold">
                            Experience coding convenience on the go with our
                            latest Artificial Intelligence model.
                        </p>
                        <p className="mb-10 font-semibold">
                            Unleash the full potential of your code project by
                            integrating it with Artificial Intelligence. Our app
                            lets you seamlessly interact with AI model on the
                            go, allowing you to work with then with ease.
                        </p>
                        <button className="border rounded-lg border-black px-3 pt-1.5 pb-2 gap-2 w-max text-white bg-black flex flex-row items-center">
                            Know more <ArrowRight size={18} />
                        </button>
                    </div>
                    {/* <Image src="" width={} height={} alt=""/> */}
                </div>

                {/* //third */}
                <div className="bg-[#89dc79] text-black pt-20 pb-20 flex flex-row-reverse">
                    <div className="flex flex-col mr-20 w-2/6">
                        <h1 className="text-sm mb-2 font-semibold ">
                            OUR PLATFORM
                        </h1>
                        <h1 className="text-4xl mb-5 font-bold">
                            Enhance collaboration with developers in real time
                            via github.
                        </h1>
                        <p className="mb-5 font-semibold">
                            CodeCloud real-time collaboration capabilities
                            extend beyond code editing. Developers can also
                            participate in discussions. Leave comments, and
                            provide feedback directly within the app.
                        </p>
                        <p className="mb-10 font-semibold">
                            This streamlines the feedback loop, allowing for
                            efficient communication and ensuring that everyone
                            is on the same page.
                        </p>
                        <button className="border rounded-lg border-black px-3 pt-1.5 pb-2 gap-2 w-max text-white bg-black flex flex-row items-center">
                            Learn more about collaboration{" "}
                            <ArrowRight size={18} />
                        </button>
                    </div>
                    {/* <Image src="" width={} height={} alt=""/> */}
                </div>
            </section>
        </main>
    );
}
