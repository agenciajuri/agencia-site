import type { Metadata } from "next";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WhatsAppInput } from "@/components/ui/whatsapp-input";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Contato | Agência Juri",
    description: "Solicite um diagnóstico gratuito para seu escritório ou fale direto no WhatsApp.",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background">
            <section className="container px-4 pb-16 pt-32 md:px-6">
                <div className="max-w-4xl">
                    <h1 className="text-5xl font-display uppercase tracking-tight text-primary md:text-7xl">
                        Fale com a gente
                    </h1>
                    <p className="mt-6 max-w-3xl text-xl leading-relaxed text-muted-foreground">
                        Se alguma das situações do site pareceu familiar, o primeiro passo é entender o que pode melhorar no seu escritório. Sem compromisso.
                    </p>
                </div>

                <div className="mt-12 grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="bg-secondary p-3 rounded-md">
                                <MessageCircle className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold uppercase tracking-wide text-primary">WhatsApp</h2>
                                <p className="mt-1 text-muted-foreground">Canal mais rápido para tirar dúvidas.</p>
                                <Button variant="link" className="h-auto p-0 pt-2 text-lg text-accent" asChild>
                                    <Link href={SITE_CONFIG.links.whatsapp} target="_blank" rel="noopener noreferrer">
                                        {SITE_CONFIG.contact.phone}
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-secondary p-3 rounded-md">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold uppercase tracking-wide text-primary">Escritório</h2>
                                <p className="mt-1 text-muted-foreground">{SITE_CONFIG.contact.address}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-secondary p-3 rounded-md">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold uppercase tracking-wide text-primary">Horário</h2>
                                <p className="mt-1 text-muted-foreground">{SITE_CONFIG.contact.hours}</p>
                            </div>
                        </div>
                    </div>

                    <div className="border border-border bg-card p-8 shadow-[8px_8px_0_rgba(15,23,42,0.04)]">
                        <h2 className="text-2xl font-display uppercase tracking-tight text-primary md:text-3xl">
                            Solicite seu Diagnóstico Gratuito
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                            Preencha abaixo e recebemos sua solicitação. Retornamos em até 24h com uma análise inicial.
                        </p>

                        <form
                            action="https://viewer.agenciajuri.com.br/diagnostico-advogados"
                            method="get"
                            target="_blank"
                            className="mt-8 space-y-5"
                        >
                            <div className="space-y-2">
                                <label htmlFor="contato-nome" className="text-sm font-bold uppercase tracking-wider text-primary">
                                    Seu nome
                                </label>
                                <input
                                    id="contato-nome"
                                    name="nome"
                                    type="text"
                                    required
                                    placeholder="Como prefere ser chamado(a)?"
                                    className="h-14 w-full rounded-none border border-primary/20 bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="contato-whatsapp" className="text-sm font-bold uppercase tracking-wider text-primary">
                                    WhatsApp
                                </label>
                                <WhatsAppInput
                                    id="contato-whatsapp"
                                    name="whatsapp"
                                    type="tel"
                                    required
                                    placeholder="(00) 00000-0000"
                                    className="h-14 w-full rounded-none border border-primary/20 bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="contato-area" className="text-sm font-bold uppercase tracking-wider text-primary">
                                    Área principal
                                </label>
                                <select
                                    id="contato-area"
                                    name="area"
                                    required
                                    defaultValue=""
                                    className="h-14 w-full rounded-none border border-primary/20 bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-accent"
                                >
                                    <option value="" disabled>
                                        Selecione sua área principal
                                    </option>
                                    <option value="Família">Família</option>
                                    <option value="Trabalhista">Trabalhista</option>
                                    <option value="Previdenciário">Previdenciário</option>
                                    <option value="Outra">Outra</option>
                                </select>
                            </div>

                            <Button
                                size="lg"
                                type="submit"
                                className="min-h-[56px] h-auto w-full py-4 text-xs leading-tight md:text-sm"
                            >
                                Solicitar Diagnóstico Gratuito
                            </Button>

                            <p className="text-xs leading-relaxed text-muted-foreground">
                                Sem spam, sem lista de e-mail. Retorno em até 24h.
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
