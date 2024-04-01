"use client";
import {
    Folders,
    FilePlus,
    FolderPlus,
    RotateCcw,
    GitCompareArrows,
    BotMessageSquare,
    MessageCircleCode,
    Settings,
} from "lucide-react";

import { useState } from "react";
import Sidebar_Exp from "./Sidebar_Exp";

export default function Sidebar() {
    const [open, setopen] = useState("");
    return (
        <div className="flex flex-row h-full">
            <div className="px-5 border w-min h-full flex gap-5 flex-col py-4">
                <Folders
                    className="cursor-pointer"
                    size={30}
                    absoluteStrokeWidth
                    name="explorer"
                    onClick={(evt) => {
                        setopen(evt.target.getAttribute("name"));
                    }}
                />
                <GitCompareArrows
                    className="cursor-pointer"
                    size={30}
                    absoluteStrokeWidth
                    onClick={(evt) => {
                        setopen(evt.target.getAttribute("name"));
                    }}
                />
                <BotMessageSquare
                    className="cursor-pointer"
                    size={30}
                    onClick={(evt) => {
                        setopen(evt.target.getAttribute("name"));
                    }}
                    absoluteStrokeWidth
                />
                <MessageCircleCode
                    className="cursor-pointer"
                    size={30}
                    onClick={(evt) => {
                        setopen(evt.target.getAttribute("name"));
                    }}
                    absoluteStrokeWidth
                />
                <Settings className="cursor-pointer mt-auto" size={30} />
            </div>
            <div className="w-full text-sm h-full flex flex-col">
                <Sidebar_Exp />
            </div>
        </div>
    );
}
