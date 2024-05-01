"use client";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";

export default function Filepage({ params }) {
    function onChange(newValue) {
        console.log("change", newValue);
    }
    return (
        <div className="h-screen">
            <h1 className="border text-muted-foreground">{params.filename}</h1>
            <AceEditor
                mode="javascript"
                theme="twilight"
                height="90vh"
                width="100%"
                fontSize={16}
                onChange={onChange}
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
