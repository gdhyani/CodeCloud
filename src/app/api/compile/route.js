const { NextResponse } = require("next/server");

export async function GET() {
    const response = await fetch(
        "https://api.freeapi.app/api/v1/todos?query=reactjs&complete=false",
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            body: {
                password: "test@123",
                username: "doejohn",
            },
        }
    );
    const res = await response.json();
    console.log(res, response);
    return NextResponse.json(res);
}

export async function POST(request) {
    const url = "https://onecompiler-apis.p.rapidapi.com/api/v1/run";
    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            
        },
        body: {
            language: "javascript",
            stdin: "Peter",
            files: [
                {
                    name: "index.py",
                    content: "console.log('codecloud')",
                },
            ],
        },
    };
    const response = await fetch(url, options);
	const result = await response.text();
    // const data = await request.json();
    return NextResponse.json(result);
}
