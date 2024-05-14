import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { useCodeStore } from "@/lib/store/codeStore";
import {
    SquareDashedBottomCode,
    Earth,
    CirclePlay,
    AlarmClockPlus,
    Notebook,
} from "lucide-react";

export default function NavBar() {
    const codeStore = useCodeStore();
    const handleRun = async () => {
        //run code from codefile
        //Creating Request to Route.js using Fetch
        const url = "/api/compile";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "content-type": "application/json",
            },
            body: JSON.stringify({
                language: codeStore.language,
                files: [
                    {
                        name: codeStore.filename,
                        content: codeStore.code,
                    },
                ],
            }),
        };
        try {
            const res = await fetch(url, options);
            const data = await res.json();
            console.log(data);
            data.stdout ? codeStore.changeOutput(data.stdout) : "";
            data.stderr ? codeStore.changeError(data.stderr) : "";
            codeStore.changeStatus(data.status);
            codeStore.changeExecutionTime(data.executionTime);
            console.log(codeStore);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="flex items-center justify-between gap-5 px-4 py-2 flex-row">
            {/* menu */}
            <div className="flex items-center flex-row">
                <SquareDashedBottomCode size={30} />
                <Menubar className="dark:bg-transparent border-0">
                    <MenubarMenu>
                        <MenubarTrigger>File</MenubarTrigger>
                        <MenubarContent className="dark:bg-black">
                            <MenubarItem>
                                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem>
                                New Window <MenubarShortcut>⌘N</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem disabled>
                                New Incognito Window
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarSub>
                                <MenubarSubTrigger>Share</MenubarSubTrigger>
                                <MenubarSubContent className="dark:bg-black">
                                    <MenubarItem>Email link</MenubarItem>
                                    <MenubarItem>Messages</MenubarItem>
                                    <MenubarItem>Notes</MenubarItem>
                                </MenubarSubContent>
                            </MenubarSub>
                            <MenubarSeparator />
                            <MenubarItem>
                                Print... <MenubarShortcut>⌘P</MenubarShortcut>
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Edit</MenubarTrigger>
                        <MenubarContent className="dark:bg-black">
                            <MenubarItem>
                                Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem>
                                Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarSub>
                                <MenubarSubTrigger>Find</MenubarSubTrigger>
                                <MenubarSubContent className="dark:bg-black">
                                    <MenubarItem>Search the web</MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>Find...</MenubarItem>
                                    <MenubarItem>Find Next</MenubarItem>
                                    <MenubarItem>Find Previous</MenubarItem>
                                </MenubarSubContent>
                            </MenubarSub>
                            <MenubarSeparator />
                            <MenubarItem>Cut</MenubarItem>
                            <MenubarItem>Copy</MenubarItem>
                            <MenubarItem>Paste</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>View</MenubarTrigger>
                        <MenubarContent className="dark:bg-black">
                            <MenubarCheckboxItem>
                                Always Show Bookmarks Bar
                            </MenubarCheckboxItem>
                            <MenubarCheckboxItem checked>
                                Always Show Full URLs
                            </MenubarCheckboxItem>
                            <MenubarSeparator />
                            <MenubarItem inset>
                                Reload <MenubarShortcut>⌘R</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem disabled inset>
                                Force Reload{" "}
                                <MenubarShortcut>⇧⌘R</MenubarShortcut>
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem inset>Hide Sidebar</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Profiles</MenubarTrigger>
                        <MenubarContent className="dark:bg-black">
                            <MenubarRadioGroup value="benoit">
                                <MenubarRadioItem value="andy">
                                    Andy
                                </MenubarRadioItem>
                                <MenubarRadioItem value="benoit">
                                    Benoit
                                </MenubarRadioItem>
                                <MenubarRadioItem value="Luis">
                                    Luis
                                </MenubarRadioItem>
                            </MenubarRadioGroup>
                            <MenubarSeparator />
                            <MenubarItem inset>Edit...</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem inset>Add Profile...</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
            {/* center location */}
            <div className="flex items-center  text-sm justify-self-center gap-1 flex-row">
                <h1 className="font-medium ">Anonymous /</h1>
                <h1 className="font-normal">Test123</h1>
                <Earth size={14} />
            </div>
            {/* right buttons */}
            <div className="flex items-center gap-3">
                <button className="border">
                    <Notebook strokeWidth={2} size={20} color="white" />
                </button>
                <button className="border">
                    <AlarmClockPlus color="white" strokeWidth={2} />
                </button>
                <button
                    onClick={handleRun}
                    className="bg-[#d2a8f2] text-black font-semibold flex flex-row items-center gap-2 border-2 text-sm py-1 px-3 rounded-md"
                >
                    Run Code
                    <CirclePlay size={18} color="black" />
                </button>
                <button className="bg-[#cdf041] text-black font-semibold text-sm px-3 py-1 rounded-md">
                    Login
                </button>
            </div>
        </div>
    );
}
