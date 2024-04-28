import { LucideArrowRight } from "lucide-react";

export default function Page() {
    return (
        <div className="h-screen">
            <div className=" flex flex-col gap-3 text-center h-full overflow-y-auto items-center justify-center">
                <h1 className="text-4xl">
                    Welcome to <span className="font-bold">CodeCloud🔥</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                    Lets start your new Project.
                </p>

                <button className="mt-4 border gap-2 px-2 py-1 rounded-xl items-center flex flex-row">
                    Lets Build a <span className="font-black font-mono">New Project</span>
                    <LucideArrowRight size={16}/>
                </button>
            </div>
        </div>
    );
}
