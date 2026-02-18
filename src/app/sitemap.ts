import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        "",
        "/servicos",
        "/servicos/gestao-de-trafego-advogados",
        "/servicos/landing-pages-advocacia",
        "/servicos/atendimento-whatsapp-advogados",
        "/servicos/marketing-juridico-compliance",
        "/como-trabalhamos",
        "/sobre",
        "/cidades",
        "/conteudos",
        "/contato",
        "/politica-de-privacidade",
        "/termos",
    ];

    return routes.map((route) => ({
        url: `${SITE_CONFIG.url}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1 : 0.8,
    }));
}
