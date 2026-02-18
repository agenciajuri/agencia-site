import type { Metadata } from "next";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Contato | Agência Juri",
    description: "Fale com nossa equipe. Atendimento de segunda a sexta, das 08h às 18h.",
};

export default function ContactPage() {
    return (
        <div className="bg-background min-h-screen">
            <section className="pt-32 pb-16 container px-4 md:px-6">
                <h1 className="text-5xl md:text-7xl font-display uppercase tracking-tight text-primary mb-6">
                    Fale Conosco
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12">
                    Estamos prontos para estruturar o comercial do seu escritório. Escolha o melhor canal abaixo.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="bg-secondary p-3 rounded-md">
                                <MessageCircle className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold uppercase mb-1">WhatsApp (Principal)</h3>
                                <p className="text-muted-foreground mb-2">Resposta mais rápida para novos projetos.</p>
                                <Button variant="link" className="p-0 h-auto text-accent text-lg" asChild>
                                    <Link href={SITE_CONFIG.links.whatsapp} target="_blank">
                                        {SITE_CONFIG.contact.phone}
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-secondary p-3 rounded-md">
                                <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold uppercase mb-1">Escritório</h3>
                                <p className="text-muted-foreground">
                                    {SITE_CONFIG.contact.address}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-secondary p-3 rounded-md">
                                <Phone className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold uppercase mb-1">Horário</h3>
                                <p className="text-muted-foreground">
                                    {SITE_CONFIG.contact.hours}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card border border-border p-8 relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-display uppercase tracking-tight mb-6">Comece Agora</h3>
                            <p className="text-muted-foreground mb-8">
                                Não usamos formulários burocráticos. Clique abaixo para falar direto com um consultor especialista.
                            </p>
                            <Button size="lg" className="w-full" asChild>
                                <Link href={SITE_CONFIG.links.whatsapp} target="_blank">
                                    Iniciar Conversa no WhatsApp
                                </Link>
                            </Button>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-5 pointer-events-none transform rotate-12">
                            <MessageCircle className="w-full h-full text-primary" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
