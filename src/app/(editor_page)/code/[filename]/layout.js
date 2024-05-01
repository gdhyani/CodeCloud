"use client";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function FileLayout({children}) {
    function handleTabChange() {
        alert("change");
    }
    return (
        <main className="h-full">
            <ResizablePanelGroup
                direction="vertical"
                className=" rounded-lg border"
            >
                <ResizablePanel className="" defaultSize={75} maxSize={93}>
                    {children}
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel
                    collapsible
                    defaultSize={25}
                    minSize={5.2}
                    maxSize={60}
                >
                    <div className="flex px-0">
                        <Tabs defaultValue="none" className="w-[400px]">
                            <TabsList className="bg-transparent font-extralight">
                                <TabsTrigger className="font-semibold text-muted-foreground" value="problem">
                                    PROBLEMS
                                </TabsTrigger>
                                <TabsTrigger className="font-semibold text-muted-foreground" value="output">OUTPUT</TabsTrigger>
                                <TabsTrigger className="font-semibold text-muted-foreground" value="terminal">TERMINAL</TabsTrigger>
                                <TabsTrigger className="font-semibold text-muted-foreground" value="console">DEBUG CONSOLE</TabsTrigger>
                            </TabsList>
                            <hr className="w-screen -ml-10" />
                            <TabsContent value="console">
                                Console.log your data.
                            </TabsContent>
                            <TabsContent value="github">
                                GitHub Logs Here.
                            </TabsContent>
                        </Tabs>
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </main>
    );
}