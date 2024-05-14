"use client";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCodeStore } from "@/lib/store/codeStore";

export default function FileLayout({ children }) {
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
                    maxSize={40}
                >
                    <div className="flex px-0">
                        <Tabs defaultValue="output">
                            <TabsList className="bg-transparent font-extralight">
                                <TabsTrigger
                                    className="font-semibold text-muted-foreground"
                                    value="problem"
                                >
                                    PROBLEMS
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
                            <TabsContent value="problem">
                                <div className="h-52 overflow-y-scroll px-2 pr-6 pl-2">
                                    <div className="border-b-2 pb-1">
                                        {codeStore.error.map((element) => (
                                            <>
                                                <h1
                                                    className="font-bold text-sm"
                                                    key={element.time}
                                                >
                                                    {element.time}:
                                                </h1>
                                                <div
                                                 className="px-6 pt-1 mb-4 border-b-2"
                                                    dangerouslySetInnerHTML={{
                                                        __html: element.error.replace(
                                                            /\n/g,
                                                            "<br />"
                                                        ),
                                                    }}
                                                />
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="output">
                                {codeStore.output
                                    ? `Output of your code: ${codeStore.output} ${codeStore.executionTime} ${codeStore.status}`
                                    : ``}
                            </TabsContent>
                            <TabsContent value="terminal">
                                Lorem ipsum dolor sit amet consectetur, \n
                                adipisicing elit. Voluptas delectus minima nam
                                sed sint, iure quasi sunt numquam ipsa quos
                                doloribus dolorum soluta at natus, obcaecati ea
                                quo possimus et. Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Pariatur, quasi
                                temporibus excepturi magni possimus facere
                                quibusdam vitae aut, quas, soluta delectus?
                                Excepturi iste dolore quas rem soluta nobis qui
                                quos. Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dolores temporibus beatae
                                veniam sequi, iste quibusdam excepturi tempore
                                nisi provident similique nostrum suscipit quae
                                expedita maxime maiores asperiores, molestias
                                optio odit?
                            </TabsContent>
                        </Tabs>
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </main>
    );
}
