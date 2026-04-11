"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppInput } from "@/components/ui/whatsapp-input";

export function FinalCapture() {
    return (
        <section className="border-t-4 border-accent bg-background py-24">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="mx-auto max-w-6xl border border-primary/15 bg-secondary/20 p-8 shadow-[12px_12px_0_rgba(13,16,23,0.08)] md:p-12"
                >
                    <div className="max-w-3xl">
                        <div className="mb-6 inline-flex items-center gap-2">
                            <span className="h-[2px] w-8 bg-accent" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent md:text-sm">
                                Diagnóstico Gratuito
                            </span>
                        </div>

                        <h2 className="text-4xl font-display uppercase tracking-tight text-primary md:text-5xl">
                            Descubra o que seu escritório está deixando escapar.
                        </h2>
                        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                            Preencha abaixo e receba uma análise personalizada da sua operação de atendimento e captação. Sem compromisso.
                        </p>
                    </div>

                    <form
                        action="https://viewer.agenciajuri.com.br/diagnostico-advogados"
                        method="get"
                        target="_blank"
                        className="mt-10"
                    >
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr_auto] xl:items-end">
                            <div className="space-y-2">
                                <label htmlFor="diagnostico-nome" className="text-sm font-bold uppercase tracking-wider text-primary">
                                    Seu nome
                                </label>
                                <input
                                    id="diagnostico-nome"
                                    name="nome"
                                    type="text"
                                    required
                                    placeholder="Como prefere ser chamado(a)?"
                                    className="h-14 w-full rounded-none border border-primary/20 bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="diagnostico-whatsapp" className="text-sm font-bold uppercase tracking-wider text-primary">
                                    WhatsApp
                                </label>
                                <WhatsAppInput
                                    id="diagnostico-whatsapp"
                                    name="whatsapp"
                                    type="tel"
                                    required
                                    placeholder="(00) 00000-0000"
                                    className="h-14 w-full rounded-none border border-primary/20 bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
                                />
                            </div>

                            <div className="space-y-2 md:col-span-2 xl:col-span-1">
                                <label htmlFor="diagnostico-area" className="text-sm font-bold uppercase tracking-wider text-primary">
                                    Área principal
                                </label>
                                <select
                                    id="diagnostico-area"
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

                            <div className="md:col-span-2 xl:col-span-1">
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="group min-h-[56px] h-auto w-full rounded-none bg-accent px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] leading-tight text-accent-foreground transition-all hover:-translate-y-1 hover:bg-accent/90 xl:px-8"
                                >
                                    Solicitar Diagnóstico Gratuito
                                    <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                                    Sem spam, sem lista de e-mail. Resposta em até 24h.
                                </p>
                            </div>
                        </div>

                        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                            Seus dados são protegidos conforme a LGPD. Usamos apenas para entrar em contato sobre o diagnóstico solicitado.
                        </p>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
