"use client";
import { useRouter } from "next/navigation";
import Editor from "@monaco-editor/react";
export default function Filepage({ params }) {
    const router = useRouter();
    return (
        <div className="h-screen">
            <h1 className="border text-muted-foreground">{params.filename}</h1>
            <Editor
                theme="vs-dark"
                height="90vh"
                defaultLanguage="python"
                defaultValue="// Write your Code Here"
            />
        </div>
    );
}
