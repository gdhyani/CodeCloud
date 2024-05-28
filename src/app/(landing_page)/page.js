import Footer from "@/components/Footer";
import { Mainherosection } from "@/components/main-herosection";
import Navbar from "@/components/Navbar(L)";
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
            <section className="">
                <div className="mt-20 flex flex-col">
                    <h1 className="text-[#6a6a6a] m-auto font-semibold">
                        EASY TO USE
                    </h1>
                    <h1 className="text-center m-auto text-7xl font-extrabold md:max-w-2xl leading-normal">
                        Code Anywhere, with{" "}
                        <span className="bg-gradient-to-br from-[#93e0e4] to-[#0aa5e7] bg-clip-text text-transparent">
                            CodeCloud
                        </span>
                        .
                    </h1>
                    <div className="flex flex-wrap gap-4 m-auto items-center mt-10">
                        <Image
                            className="bg-[#212121] px-2 py-2 rounded-lg"
                            src="./html.svg"
                            width={50}
                            height={50}
                            alt="html"
                        />
                        <Image
                            className="bg-[#212121] px-2 py-2 rounded-lg"
                            src="./css.svg"
                            width={50}
                            height={50}
                            alt="html"
                        />
                        <Image
                            className="bg-[#212121] px-2 py-2 rounded-lg"
                            src="./saas.svg"
                            width={50}
                            height={50}
                            alt="html"
                        />
                        <Image
                            className="bg-[#212121] px-2 py-2 rounded-lg"
                            src="./vue.svg"
                            width={50}
                            height={50}
                            alt="html"
                        />
                        <Image
                            className="bg-[#212121] px-2 py-2 rounded-lg"
                            src="./ruby.svg"
                            width={50}
                            height={50}
                            alt="html"
                        />
                        <Image
                            className="bg-[#212121] px-2 py-2 rounded-lg"
                            src="./python.svg"
                            width={50}
                            height={50}
                            alt="html"
                        />
                        <Image
                            className="bg-[#212121] px-2 py-2 rounded-lg"
                            src="./node.svg"
                            width={50}
                            height={50}
                            alt="html"
                        />
                        <Image
                            className="bg-[#212121] px-2 py-2 rounded-lg"
                            src="./js.svg"
                            width={50}
                            height={50}
                            alt="html"
                        />
                        <Image
                            className="bg-[#212121] px-2 py-2 rounded-lg"
                            src="./github.svg"
                            width={50}
                            height={50}
                            alt="html"
                        />
                        <Image
                            className="bg-[#212121] px-2 py-2 rounded-lg"
                            src="./c++.svg"
                            width={50}
                            height={50}
                            alt="html"
                        />
                        <Image
                            className="bg-[#212121] px-2 py-2 rounded-lg"
                            src="./c.svg"
                            width={50}
                            height={50}
                            alt="html"
                        />
                    </div>
                </div>
                <div className="mt-32 mx-10">
                    <h1 className="text-5xl font-semibold">
                        Start Coding with{" "}
                        <span className="bg-gradient-to-br from-[#93e0e4] to-[#0aa5e7] bg-clip-text text-transparent">
                            One Click
                        </span>
                        ,
                    </h1>
                    <h1 className="text-6xl font-semibold">
                        No Setup Required
                    </h1>
                    <Image
                        className="m-auto my-16 w-auto h-auto"
                        src="/screen2.1.png"
                        width={1500}
                        height={1500}
                        alt="screen2.1"
                    />
                </div>
            </section>
            <section className="bg-gradient-to-r from-[#93e0e4] to-[#0aa5e7] px-20 pt-20">
                <div className="w-5/12 z-10">
                    <div className="flex gap-5 text-black flex-col">
                        <h1 className="text-5xl font-bold z-10">
                            Place to deploy various source code.
                        </h1>
                        <h1 className="text-2xl z-10">
                            The centralized approach ensures a single source
                            merging and facilitating seamless collaboration.
                        </h1>
                        <button className="z-10 border rounded-lg border-black px-3 pt-1.5 pb-2 gap-2 w-max text-white bg-black flex flex-row items-center">
                            Try now for free <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

                <Image
                    className="-mt-52 -z-10 ml-auto"
                    src="/fimage.webp"
                    width={2000}
                    height={2000}
                    alt="fimage"
                />
            </section>
            <section className="">
                <Footer/>
            </section>
        </main>
    );
}
