"use client";
import { FilePlus, FolderPlus, RotateCcw, FileCode } from "lucide-react";
import { Router, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

// on pressing add file handlefile function trigger which open input using form state by making it true
// the form value will store in filename. When pressed enter onSubmit will trigger and make form
// hidden by changing value of form false, send file name data to directories and setting file name again to
// blank space so that it can start blank on next file creation.

export default function Sidebar_Exp(props) {
    console.log(props);
    const [openTab, setopenTab] = useState(props.open_name);
    useEffect(() => {
        setopenTab(props.open_name);
    }, [props.open_name]);
    const router = useRouter();
    const [directory, setDirectory] = useState(["File1", "File2"]);
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
}
