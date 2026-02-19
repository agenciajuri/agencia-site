import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { JsonLd } from "@/components/seo/json-ld";
import { cn } from "@/lib/utils";
import { KlaroConsent } from "@/components/privacy/cookie-consent";

// Font Configuration
const bebas = Bebas_Neue({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-bebas",
    display: "swap",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Agência Juri | Marketing Jurídico com Método e Compliance",
    description: "Estrutura de captação e atendimento para advogados com processo, mensuração e conformidade (OAB e LGPD).",
    icons: {
        icon: [
            { url: "/favicon/favicon.ico" },
            { url: "/favicon/favicon.svg", type: "image/svg+xml" },
            { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
        ],
        apple: [
            { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
        other: [
            {
                rel: "manifest",
                url: "/favicon/site.webmanifest",
            },
        ],
    },
};

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
