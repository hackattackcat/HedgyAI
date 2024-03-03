import "./globals.css";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <title>Hedgy.AI</title>
                <link rel="shortcut icon" href="/images/favicon.ico" />
                <meta
                    name="description"
                    content="Sitecore Hackathon Idea Generator"
                />
                <meta property="og:title" content="Sitecore Hackathon Idea Generator" />
                <meta
                    property="og:description"
                    content="Sitecore Hackathon Idea Generator"
                />
                <meta property="og:image" content="/images/hackathon.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Sitecore Hackathon Idea Generator" />
                <meta
                    name="twitter:description"
                    content="Sitecore Hackathon Idea Generator"
                />
                <meta name="twitter:image" content="/images/hackathon.jpg" />
            </head>
            <body className={publicSans.className}>
                <div className="flex flex-col p-4 md:p-12 h-[100vh]">
                    {children}
                </div>
            </body>
        </html>
    );
}
