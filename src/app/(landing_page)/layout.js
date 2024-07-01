import Navbar from "@/components/Navbar(L)";
import "../globals.css";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({ children }) {
    return (
        <ClerkProvider>
            <html lang="en" className="!scroll-smooth">
                <body className="dark flex flex-col min-h-screen">
                    <Navbar />
                    {/* <main className="min-h-screen">  */}
                    {children}
                    {/* </main> */}

                    <Footer />
                </body>
            </html>
        </ClerkProvider>
    );
}
