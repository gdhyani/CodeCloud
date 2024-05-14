import { create } from "zustand";
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];
const day = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"];
// let time = `${day[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()} ,${date.getFullYear()} || ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

export const useCodeStore = create((set) => ({
    code: "console.log(23+42)",
    language: "javascript",
    filename: "index.js",
    output: "",
    error: [],
    status: "",
    executionTime: "",
    changeCode: (code) => set(() => ({ code: code })),
    changeLanguage: (language) => set(() => ({ language: language })),
    changeFilename: (filename) => set(() => ({ filename: filename })),
    changeOutput: (output) => set(() => ({ output: output })),
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
    changeStatus: (status) => set(() => ({ status: status })),
    changeExecutionTime: (executionTime) =>
        set(() => ({ executionTime: executionTime })),
}));
