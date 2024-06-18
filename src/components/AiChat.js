import { useCodeStore } from "@/lib/store/codeStore";
import { useSettingStore } from "@/lib/store/settingStore";
import { useChat } from "@ai-sdk/react";
import { Send } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Markdown from "react-markdown";

export default function AiChat() {
    // AI Chat bot API
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: "/api/ai-chat",
    });

    const settingStore = useSettingStore();
    const codeStore = useCodeStore();

    //scroll to latest text
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({
            behavior: "instant",
            block: "end",
        });
    };
    useEffect(scrollToBottom, [messages]);

    async function handleSend(evt) {
        evt.preventDefault();
        handleSubmit(evt, {
            options: {
                body: {
                    messages: [
                        ...messages,
                        {
                            role: "user",
                            content: `Message: ${input}, Code: ${codeStore.code}`,
                        },
                    ],
                },
            },
        });
    }
    return (
        <div className="h-full relative mx-2 my-2 px-1 py-1 flex flex-col pb-10">
            <div className="h-5/6 overflow-y-auto overflow-x-hidden">
                {messages.map((ele, index) => (
                    <h1
                        className={`border mb-4 text-[13px] leading-loose tracking-wide min-w-8/12 rounded-xl px-2 py-2 my-2 ${
                            ele.role === "user"
                                ? "ml-auto bg-popover-foreground text-black "
                                : "mr-auto "
                        }`}
                        key={index}
                    >
                        <Markdown
                            components={{
                                code({
                                    inline,
                                    className,
                                    children,
                                    ...props
                                }) {
                                    return (
                                        <code
                                        className="font-mono bg-primary-foreground p-1 border-white border rounded"
                                            {...props}
                                        >
                                            {children}
                                        </code>
                                    );
                                },
                            }}
                        >
                            {ele.content}
                        </Markdown>
                    </h1>
                ))}
                <div ref={messagesEndRef}></div>
            </div>

            <form
                onSubmit={handleSend}
                className="mt-auto absolute bottom-10 w-full border-white"
            >
                <textarea
                    rows={3}
                    className="w-full rounded-lg border-white text-sm px-2 py-2 bg-transparent border"
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    name="chat-input"
                    placeholder="ask codecloudai"
                ></textarea>
                <button
                    className="absolute bg-primary-foreground rounded-full px-3 py-3 z-50 bottom-4 right-3"
                    type="submit"
                >
                    <Send size={15} />
                </button>
            </form>
        </div>
    );
}
