import { create } from "zustand";
const date = new Date;
export const useCodeStore = create((set) => ({
    code: "console.log(23+42)",
    language: "javascript",
    filename: "index.js",
    output:"",
    error:[],
    status:"",
    executionTime:"",
    changeCode: (code) => set(() => ({ code: code })),
    changeLanguage: (language) => set(() => ({ language: language })),
    changeFilename: (filename) => set(() => ({ filename: filename })),
    changeOutput: (output) => set(() => ({ output: output })),
    changeError: (error) => set((state) => ({ error: [...state.error, {error:error, time:date.toString()}] })),
    changeStatus: (status) => set(() => ({ status: status })),
    changeExecutionTime: (executionTime) => set(() => ({ executionTime: executionTime })),
}));
