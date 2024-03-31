import {
    Folders,
    GitCompareArrows,
    BotMessageSquare,
    MessageCircleCode,
    Settings,
} from "lucide-react";

export default function Sidebar() {
    return (
        <div className="flex flex-row h-full">
            <div className="px-5 border w-min h-full flex gap-5 flex-col py-4">
                <Folders
                    className="cursor-pointer"
                    size={30}
                    absoluteStrokeWidth
                />
                <GitCompareArrows
                    className="cursor-pointer"
                    size={30}
                    absoluteStrokeWidth
                />
                <BotMessageSquare
                    className="cursor-pointer"
                    size={30}
                    absoluteStrokeWidth
                />
                <MessageCircleCode
                    className="cursor-pointer"
                    size={30}
                    absoluteStrokeWidth
                />
                <Settings className="cursor-pointer mt-auto" size={30} />
            </div>
            <div className="w-full h-full flex flex-col px-2 py-1">
                <h1 className="text-sm font-semibold text-muted-foreground border-b">
                    Explorer
                </h1>
            </div>
        </div>
    );
}
