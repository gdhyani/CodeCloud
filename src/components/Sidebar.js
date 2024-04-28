"use client";
import {
    Folders,
    GitCompareArrows,
    BotMessageSquare,
    MessageCircleCode,
    Settings,
} from "lucide-react";

import { useEffect, useState } from "react";

export default function Sidebar({ onchange }) {
    const [open, setopen] = useState("");
    function handleOpenTab(name) {
        // on click handle open and close of perticular tab
        setopen(prevOpen=>prevOpen==name?"":name)
    }
    useEffect(() => {
        onchange(open);
    }, [open]);

    return (
        <div className="flex flex-row h-full">
            <div className="px-5 border w-min h-full flex gap-5 flex-col py-4">
                <button
                    onClick={() => {
                        handleOpenTab("explorer");
                    }}
                >
                    <Folders
                        className="cursor-pointer"
                        size={30}
                        absoluteStrokeWidth
                    />
                </button>
                <button
                    onClick={() => {
                        handleOpenTab("github");
                    }}
                >
                    <GitCompareArrows
                        className="cursor-pointer"
                        size={30}
                        absoluteStrokeWidth
                    />
                </button>

                <button
                    onClick={() => {
                        handleOpenTab("ai");
                    }}
                >
                    <BotMessageSquare
                        className="cursor-pointer"
                        size={30}
                        absoluteStrokeWidth
                    />
                </button>

                <button
                    onClick={(evt) => {
                        handleOpenTab("message");
                    }}
                    name="message"
                >
                    <MessageCircleCode
                        className="cursor-pointer"
                        size={30}
                        name="message"
                        absoluteStrokeWidth
                    />
                </button>
                <button
                    onClick={() => {
                        alert("Settings Not Enabled as of Now");
                    }}
                    className="mt-auto"
                >
                    <Settings className="" size={30} />
                </button>
            </div>
            {/* <div className="w-full text-sm h-full flex flex-col">
                <Sidebar_Exp open_name={open} />
            </div> */}
        </div>
    );
}
