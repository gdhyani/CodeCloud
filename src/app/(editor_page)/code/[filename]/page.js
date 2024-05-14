"use client";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";
import { useCodeStore } from "@/lib/store/codeStore";

export default function Filepage({ params }) {
    const codeStore = useCodeStore();
    return (
        <div className="h-screen">
            <h1 className="border text-muted-foreground">{params.filename}</h1>
            <AceEditor
                mode={codeStore.language}
                theme="twilight"
                height="90vh"
                width="screen"
                fontSize={16}
                onChange={codeStore.changeCode}
                value={codeStore.code}
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
