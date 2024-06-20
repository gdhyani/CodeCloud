import Navbar from "@/components/Navbar(L)";
import "../globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="dark flex flex-col pt-20">
                <Navbar />
                {/* <main className="min-h-screen">  */}
                    {children}
                    {/* </main> */}

                <Footer />
            </body>
        </html>
    );
}
