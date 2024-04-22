"use client";
import Sidebar from "@/components/Sidebar";
import "./globals.css";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import NavBar from "@/components/NavBar";
import Sidebar_Exp from "@/components/Sidebar_Exp";
import { useState } from "react";

// export const metadata = {
//     title: "Create Next App",
//     description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
    const [sidebar_Exp, setSidebar] = useState("");
    return (
        <html lang="en">
            <body className="dark flex flex-col h-screen transition-all">
                <NavBar />
                <ResizablePanelGroup
                    direction="horizontal"
                    className=" w-full rounded-lg border-t"
                >
                    {/* Fixed Sidebar */}
                    <Sidebar onchange={setSidebar} />
                    {/* Sidebar Expanded  */}
                    {sidebar_Exp ? (
                        <ResizablePanel
                            defaultSize={20}
                            maxSize={25}
                            minSize={0}
                            className="border-r border  "
                        >
                            <Sidebar_Exp open_name={sidebar_Exp} />
                        </ResizablePanel>
                    ) : (
                        <></>
                    )}
                    {/* <ResizableHandle /> */}
                    <ResizablePanel defaultSize={85}>
                        {/* Main Center Code Editor */}
                        <div className="h-full">{children}</div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </body>
        </html>
    );
}
