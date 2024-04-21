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

export default function Sidebar_Ico() {
    const [open, setopen] = useState("");
    function handleOpenTab(evt) {
        // on click handle open and close of perticular tab
        if (evt.target.getAttribute("name") == open) {
            setopen("");
        } else {
            setopen(evt.target.getAttribute("name"));
        }
    }
    return (
        <div className="flex flex-row h-full">
            <div className="px-5 border w-min h-full flex gap-5 flex-col py-4">
                <Folders
                    className="cursor-pointer"
                    size={30}
                    absoluteStrokeWidth
                    name="explorer"
                    onClick={(evt) => {
                        handleOpenTab(evt);
                    }}
                />
                <GitCompareArrows
                    className="cursor-pointer"
                    size={30}
                    name="github"
                    absoluteStrokeWidth
                    onClick={(evt) => {
                        handleOpenTab(evt);
                    }}
                />
                <BotMessageSquare
                    className="cursor-pointer"
                    size={30}
                    name="message"
                    onClick={(evt) => {
                        handleOpenTab(evt);
                    }}
                    absoluteStrokeWidth
                />
                <MessageCircleCode
                    className="cursor-pointer"
                    size={30}
                    name="ai"
                    onClick={(evt) => {
                        handleOpenTab(evt);
                    }}
                    absoluteStrokeWidth
                />
                <Settings className="cursor-pointer mt-auto" size={30} />
            </div>
            {/* <div className="w-full text-sm h-full flex flex-col">
                <Sidebar_Exp open_name={open} />
            </div> */}
        </div>
    );
}
