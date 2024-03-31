import Sidebar from "@/components/Sidebar";
import "./globals.css";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import NavBar from "@/components/NavBar";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="dark flex flex-col h-screen">
                <NavBar />
                <ResizablePanelGroup
                    direction="horizontal"
                    className=" w-full rounded-lg border-t"
                >
                    <ResizablePanel defaultSize={4} minSize={4} maxSize={25}>
                        <Sidebar />
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={75}>
                        <div className="h-full">{children}</div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={10}>
                        <div className="flex h-full items-center justify-center p-6">
                            <h1>Logs</h1>
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </body>
        </html>
    );
}
