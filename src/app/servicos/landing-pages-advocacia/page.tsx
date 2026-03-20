import type { Metadata } from "next";
import { ArrowRight, Zap, Smartphone, LayoutTemplate, Lock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Landing Pages para Advogados | Agência Juri",
    description: "Páginas de alta conversão projetadas para passar autoridade. OAB Compliance e velocidade máxima.",
};

export default function LandingPage() {
    return (
        <div className="bg-background min-h-screen">
            <section className="pt-32 pb-16 container px-4 md:px-6">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                        <LayoutTemplate className="w-4 h-4" />
                        Conversão & Autoridade
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display uppercase tracking-tight text-primary mb-6">
                        Seu Cartão de Visita <br />
                        <span className="text-accent">Que Vende 24h</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
                        Esqueça sites lentos e genéricos. Nossas páginas são projetadas para carregar em segundos e guiar o cliente até o WhatsApp.
                    </p>
                    <Button size="lg" asChild>
                        <Link href={SITE_CONFIG.links.whatsapp} target="_blank">
                            Ver Modelos de Alta Conversão <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </section>

            <section className="py-20 bg-secondary/30">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                        <div className="p-8 border border-border bg-background">
                            <Zap className="w-10 h-10 text-accent mb-4 mx-auto md:mx-0" />
                            <h3 className="text-xl font-display uppercase tracking-wide mb-2">Velocidade Máxima</h3>
                            <p className="text-muted-foreground text-sm">
                                Carregamento em menos de 2s. Seu cliente não espera.
                            </p>
                        </div>
                        <div className="p-8 border border-border bg-background">
                            <Smartphone className="w-10 h-10 text-accent mb-4 mx-auto md:mx-0" />
                            <h3 className="text-xl font-display uppercase tracking-wide mb-2">Mobile First</h3>
                            <p className="text-muted-foreground text-sm">
                                Desenhado para a tela do celular, onde 90% dos cliques acontecem.
                            </p>
                        </div>
                        <div className="p-8 border border-border bg-background">
                            <Lock className="w-10 h-10 text-accent mb-4 mx-auto md:mx-0" />
                            <h3 className="text-xl font-display uppercase tracking-wide mb-2">SSL & LGPD</h3>
                            <p className="text-muted-foreground text-sm">
                                Segurança total com certificado SSL e aviso de cookies.
                            </p>
                        </div>
                    </div>

                    {/* New CTA Block */}
                    <div className="mt-20 p-8 md:p-12 bg-primary text-secondary rounded-lg text-center">
                        <h3 className="text-2xl md:text-3xl font-display uppercase tracking-wide mb-4 text-secondary">
                            Quer ver como esse serviço ficaria no seu escritório?
                        </h3>
                        <p className="text-secondary/80 mb-8 max-w-xl mx-auto">
                            Faça o diagnóstico rápido de 60 segundos e receba recomendação personalizada.
                        </p>
                        <Button variant="outline" size="lg" className="bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-primary transition-colors" asChild>
                            <Link href="https://viewer.agenciajuri.com.br/diagnostico-advogados" target="_blank">
                                Fazer Diagnóstico Rápido
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
