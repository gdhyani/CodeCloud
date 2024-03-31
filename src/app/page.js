"use client";
import Image from "next/image";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ArrowUpFromLine, ArrowDownFromLine } from "lucide-react";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
    const [console, setconsole] = useState(false);
    // useEffect(() => {
    //   first

    //   return () => {
    //     second
    //   }
    // }, [console])

    return (
        <main className="h-full">
            <ResizablePanelGroup
                direction="vertical"
                className=" rounded-lg border"
            >
                <ResizablePanel defaultSize={75}>
                    <div className="flex flex-col gap-3 text-center min-h-full items-center justify-center">
                        <h1 className="text-4xl">
                            Welcome to{" "}
                            <span className="font-bold">CodeCloud🔥</span>
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Lets start your new Project.
                        </p>
                    </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={5} minSize={5} maxSize={60}>
                    <div className="flex px-4">
                        <Tabs defaultValue="account" className="w-[400px]">
                            <TabsList className="bg-transparent">
                                <TabsTrigger
                                    className="bg-transparent"
                                    value="console"
                                >
                                    Console
                                </TabsTrigger>
                                <TabsTrigger value="github">GitHub</TabsTrigger>
                            </TabsList>
                            <hr className="w-screen -ml-10" />
                            <TabsContent value="console">
                                Make changes to your account here.
                            </TabsContent>
                            <TabsContent value="github">
                                Change your password here.
                            </TabsContent>
                        </Tabs>
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </main>
    );
}
