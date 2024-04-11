"use client";
import { useRouter } from "next/navigation";

export default function Filepage({ params }) {
    const router = useRouter();
    return (
        <div>
            <h1>File Page Current File : {params.filename}</h1>
        </div>
    );
}
