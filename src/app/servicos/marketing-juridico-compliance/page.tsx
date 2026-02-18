import type { Metadata } from "next";
import { ArrowRight, BookOpen, Scale, Shield, FileCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Compliance OAB e LGPD para Advogados | Agência Juri",
    description: "Marketing jurídico seguro. Revisão de peças, LGPD e adequação ao Provimento 205/2021.",
};

export default function CompliancePage() {
    return (
        <div className="bg-background min-h-screen">
            <section className="pt-32 pb-16 container px-4 md:px-6">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                        <Scale className="w-4 h-4" />
                        Segurança Jurídica
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display uppercase tracking-tight text-primary mb-6">
                        Marketing Sem <br />
                        <span className="text-accent">Risco Ético</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
                        Cresça sem medo do processo disciplinar. Nossa metodologia blindada respeita o Provimento 205/2021 e a LGPD.
                    </p>
                    <Button size="lg" asChild>
                        <Link href={SITE_CONFIG.links.whatsapp} target="_blank">
                            Auditoria de Presença Digital <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </section>

            <section className="py-20 border-t border-border bg-secondary/50">
                <div className="container px-4 md:px-6 max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-background p-8 border border-border">
                            <BookOpen className="w-10 h-10 text-accent mb-4" />
                            <h3 className="text-2xl font-display uppercase tracking-tight mb-4">Provimento 205/2021</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                A publicidade deve ter caráter meramente informativo e primar pela discrição e sobriedade, não podendo configurar captação de clientela ou mercantilização.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex gap-2"><span className="text-accent">✓</span> Conteúdo Educativo</li>
                                <li className="flex gap-2"><span className="text-accent">✓</span> Sem promessa de resultado</li>
                                <li className="flex gap-2"><span className="text-accent">✓</span> Sem ostentação</li>
                            </ul>
                        </div>
                        <div className="bg-background p-8 border border-border">
                            <Shield className="w-10 h-10 text-accent mb-4" />
                            <h3 className="text-2xl font-display uppercase tracking-tight mb-4">LGPD (Lei 13.709)</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                Advogados lidam com dados sensíveis. Seu site e captura de leads precisam estar adequados desde o primeiro clique.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex gap-2"><span className="text-accent">✓</span> Aviso de Cookies</li>
                                <li className="flex gap-2"><span className="text-accent">✓</span> Política de Privacidade</li>
                                <li className="flex gap-2"><span className="text-accent">✓</span> Termos de Uso</li>
                            </ul>
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
                            <Link href="https://typebot.co/diagnostico-advogados" target="_blank">
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
