export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="dark flex flex-col h-screen transition-all">
                {/* <h1>Home layout</h1> */}
                {children}
            </body>
        </html>
    );
}
