import { create } from "zustand";

export const useSettingStore = create((set) => ({
    login: true,
    aiModel: "",
    projectName: "temp-project",
    directories: [],
    chatsWithAi: [{role:"assistant", content:`Welcome to CodeCloudAi. This is an Artificial Intelligence ChatBot build specifically for developers in mind`},{role:"assistant", content:"How can i help you today."}],
    changeChatsWithAi: (chatsWithAi) =>
        set((state) => ({
            chatsWithAi: [
                ...state.chatsWithAi,
                { role: "user", content: chatsWithAi },
            ],
        })),
    changeAiModel: (aiModel) =>
        set(() => ({
            aiModel: aiModel,
        })),
    changeDirectories: (directory) =>
        set((state) => ({ directories: [...state.directories, directory] })),
    changeChange: (change) => set(() => ({ change: change })),
    changeError: (error) => {
        const date = new Date();
        const time = `${day[date.getDay()]} ${
            months[date.getMonth()]
        } ${date.getDate()} ,${date.getFullYear()} || ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        set((state) => ({
            error: [
                ...state.error,
                {
                    error: error,
                    time: time,
                },
            ],
        }));
    },
}));
