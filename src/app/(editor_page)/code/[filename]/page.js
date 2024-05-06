"use client";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";
import { useState } from "react";

export default function Filepage({ params }) {
    const [code, setCode] = useState("console.log('API working 21 121 121')");
    function onChange(newValue) {
        setCode(newValue);
    }
    const handleRun = async () => {
        //Creating Request to Route.js 
        const url = "/api/compile";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
                "content-type": "application/json", 
            },
            body: JSON.stringify({
                language: "javascript",
                files: [
                    {
                        name: "index.js",
                        content: code,
                    },
                ],
            }),
        };
        try {
            const res = await fetch(url, options);
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="h-screen">
            <h1 className="border text-muted-foreground">{params.filename}</h1>
            <button className="bg-white text-black" onClick={handleRun}>
                get started
            </button>
            <AceEditor
                mode="javascript"
                theme="twilight"
                height="90vh"
                width="screen"
                fontSize={16}
                onChange={onChange}
                value={code}
                name="UNIQUE_ID_OF_DIV"
                lineHeight={28}
                editorProps={{ $blockScrolling: true }}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    enableAutoIndent: true,
                }}
            />
        </div>
    );
}
