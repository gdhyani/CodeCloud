"use client";
import Sidebar from "@/components/Sidebar";
import "../../globals.css";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import NavBar from "@/components/NavBar(c)";
import Sidebar_Exp from "@/components/Sidebar_Exp";
import { useState } from "react";

export default function CodeLayout({ children }) {
    const [sidebar_Exp, setSidebar] = useState("");
    return (
        <html>
            <body className="dark">
                <div className="dark flex flex-col h-screen transition-all">
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
                                defaultSize={30}
                                maxSize={30}
                                minSize={0}
                                className="border-r border  "
                            >
                                <Sidebar_Exp open_name={sidebar_Exp} />
                            </ResizablePanel>
                        ) : (
                            <></>
                        )}
                        <ResizableHandle />
                        <ResizablePanel defaultSize={85}>
                            {/* Main Center Code Editor */}
                            <div className="h-full">{children}</div>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </div>
            </body>
        </html>
    );
}
