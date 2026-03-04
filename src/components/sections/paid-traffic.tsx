"use client";

import { motion } from "framer-motion";
import {
    Target,
    FlaskConical,
    Filter,
    GitMerge,
    TrendingUp,
    BarChart3,
    ArrowRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PaidTraffic() {
    return (
        <section className="py-32 bg-background relative overflow-hidden flex items-center min-h-[80vh] border-b border-primary/5">

            {/* Background Image - Z-axis Layering (Inverted positioning: Left side) */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="absolute left-0 top-0 bottom-0 w-full md:w-[60%] lg:w-[50%] z-0"
            >
                <div className="relative w-full h-full">
                    <Image
                        src="/image/sobre-valores-justica-maos-profissional.jpg"
                        alt="Pessoa analisando dados estratégicos"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-center grayscale-[50%] opacity-40 md:opacity-60 -scale-x-100"
                    />
                    {/* Gradient fade to blend with background on the right edge */}
                    <div className="absolute inset-0 bg-gradient-to-l from-background via-background/80 to-transparent md:via-transparent" />
                    <div className="absolute inset-0 bg-background/30" />
                </div>
            </motion.div>

            <div className="container relative z-10 px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                    {/* Left Brutalist Value Blocks - Overlapping the image */}
                    <div className="md:col-span-7 flex flex-col justify-center gap-4 mt-12 md:mt-0 order-2 md:order-1">
                        <h3 className="text-2xl font-display uppercase tracking-wide text-primary mb-2 md:-mr-12 z-10">O que a gente faz na prática:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                {
                                    icon: Target,
                                    title: "Diagnóstico e Direção",
                                    desc: "Definimos: área do direito, cliente ideal, região e o objetivo do fluxo."
                                },
                                {
                                    icon: FlaskConical,
                                    title: "Teste Controlado",
                                    desc: "Investimos pouco para descobrir a mensagem e o público certo primeiro."
                                },
                                {
                                    icon: Filter,
                                    title: "Triagem Completa",
                                    desc: "Filtramos motivo, urgência, cidade e perfil antes de ocupar seu tempo."
                                },
                                {
                                    icon: GitMerge,
                                    title: "Canal Certo",
                                    desc: "Direcionamento via WhatsApp ou Página landing para melhorar a qualidade."
                                },
                                {
                                    icon: TrendingUp,
                                    title: "Escala com Segurança",
                                    desc: "Só aumentamos o orçamento de forma gradual e quando o teste prova Custo Real."
                                },
                                {
                                    icon: BarChart3,
                                    title: "Análise Inteligente",
                                    desc: "Ajustamos público gerando 'triagem boa', não apenas 'mensagem vazia'."
                                }
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-background border border-primary/15 p-5 sm:p-6 flex flex-col items-start gap-3 sm:gap-4 shadow-xl hover:-translate-y-1 transition-transform duration-300 relative group"
                                >
                                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-primary/20 group-hover:bg-accent transition-colors" />

                                    <h3 className="text-lg font-display uppercase tracking-wide text-primary">
                                        {point.title}
                                    </h3>
                                    <p className="text-foreground/65 leading-relaxed text-sm">
                                        {point.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Typography Block */}
                    <div className="md:col-span-5 flex flex-col justify-center order-1 md:order-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 mb-6"
                        >
                            <span className="w-12 h-[1px] bg-primary" />
                            <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase">
                                Tráfego Pago (Meta + Google)
                            </span>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-display uppercase tracking-tighter leading-[0.85] mb-8 text-primary">
                            Tráfego Pago <br />
                            <span className="text-accent underline decoration-4 underline-offset-8">com Método.</span><br />
                        </h2>

                        <p className="text-xl font-medium text-primary md:max-w-md mb-6 leading-tight">
                            Primeiro a gente testa. Depois a gente escala.
                        </p>

                        <p className="text-lg text-foreground/75 leading-relaxed md:max-w-md border-l-2 border-primary/20 pl-6 mb-6">
                            Em áreas de alta demanda (família, trabalhista e previdenciário), o problema raramente é &quot;falta de clique&quot;. O problema é lead errado, conversa longa sem direção e dinheiro indo embora com curiosos.
                        </p>

                        <p className="text-lg text-foreground/75 leading-relaxed md:max-w-md border-l-2 border-primary/20 pl-6 mb-6">
                            Nosso trabalho é montar um processo simples e eficiente: atrair o público certo, fazer triagem completa e aumentar o investimento com segurança.
                        </p>

                        <p className="text-lg text-foreground/75 leading-relaxed md:max-w-md border-l-2 border-accent pl-6 bg-accent/10 py-4 mb-8">
                            <strong className="text-primary">Resultado:</strong> menos tempo perdido no WhatsApp, mais organização no atendimento e mais contatos com perfil para virar oportunidade real.
                        </p>

                        {/* Mobile CTA (Shows only on small screens below Phases to maintain hierarchy) */}
                        <div className="md:hidden">
                            <Button
                                size="lg"
                                className="group w-full h-14 bg-accent text-accent-foreground rounded-none border-b-4 border-accent-foreground/50 hover:border-b-0 hover:translate-y-1 transition-all text-sm font-bold uppercase tracking-wider items-center justify-center flex"
                                asChild
                            >
                                <Link href="https://typebot.co/diagnostico-advogados" target="_blank">
                                    Quero iniciar o Diagnóstico
                                    <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                </div>

                {/* Additional Block: Phases & Budget */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-24 md:mt-32 border-t border-primary/10 pt-16"
                >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                        {/* Phases Info */}
                        <div className="md:col-span-8 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 mb-8">
                                <span className="w-8 h-[2px] bg-primary" />
                                <span className="text-primary text-sm font-bold tracking-widest uppercase">Como funciona em Fases</span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <div className="border-l border-primary/20 pl-4 py-2 hover:border-accent transition-colors">
                                    <h4 className="font-bold text-primary mb-1 uppercase tracking-wider text-sm flex items-center gap-2">
                                        Fase 1
                                        <span className="text-[10px] bg-primary/10 px-2 py-0.5 rounded-none font-mono tracking-normal">5a 15 dias</span>
                                    </h4>
                                    <p className="font-semibold text-sm mb-2">Teste Controlado</p>
                                    <p className="text-xs text-foreground/70 leading-relaxed">
                                        Encontra a melhor combinação de mensagem/criativo. Só avança após padrão claro.
                                    </p>
                                </div>
                                <div className="border-l border-primary/20 pl-4 py-2 hover:border-accent transition-colors">
                                    <h4 className="font-bold text-primary mb-1 uppercase tracking-wider text-sm flex items-center gap-2">
                                        Fase 2
                                        <span className="text-[10px] bg-primary/10 px-2 py-0.5 rounded-none font-mono tracking-normal">Até 15 dias</span>
                                    </h4>
                                    <p className="font-semibold text-sm mb-2">Escala com Otimização</p>
                                    <p className="text-xs text-foreground/70 leading-relaxed">
                                        Aumenta o volume mantendo qualidade, reforçando o que funciona e cortando o que atrai curioso.
                                    </p>
                                </div>
                                <div className="border-l border-primary/20 pl-4 py-2 hover:border-accent transition-colors">
                                    <h4 className="font-bold text-primary mb-1 uppercase tracking-wider text-sm flex items-center gap-2">
                                        Fase 3
                                        <span className="text-[10px] bg-primary/10 px-2 py-0.5 rounded-none font-mono tracking-normal">Até 30 dias</span>
                                    </h4>
                                    <p className="font-semibold text-sm mb-2">Previsibilidade Total</p>
                                    <p className="text-xs text-foreground/70 leading-relaxed">
                                        Ajustes baseados no comportamento real profundo dos leads para manter a leitura completa do funil.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Budget & Disclaimer */}
                        <div className="md:col-span-4 bg-zinc-50 border border-primary/10 p-6 shadow-md relative mt-8 md:mt-0">
                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent -mt-1 -mr-1" />
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent -mb-1 -ml-1" />

                            <h4 className="font-bold text-primary mb-4 uppercase tracking-wider text-sm">Orçamento & Responsabilidade</h4>
                            <p className="text-sm font-semibold mb-2">
                                Investimento na Rede Ads: <br />
                                <span className="font-mono text-base bg-amber-100 px-1 text-amber-900">Mínimo R$ 700 a R$ 800/mês</span>
                            </p>
                            <p className="text-xs text-foreground/75 leading-relaxed mb-6">
                                Este é o valor mínimo de ferramenta necessário para gerar sinais estatísticos reais. Não testamos com achismos, respeitamos seu capital de giro financeiro.
                            </p>

                            <p className="text-[11px] font-mono leading-relaxed bg-black/5 p-3 italic text-foreground/70 border-l-2 border-primary">
                                &quot;A maioria das agências coloca a campanha no ar e joga pro WhatsApp. Nós tratamos como operação contínua e previsível, sem promessas mágicas.&quot;
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Desktop CTA Centered Bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 text-center hidden md:flex flex-col items-center justify-center"
                >
                    <p className="text-sm text-foreground/60 mb-4 max-w-lg">
                        Vamos definir público, região e o melhor fluxo (WhatsApp ou página) para sua realidade.
                    </p>
                    <Button
                        size="lg"
                        className="group h-16 px-10 bg-accent text-accent-foreground rounded-none border-b-4 border-accent-foreground/50 hover:border-b-0 hover:translate-y-1 transition-all text-sm font-bold uppercase tracking-wider"
                        asChild
                    >
                        <Link href="https://typebot.co/diagnostico-advogados" target="_blank">
                            Quero iniciar o Diagnóstico de Tráfego
                            <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </motion.div>

            </div>
        </section>
    );
}
