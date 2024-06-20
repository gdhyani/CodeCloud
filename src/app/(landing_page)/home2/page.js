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

const features = [
    {
        logo: <Wrench size={40} />,
        title: "Built-in developers tools",
        discription:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo odio facere nobis sapiente sit ad mollitia assumenda culpa nam veniam impedit nisi officia fuga, laborum, saepe aspernatur a itaque numquam!",
    },
    {
        logo: <Code size={40} />,
        title: "The smartest editor",
        discription:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo odio facere nobis sapiente sit ad mollitia assumenda culpa nam veniam impedit nisi officia fuga, laborum, saepe aspernatur a itaque numquam!",
    },
    {
        logo: <Zap size={40} />,
        title: "Fast Navigation",
        discription:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo odio facere nobis sapiente sit ad mollitia assumenda culpa nam veniam impedit nisi officia fuga, laborum, saepe aspernatur a itaque numquam!",
    },
    {
        logo: <UserRound size={40} />,
        title: "Efficient teamwork",
        discription:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo odio facere nobis sapiente sit ad mollitia assumenda culpa nam veniam impedit nisi officia fuga, laborum, saepe aspernatur a itaque numquam!",
    },
    {
        logo: <Palette size={40} />,
        title: "Fully customizable",
        discription:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo odio facere nobis sapiente sit ad mollitia assumenda culpa nam veniam impedit nisi officia fuga, laborum, saepe aspernatur a itaque numquam!",
    },
    {
        logo: <Bug size={40} />,
        title: "Debugging and testing",
        discription:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo odio facere nobis sapiente sit ad mollitia assumenda culpa nam veniam impedit nisi officia fuga, laborum, saepe aspernatur a itaque numquam!",
    },
];

const platform = [
    {
        icon: "/apple.svg",
        title: "Apple",
        size:20
    },
    {
        icon: "/linux.svg",
        title: "Linux",
        size:18
    },
    {
        icon: "/mobile.svg",
        title: "Mobile",
        size:18
    },
    {
        icon: "/windows.svg",
        title: "Windows",
        size:20
    },
];

export default function Home2() {
    return (
        <div className="flex flex-col text-center">
            {/* //Hero section */}
            <section className="pt-20 px-2 flex flex-col gap-3 ">
                <h1 className="bg-[#3a3a3a] my-2 flex gap-2 rounded-full w-max px-2 py-1 text-sm m-auto items-center">
                    <span className="bg-white text-black px-2 py-1 rounded-full">
                        New
                    </span>
                    CodeCloudAI v2.0 is now released
                    <ArrowRight size={20} />
                </h1>
                <h1 className="text-4xl font-semibold leading-snug">
                    The next-gen code editor is here
                </h1>
                <h1 className="text-[#868686]">
                    Unlock the Potential of Artificial Intelligence for Infinite
                    Possibilities and Intelligent Programming. Innovate, Refine,
                    and Execute with AI CODE
                </h1>
                <button className="bg-white w-full text-black rounded-lg text-center py-4 text-lg my-3">
                    Get Started
                </button>
                <Image
                    className="mt-16 z-10 rounded-2xl shadow-2xl shadow-primary-foreground w-[95%] m-auto"
                    width={1000}
                    height={1000}
                    alt="main img"
                    src="/image1.jpeg"
                />
            </section>
            <section className="bg-white px-4  -mt-24 pt-48 pb-20 text-black">
                <h1 className="text-4xl font-medium">
                    Powerful features to help you develop faster
                </h1>
                <div className="flex mt-20 gap-5 flex-col">
                    {features.map((e, index) => (
                        <div
                            key={index}
                            className="bg-[#f4f4f4] rounded-2xl gap-2 text-left w-full px-5 py-10 flex flex-col"
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
                <button className="bg-black border border-black hover:bg-white hover:text-black w-full transition ease-linear duration-200 text-white rounded-xl text-center py-4 text-base my-3">
                    Get Started
                </button>
                <button className="bg-[#f4f4f4] w-full hover:bg-black hover:text-white transition ease-linear duration-200 text-black rounded-xl text-center py-4 text-base ">
                    Browse all features
                </button>
            </section>
            <section className="bg-black flex flex-col gap-3 overflow-hidden text-white px-4 py-28">
                <h1 className="text-4xl font-medium">
                    Save time with our AI Agent!
                </h1>
                <h1 className="text-[#868686] leading-normal">
                    Increase your productivity upto 3x times with CodeCloud's
                    trained Aritificial intelligence agent. From finding bugs to
                    fixing and code completion, everything is taken care by
                    CodeCloud.
                </h1>
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
                </div>
                <Image
                    src="/globe.gif"
                    className="scale-[2.5] overflow-hidden mt-32 mb-10 z-0 w-screen"
                    width={100}
                    height={100}
                    alt="globe"
                />
            </section>
            <section className="bg-[#f8f8f8] flex flex-col gap-3 py-20 px-5 text-black">
                <h1 className="text-4xl font-semibold">
                    Supporting more than 500+ languages
                </h1>
                <h1 className="text-[#868686]">
                    With support of more than 500+ languages, our Artificial
                    Agent can help you code with any language or stack. Just
                    create file and start your awesome journey with us.
                </h1>
                <button className="bg-black border border-black hover:bg-white hover:text-black w-full transition ease-linear duration-200 text-white rounded-xl text-center py-4 text-base my-3">
                    Browse Intergration
                </button>
                <Image
                    src="/languages3.png"
                    width={1000}
                    height={1000}
                    alt="coding languages"
                />
            </section>
            <section className="bg-black px-4 text-left flex flex-col gap-4 text-white py-20">
                <h1 className="text-4xl font-semibold">The code editor of the future</h1>
                <h1 className="text-[#868686]">
                    Coding possible on all the platforms, you just need a
                    browser to start making your dream application
                </h1>
                <h1 className="font-semibold mt-10">Start your journey on:</h1>
                <div className="flex gap-5 flex-wrap">
                    {platform.map((e, index) => (
                        <div
                            className="flex bg-[#1c1c1c] hover:-translate-y-1 transition duration-150 hover:bg-[#4e4e4f] rounded-2xl gap-4 h-16 justify-center  px-5 flex-grow flex-row items-center"
                            key={index}
                        >
                            <Image
                                src={e.icon}
                                width={e.size}
                                height={e.size}
                                alt={e.title}
                            />
                            <h1 className="text-sm font-semibold">{e.title}</h1>
                        </div>
                    ))}
                    
                </div>
            </section>
        </div>
    );
}
