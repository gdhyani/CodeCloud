"use client";
import Editor, { useMonaco } from "@monaco-editor/react";
import "monaco-themes/themes/Upstream Sunburst.json";
import { useEffect } from "react";

export default function Filepage({ params }) {
    const monaco = useMonaco();
    useEffect(() => {
        if (monaco) {
          // console.log("here is the monaco isntance:", monaco);
          import('monaco-themes/themes/Sunburst.json')
            .then(data => {
              monaco.editor.defineTheme('sunburst', data);
            })
            .then(_ => monaco.editor.setTheme('sunburst'))
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
