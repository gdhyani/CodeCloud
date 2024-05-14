"use client";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCodeStore } from "@/lib/store/codeStore";

export default function FileLayout({ children }) {
    const date = new Date();
    const codeStore = useCodeStore();
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
                    maxSize={37}
                >
                    <div className="flex px-0">
                        <Tabs defaultValue="output">
                            <TabsList className="bg-transparent font-extralight">
                                <TabsTrigger
                                    className="font-semibold  text-muted-foreground"
                                    value="problem"
                                >
                                    PROBLEMS
                                    {codeStore.error.length > 0 ? (
                                        <h1 className="ml-1 bg-red-600 rounded-full h-5 p-2 text-center items-center text-xs flex">
                                            {codeStore.error.length}
                                        </h1>
                                    ) : (
                                        ""
                                    )}
                                </TabsTrigger>
                                <TabsTrigger
                                    className="font-semibold text-muted-foreground"
                                    value="output"
                                >
                                    OUTPUT
                                </TabsTrigger>
                                <TabsTrigger
                                    className="font-semibold text-muted-foreground"
                                    value="terminal"
                                >
                                    TERMINAL
                                </TabsTrigger>
                                {/* <TabsTrigger className="font-semibold text-muted-foreground" value="console">DEBUG CONSOLE</TabsTrigger> */}
                            </TabsList>
                            <hr className="w-screen -ml-10" />
                            <TabsContent className="bg-black" value="problem">
                                <div className="h-52 overflow-y-scroll px-2 pr-6 pl-4">
                                    {codeStore.error.length > 0 ? (
                                        <div className="">
                                            {codeStore.error.map((element) => (
                                                <div
                                                    className="dark:bg-card mb-4 border px-1 py-1 "
                                                    key={element.time}
                                                >
                                                    <h1 className="text-red-500 font-bold text-sm">
                                                        {element.time}:
                                                    </h1>
                                                    <div
                                                        className="px-6 text-muted-foreground pt-1 font-mono"
                                                        dangerouslySetInnerHTML={{
                                                            __html: element.error.replace(
                                                                /\n/g,
                                                                "<br />"
                                                            ),
                                                        }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <h1 className="text-muted-foreground font-semibold">No Problems! Everythings is working as Expected</h1>
                                    )}
                                </div>
                            </TabsContent>
                            <TabsContent value="output">
                                <div className="h-52 overflow-y-scroll px-2 pr-6 pl-4">
                                    {codeStore.output ? (
                                        <div className="">
                                            <div className="flex flex-row justify-between">
                                                <h1 className="text-muted-foreground">{date.toString()}</h1>
                                                <h1 className="capitalize ">
                                                    {codeStore.executionTime}{" "}
                                                    {codeStore.status}
                                                </h1>
                                            </div>
                                            <div
                                                className="px-6 pt-1 font-mono"
                                                dangerouslySetInnerHTML={{
                                                    __html: codeStore.output.replace(
                                                        /\n/g,
                                                        "<br />"
                                                    ),
                                                }}
                                            />
                                        </div>
                                    ) : (
                                        <h1 className="text-muted-foreground font-semibold">
                                            No Output Yet
                                        </h1>
                                    )}
                                </div>
                            </TabsContent>
                            <TabsContent value="terminal">
                                <div className="h-52 overflow-y-scroll px-2 pr-6 pl-4">
                                    <h1 className="text-muted-foreground font-semibold">
                                        Coming Soon
                                    </h1>
                                    <h1>Please connect with us to improve and enhance features on CodeCloudAI</h1>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </main>
    );
}
