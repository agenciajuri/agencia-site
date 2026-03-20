import type { Metadata } from "next";
import { ArrowRight, MessageCircle, Users, Clock, History } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Atendimento WhatsApp Jurídico | Agência Juri",
    description: "Estruturação de scripts e triagem para transformar curiosos em agendamentos reais.",
};

export default function WhatsappPage() {
    return (
        <div className="bg-background min-h-screen">
            <section className="pt-32 pb-16 container px-4 md:px-6">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                        <MessageCircle className="w-4 h-4" />
                        Comercial Eficiente
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display uppercase tracking-tight text-primary mb-6">
                        Do &quot;Oi&quot; ao <br />
                        <span className="text-accent">Contrato Assinado</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
                        Não adianta lead se o atendimento falha. Criamos scripts de triagem e roteiros que filtram quem não tem perfil e agendam quem precisa.
                    </p>
                    <Button size="lg" asChild>
                        <Link href={SITE_CONFIG.links.whatsapp} target="_blank">
                            Estruturar meu WhatsApp <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </section>

            <section className="py-20 border-t border-border">
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-display uppercase tracking-tight mb-12 text-center">
                        O tripé do atendimento
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center p-6 border border-transparent hover:border-border transition-colors">
                            <div className="bg-secondary p-4 rounded-full mb-6">
                                <Users className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold uppercase mb-3">Triagem</h3>
                            <p className="text-muted-foreground">Perguntas certas para identificar urgência e capacidade financeira.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 border border-transparent hover:border-border transition-colors">
                            <div className="bg-secondary p-4 rounded-full mb-6">
                                <Clock className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold uppercase mb-3">Agilidade</h3>
                            <p className="text-muted-foreground">Respostas rápidas (semi-automáticas) para não perder o timing do cliente.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 border border-transparent hover:border-border transition-colors">
                            <div className="bg-secondary p-4 rounded-full mb-6">
                                <History className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold uppercase mb-3">Follow-up</h3>
                            <p className="text-muted-foreground">Recuperação de contatos que pararam de responder.</p>
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
