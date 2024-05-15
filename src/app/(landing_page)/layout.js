import Navbar from "@/components/Navbar(L)";
import "../globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="dark flex flex-col h-screen transition-all">
                <Navbar/>
                {children}
            </body>
        </html>
    );
}
