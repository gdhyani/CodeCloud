import { useSettingStore } from "@/lib/store/settingStore";
import { Send } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function AiChat() {
    const [chatInput, setChatInput] = useState("");
    const settingStore = useSettingStore();

    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(scrollToBottom, [settingStore.chatsWithAi]);

    async function handleSend(evt) {
        settingStore.changeChatsWithAi(chatInput);
        setChatInput("");
        evt.preventDefault();
    }
    return (
        <div className="h-full relative mx-2 my-2 px-1 py-1 flex flex-col pb-10">
            <div className="h-5/6 mt-5 overflow-y-auto overflow-x-hidden">
                {settingStore.chatsWithAi.map((ele, index) => (
                    <h1
                        className={`border text-[13px] leading-relaxed tracking-wide w-8/12 rounded-xl px-2 py-2 my-2 ${
                            ele.role === "user"
                                ? "ml-auto bg-popover-foreground text-black "
                                : "mr-auto "
                        }`}
                        key={index}
                    >
                        {ele.content}
                    </h1>
                ))}
                <div ref={messagesEndRef}></div>
            </div>

            <form
                onSubmit={(evt) => handleSend(evt)}
                className="mt-auto absolute bottom-0 w-full border-white"
            >
                <textarea
                    rows={3}
                    className="w-full rounded-lg border-white text-sm px-2 py-2 bg-transparent border"
                    type="text"
                    value={chatInput}
                    onChange={(evt) => setChatInput(evt.target.value)}
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
