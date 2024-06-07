import { useSettingStore } from "@/lib/store/settingStore";
import { Send } from "lucide-react";
import { useState } from "react";

export default function AiChat() {
    const [chatInput, setChatInput] = useState("");
    const settingStore = useSettingStore();

    async function handleSend(evt) {
        settingStore.changeChatsWithAi(chatInput);
        setChatInput("");
        evt.preventDefault();
    }
    return (
        <div className="h-full mx-2 my-2 px-1 py-1 flex flex-col pb-10">
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
            <form
                onSubmit={(evt) => handleSend(evt)}
                className="mt-auto relative border-white"
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
