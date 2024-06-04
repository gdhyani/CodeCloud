"use client";
import { FilePlus, FolderPlus, RotateCcw, FileCode } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useSettingStore } from "@/lib/store/settingStore";
import AiChat from "./AiChat";

// on pressing add file handlefile function trigger which open input using form state by making it true
// the form value will store in filename. When pressed enter onSubmit will trigger and make form
// hidden by changing value of form false, send file name data to directories and setting file name again to
// blank space so that it can start blank on next file creation.

export default function Sidebar_Exp(props) {
    const settingStore = useSettingStore();

    //check which tab is open
    const [openTab, setopenTab] = useState(props.open_name);
    useEffect(() => {
        setopenTab(props.open_name);
    }, [props.open_name]);
    const router = useRouter();

    // Explorer Functions and States
    // display form after pressing create file and folder button.
    const [form, setform] = useState(false);
    // file name for from to store file name value.
    const [filename, setFilename] = useState("");
    function handleAddFile() {
        // create files
        setform(true);
    }

    function handleAddFolder() {
        // create folder
        alert("Add Folder");
    }

    function handleRefresh() {
        // refresh the folder structure
    }
    //end
    //Ai Function and States
    const [model, setModel] = useState({
        Ai_name: "",
        set: false,
    });

    //Conditional Statement based on which render perticular component on sidebar expanded.
    if (openTab == "explorer") {
        return (
            <div className="">
                <div className="flex flex-row border-b justify-between">
                    <h1 className=" px-1 font-semibold text-muted-foreground ">
                        Explorer
                    </h1>
                </div>
                <div className="group h-screen">
                    {/* File Heading */}
                    <div className="px-1 py-1 pr-2 flex flex-row justify-between border-b">
                        <h1 className="">{settingStore.projectName}</h1>
                        <div className="group-hover:flex cursor-pointer hidden gap-2 flex-row">
                            <FilePlus onClick={handleAddFile} size={18} />
                            <FolderPlus onClick={handleAddFolder} size={18} />
                            <RotateCcw onClick={handleRefresh} size={18} />
                        </div>
                    </div>
                    {/* File Container */}
                    <div className="px-2 py-2 flex flex-col">
                        {form ? (
                            <form
                                className="w-full"
                                onSubmit={(evt) => {
                                    evt.preventDefault();
                                    setform(false);
                                    settingStore.changeDirectories(filename);
                                    setFilename("");
                                }}
                            >
                                <input
                                    autoFocus
                                    className="bg-transparent py-1 px-1 border rounded w-full text-white"
                                    placeholder="File Name"
                                    type="text"
                                    onChange={(evt) => {
                                        setFilename(evt.target.value);
                                    }}
                                    onSubmit={() => {
                                        console.log(filename);
                                    }}
                                    // name="filename"
                                    value={filename}
                                />
                                <input className="hidden" type="submit" />
                            </form>
                        ) : (
                            ""
                        )}
                        {settingStore.directories.map((ele) => (
                            <button
                                className="flex flex-row gap-2 items-center py-1"
                                key={settingStore.directories.indexOf(ele)}
                                name={ele}
                                onClick={(evt) => {
                                    router.push(`/code/${ele}`);
                                }}
                            >
                                <FileCode onClick={handleAddFile} size={18} />
                                <h1 className="">{ele}</h1>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
    if (openTab == "ai") {
        return (
            <div className="px-1 h-full">
                <div className="flex flex-row border-b justify-between">
                    <h1 className=" px-1 font-semibold text-muted-foreground ">
                        Ai Model
                    </h1>
                </div>
                {model.set ? (
                    <AiChat/>
                ) : (
                    <div className="h-screen px-2 flex-col gap-3 -mt-10 items-center justify-center flex">
                        <h1 className="text-xl font-bold mb-4">
                            Select Your AI Model
                        </h1>
                        <Select
                            onValueChange={(value) => {
                                settingStore.changeAiModel(value)
                            }}
                        >
                            <SelectTrigger required className="w-min">
                                <SelectValue placeholder="Select an AI" />
                            </SelectTrigger>
                            <SelectContent required className="dark:bg-black">
                                <SelectGroup required>
                                    <SelectLabel>AI Model</SelectLabel>
                                    <SelectItem value="cloudeai">
                                        Cloude Ai
                                    </SelectItem>
                                    <SelectItem value="openai">
                                        Open Ai Codex
                                    </SelectItem>
                                    <SelectItem value="codey">
                                        Google Codey
                                    </SelectItem>
                                    <SelectItem value="intellicode">
                                        Intellicode
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <h1 className="text-muted-foreground  text-center text-sm">
                            You need to enter your own api key inorder to use{" "}
                            {settingStore.aiModel ? (
                                <span className="text-white text-xs px-1 border rounded border-white">
                                    {settingStore.aiModel.toUpperCase()}
                                </span>
                            ) : (
                                ""
                            )}{" "}
                            AI funcitonalities.
                        </h1>
                        <button
                            onClick={() => {
                                setModel({ ...model, set: 1 });
                            }}
                            className="bg-white text-md text-black disabled:opacity-20 rounded-md px-4 py-1 mt-3"
                            disabled={settingStore.aiModel ? false : true}
                        >
                            Lets Go!
                        </button>
                    </div>
                )}
            </div>
        );
    } else {
        return (
            <div className="flex px-2 text-center flex-col gap-2 justify-center items-center h-screen">
                <h1 className="text-lg">
                    {openTab.toUpperCase()} Comming Soon!
                </h1>
                <h1 className="text-muted-foreground">
                    Stay tuned for the upcoming updates.
                </h1>
            </div>
        );
    }
}
