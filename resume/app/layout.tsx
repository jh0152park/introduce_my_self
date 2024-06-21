import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Resume: JaeHyeon Park",
    description: "Thank you for being here and attention 😚",
    icons: {
        icon: "/ghost.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={open_sans.className}>{children}</body>
        </html>
    );
}
