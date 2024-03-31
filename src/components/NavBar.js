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
import { SquareDashedBottomCode, Earth } from "lucide-react";

// const menu = [
//     {
//         top: "File",
//         elements: [
//             {
//                 name: "New Tab",
//                 to: "",
//                 subelement: false,
//                 display: true,
//             },
//             {
//                 name: "New Window",
//                 to: "",
//                 subelement: false,
//                 display: true,
//             },
//             {
//                 name: "New Incognito Window",
//                 to: "",
//                 display: true,
//                 subelement: false,
//             },
//             {
//                 name: "share",
//                 to: "",
//                 display: true,
//                 subelement: true,
//                 subelements:[

//                 ],
//             },
//         ],
//     },
//     {},
//     {},
// ];

export default function NavBar() {
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
            <div className="">
                <h1>Login</h1>
            </div>
        </div>
    );
}
