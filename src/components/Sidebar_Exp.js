"use client";
import { FilePlus, FolderPlus, RotateCcw, FileCode } from "lucide-react";
import { Router, useRouter } from "next/navigation";
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

// on pressing add file handlefile function trigger which open input using form state by making it true
// the form value will store in filename. When pressed enter onSubmit will trigger and make form
// hidden by changing value of form false, send file name data to directories and setting file name again to
// blank space so that it can start blank on next file creation.

export default function Sidebar_Exp(props) {
    // console.log(props);

    //check which tab is open
    const [openTab, setopenTab] = useState(props.open_name);
    useEffect(() => {
        setopenTab(props.open_name);
    }, [props.open_name]);

    //temp directory
    const [directory, setDirectory] = useState(["File1", "File2"]);

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
        alert("Add File");
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
                        <h1 className="">Project Name</h1>
                        <div className="group-hover:flex cursor-pointer hidden gap-2 flex-row">
                            <FilePlus onClick={handleAddFile} size={18} />
                            <FolderPlus onClick={handleAddFolder} size={18} />
                            <RotateCcw onClick={handleRefresh} size={18} />
                        </div>
                    </div>
                    {/* File Container */}
                    <div className="px-1 py-2 flex flex-col">
                        {form ? (
                            <form
                                className="w-full"
                                onSubmit={(evt) => {
                                    evt.preventDefault();
                                    setform(false);
                                    setDirectory([...directory, filename]);
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
                        {directory.map((ele) => (
                            <button
                                className="flex flex-row gap-2 items-center py-1"
                                key={directory.indexOf(ele)}
                                name={ele}
                                onClick={(evt) => {
                                    router.push(`/page/${ele}`);
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
            <div className="px-1">
                <div className="flex flex-row border-b justify-between">
                    <h1 className=" px-1 font-semibold text-muted-foreground ">
                        Ai Model
                    </h1>
                </div>
                {model.set ? (
                    <h1>Model Selected</h1>
                ) : (
                    <div className="h-screen px-2 flex-col gap-3 -mt-10 items-center justify-center flex">
                        <h1 className="text-xl font-bold mb-4">
                            Select Your AI Model 
                        </h1>
                        <Select
                            onValueChange={(value) => {
                                setModel({ ...model, Ai_name: value });
                            }}
                        >
                            <SelectTrigger className="w-min">
                                <SelectValue placeholder="Select an AI" />
                            </SelectTrigger>
                            <SelectContent className="dark:bg-black">
                                <SelectGroup>
                                    <SelectLabel>AI Model</SelectLabel>
                                    <SelectItem value="chatgpt">
                                        ChatGPT
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
                            {model.Ai_name ? (
                                <span className="text-white text-xs px-1 border rounded border-white">
                                    {model.Ai_name.toUpperCase()}
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
                            className="bg-white text-md text-black rounded-md px-4 py-1 mt-3"
                        >
                            Lets Go!
                        </button>
                    </div>
                )}
            </div>
        );
    } else {
        return (
            <div>
                <h1>{openTab}</h1>
            </div>
        );
    }
}
