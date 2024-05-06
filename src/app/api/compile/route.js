import { NextResponse } from "next/server";

export async function GET() {
    const url = "https://onecompiler-apis.p.rapidapi.com/api/v1/run";
    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key":process.env.X_RapidAPI_Key,
            "X-RapidAPI-Host":process.env.X_RapidAPI_Host,
        },
        body: JSON.stringify({
            language: "javascript",
            files: [
                {
                    name: "index.js",
                    content: "console.log(23+23*2)",
                },
            ],
        }),
    };
    try {
        const res = await fetch(url, options);
        const data = await res.json();
        return NextResponse.json(data);
        // console.log(data);
    } catch (error) {
        console.error(error);
        // return NextResponse.error(error);
    }
}