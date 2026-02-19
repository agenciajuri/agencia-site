import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";
import { KlaroConsent } from "@/components/privacy/cookie-consent";

// ... imports

// Place components inside the body
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className={`${bebas.variable} ${montserrat.variable}`}>
            <body
                className="font-sans antialiased text-foreground bg-background selection:bg-accent selection:text-white flex flex-col min-h-screen relative overflow-x-hidden"
                suppressHydrationWarning
            >
                <Header />
                <main className="flex-grow z-10 relative">
                    {children}
                </main>
                <Footer />
                <FloatingWhatsApp />
                <KlaroConsent />
                <JsonLd />
            </body>
        </html>
    );
}
