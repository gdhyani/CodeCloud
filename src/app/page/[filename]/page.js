"use client";
import { useRouter } from "next/navigation";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import "monaco-themes/themes/Blackboard.json";
import { useEffect } from "react";

export default function Filepage({ params }) {
    const router = useRouter();
    const monaco = useMonaco();
    useEffect(() => {
        if (monaco) {
          console.log("here is the monaco isntance:", monaco);
          import('monaco-themes/themes/Blackboard.json')
            .then(data => {
              monaco.editor.defineTheme('blackboard', data);
            })
            .then(_ => monaco.editor.setTheme('blackboard'))
          // monaco.editor.defineTheme("monokai-bright").then(_ => monaco.editor.setMonacoTheme("monokai-bright"));
        }
      }, [monaco]);
    return (
        <div className="h-screen">
            <h1 className="border text-muted-foreground">{params.filename}</h1>
            <Editor
                className="bg-black"
                theme="vs-dark"
                height="90vh"
                defaultLanguage="python"
                defaultValue="// Write your Code Here"
            />
        </div>
    );
}
