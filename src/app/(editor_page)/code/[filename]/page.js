"use client";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";
import { useState } from "react";

export default function Filepage({ params }) {
  const [code, setCode] = useState("")
    function onChange(newValue) {
        // console.log("change", newValue);
        setCode(newValue)
    }
    return (
        <div className="h-screen">
            <h1 className="border text-muted-foreground">{params.filename}</h1>
            <button className="bg-white text-black" onClick={()=>{console.log(code)}}>get started</button>
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
