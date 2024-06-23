import {
    Apple,
    AppleIcon,
    ArrowRight,
    Bug,
    Code,
    Palette,
    UserRound,
    Wrench,
    Zap,
} from "lucide-react";
import Image from "next/image";
import "../../globals.css";
import { GridCom } from "@/components/GridCom";
import Link from "next/link";
const features = [
    {
        logo: <Wrench size={40} />,
        title: "Built-in developers tools",
        discription:
            "Unlock your potential with our integrated developer tools. Debug, optimize, and enhance your code with features like real-time syntax checking, auto-completion, and version control. These tools streamline your workflow, allowing you to focus on innovation.",
    },
    {
        logo: <Code size={40} />,
        title: "The smartest editor",
        discription:
            "Experience coding with our intelligent editor, designed to understand and adapt to your coding style. Enjoy features like context-aware suggestions, error detection, and auto-completion to write code faster and with greater accuracy.",
    },
    {
        logo: <Zap size={40} />,
        title: "Fast Navigation",
        discription:
            "Navigate your projects effortlessly with our lightning-fast search and intuitive interface. Quickly find files, functions, or lines of code, ensuring you stay productive and focused on what matters most.",
    },
    {
        logo: <UserRound size={40} />,
        title: "Efficient teamwork",
        discription:
            "Collaborate seamlessly with your team using built-in version control and real-time code sharing. Our platform facilitates smooth teamwork, ensuring everyone stays on the same page and contributes effectively.",
    },
    {
        logo: <Palette size={40} />,
        title: "Fully customizable",
        discription:
            "Tailor the development environment to suit your preferences. Customize themes, shortcuts, and plugins to create a workspace that enhances your productivity and fits your unique workflow.",
    },
    {
        logo: <Bug size={40} />,
        title: "Debugging and testing",
        discription:
            "Identify and resolve issues swiftly with our powerful debugging and testing tools. Use breakpoints, step-through debugging, and integrated testing frameworks to ensure your code is robust and reliable.",
    },
];

const platform = [
    {
        icon: "/apple.svg",
        title: "macOS",
        size: 20,
    },
    {
        icon: "/linux.svg",
        title: "Linux",
        size: 18,
    },
    {
        icon: "/mobile.svg",
        title: "Mobile",
        size: 18,
    },
    {
        icon: "/windows.svg",
        title: "Windows",
        size: 20,
    },
];

export default function Home2() {
    return (
        <div className="flex flex-col text-center scroll-smooth">
            {/* //Hero section */}
            <section
                style={{ backgroundImage: "url(/dotted-bg.png)" }}
                className="pt-32 md:pt-20 bg-contain bg-top px-5 flex flex-col gap-3 overflow-hidden"
            >
                <Link target="_blank" href="https://www.github.com/gdhyani" className="bg-[#3a3a3a] my-2 flex gap-2 rounded-full w-max px-2 py-1 text-sm m-auto items-center">
                    <span className="bg-black text-white px-2 py-1 rounded-full">
                        New
                    </span>
                    CodeCloudAI v2.0 is now released
                    <ArrowRight size={20} />
                </Link>
                <h1 className="text-4xl md:text-7xl md:w-3/6 md:leading-tight md:mx-auto font-semibold md:font-medium leading-snug">
                    The next-gen code editor is here
                </h1>
                <h1 className="text-[#868686] md:text-[18px] md:w-2/6 md:mx-auto">
                    Unlock the Potential of Artificial Intelligence for Infinite
                    Possibilities and Intelligent Programming. Innovate, Refine,
                    and Execute with AI CODE
                </h1>
                <div className="flex flex-col md:flex-row items-center mt-8 md:mt-3 gap-5 justify-center w-full">
                    <Link href="/code" className="bg-white text-black border border-white hover:bg-black hover:text-white w-full md:w-max px-8 transition hover:-translate-y-1 ease-linear duration-200 rounded-xl text-center py-4 text-base ">
                        Get Started
                    </Link>
                    <Link href="#features" className="bg-black scroll-smooth border border-white hover:bg-white hover:text-black w-full md:w-max px-8 transition hover:-translate-y-1 ease-linear duration-200 text-white rounded-xl text-center py-4 text-base my-3">
                        Know More
                    </Link>
                </div>

                <Image
                    className="mt-16 z-20 mb-20 rounded-2xl shadow-2xl shadow-primary-foreground w-[95%] md:w-[60%] m-auto"
                    width={1000}
                    height={1000}
                    alt="main img"
                    src="/image1.jpeg"
                />
            </section>
            <section id="features" className="bg-white px-5 md:px-40 z-10 -mt-44 md:-mt-[400px] pt-48 md:pt-[420px] pb-20 text-black">
                <h1 className="text-4xl md:text-6xl md:w-2/3 md:m-auto font-medium">
                    Powerful features to help you develop faster
                </h1>
                <div className="flex mt-20 gap-5 flex-col md:flex-wrap md:flex-row md:w-11/12  md:mx-auto">
                    {features.map((e, index) => (
                        <div
                            key={index}
                            className="bg-[#f4f4f4]  rounded-2xl gap-2 text-left w-full md:w-[350px] px-5  py-10 flex flex-col"
                        >
                            <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] mb-5 w-min px-3 py-3 rounded-xl">
                                {e.logo}
                            </div>
                            <h1 className="text-xl font-medium">{e.title}</h1>
                            <h1 className="opacity-60 text-[15px] leading-normal tracking-wide">
                                {e.discription}
                            </h1>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col md:flex-row items-center mt-8 md:mt-12 gap-2 md:gap-5 justify-center w-full">
                    <Link href="/code" className="bg-black text-white border border-black hover:bg-white hover:text-black w-full md:w-max px-8 transition ease-linear hover:-translate-y-1 duration-200 rounded-xl text-center py-4 text-base ">
                        Get Started
                    </Link>
                    <button className="bg-[#f4f4f4] text-black border border-white hover:bg-black hover:text-white w-full md:w-max px-8 transition ease-linear hover:-translate-y-1 duration-200  rounded-xl text-center py-4 text-base my-3">
                        Browse all features
                    </button>
                </div>
            </section>
            {/* <section className="px-4 flex flex-col py-20 bg-black text-white">
                
                <Image
                    src="/globe.gif"
                    className="scale-[2.5] overflow-hidden mt-28 mb-20 -z-10 w-screen"
                    width={100}
                    height={100}
                    alt="globe"
                />
                <div className="flex flex-col gap-7 text-left mt-10">
                    <div className="bg-[#1c1c1c] px-5 py-10 rounded-2xl">
                        <h1 className="text-lg">
                            Priotize your idea and leave the coding to AI Code
                        </h1>
                    </div>
                    <div className="bg-[#1c1c1c] px-5 py-10 rounded-2xl">
                        <h1 className="text-lg">
                            Unlock the power of code with Instant suggestions
                        </h1>
                    </div>
                    <div className="bg-[#1c1c1c] z-10 px-5 py-10 rounded-2xl">
                        <h1 className="text-lg">
                            Experience the Code Generator that delivers on
                            Seconds
                        </h1>
                    </div>
                    <button className="bg-[#f4f4f4] mt-10 border-white border w-full hover:bg-black hover:text-white transition ease-linear duration-200 text-black rounded-xl text-center py-4 text-base ">
                        Browse all features
                    </button>
                </div>
                </section> */}
            <section className="bg-black flex flex-col gap-5 overflow-hidden text-white z-0 px-5 py-24">
                <h1 className="text-4xl md:text-6xl md:w-1/2 md:m-auto font-medium md:mt-5">
                    Save time with our AI Agent!
                </h1>
                <h1 className="text-[#868686] md:text-[18px] md:w-3/6 mt-3 md:mt-5 md:mx-auto leading-normal">
                    Increase your productivity upto 3x times with CodeCloud{"'"}
                    s trained Aritificial intelligence agent. From finding bugs
                    to fixing and code completion, everything is taken care by
                    CodeCloud.
                </h1>
                <div className="mt-10">
                    <GridCom />
                </div>
                <button className="bg-white hover:-translate-y-1 md:px-10 text-black border border-white hover:bg-black hover:text-white w-full md:w-max md:mx-auto mt-10  px-8 transition ease-linear duration-200 rounded-xl text-center py-3 text-base ">
                    Browse all features
                </button>
            </section>

            <section className="bg-[#f8f8f8] md:relative md:flex-row flex  items-center flex-col gap-3 py-20 px-5 md:px-0 text-black">
                <Image
                    className="md:block hidden z-10 left-0 top-20 scale-75 md:scale-100"
                    src="/languages2.svg"
                    width={400}
                    height={400}
                    alt="coding languages"
                />
                <div className="flex flex-col gap-3 ">
                    <h1 className="text-4xl z-20 md:text-6xl md:leading-tight  md:mx-auto font-semibold">
                        Supporting more than 500+ languages
                    </h1>
                    <h1 className="text-[#868686] bg-[#f8f8f8] md:z-20 md:text-[18px] mt-3  md:mx-auto">
                        With support of almost all languages, our Artificial
                        Agent can help you code with any language or stack. Just
                        create file and start your awesome journey with us.
                    </h1>
                    <button className="bg-black md:z-20 border border-black hover:-translate-y-1 md:w-max md:px-10 md:mx-auto hover:bg-white hover:text-black w-full transition ease-linear duration-200 text-white rounded-xl text-center py-4 text-base my-3">
                        Browse Intergration
                    </button>
                    <Image
                        className="block md:hidden"
                        src="/languages3.png"
                        width={1000}
                        height={1000}
                        alt="coding languages"
                    />
                </div>

                <Image
                    className="md:block hidden z-10  right-0 top-20"
                    src="/languages1.svg"
                    width={400}
                    height={400}
                    alt="coding languages"
                />
            </section>
            <section className="bg-black px-5 text-left md:items-center flex flex-col md:flex-row md:px-20 gap-4 text-white py-20">
                <div className="flex flex-col gap-4 md:mt-10">
                    <h1 className="text-4xl md:text-6xl font-semibold">
                        The code editor of the future.
                    </h1>
                    <h1 className="text-[#868686] md:text-[18px] md:w-5/6 ">
                        Coding possible on all the platforms, you just need a
                        browser to start making your dream application.
                    </h1>
                </div>

                <div className="md:w-1/2 md:mx-auto">
                    <h1 className="font-semibold mt-10 mb-5 ">
                        Start your journey on:
                    </h1>
                    <div className="flex gap-5 mt-4 flex-wrap">
                        {platform.map((e, index) => (
                            <div
                                className="flex bg-[#1c1c1c] hover:-translate-y-1 transition duration-150 hover:bg-[#4e4e4f] rounded-2xl gap-4 h-20 justify-center  w-5/12 flex-grow flex-row items-center"
                                key={index}
                            >
                                <Image
                                    src={e.icon}
                                    width={e.size}
                                    height={e.size}
                                    alt={e.title}
                                />
                                <h1 className="font-semibold">{e.title}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
