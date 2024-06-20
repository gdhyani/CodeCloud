import {
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
            <section className="bg-white px-4  -mt-32 pt-56 pb-20 text-black">
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
            <section className="bg-black text-white px-4 py-20">
                    <h1 className="text-3xl font-medium">Save time with our AI Agent!</h1>
                    <h1 className="text-sm"></h1>
            </section>
        </div>
    );
}
