import { mistral } from "@ai-sdk/mistral";
import { generateText, streamText } from "ai";
import { NextResponse } from "next/server";

export async function GET() {
    const word = "sky";
    const { text } = await generateText({
        model: mistral("mistral-large-latest"),
    });
    const data = {
        data: "Data1",
        test: text,
        version: 1,
    };
    return NextResponse.json(data);
}

export async function POST(request) {
    const req = await request.json();
    console.log(req);

    const result = await streamText({
        model: mistral("mistral-large-latest"),
        system: "your are a software engineer in python language",
        messages: req.messages,
    });
    return result.toAIStreamResponse();
    console.log(result)
}
