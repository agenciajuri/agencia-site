"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Plus, Minus, Lock, TrendingUp, Bot, Zap, CheckCircle2, ExternalLink, Globe } from "lucide-react";
import { AnimatePresence } from "framer-motion";

const FAQS = [
    {
        question: "Em quanto tempo vejo resultados?",
        answer: "Informamos que o projeto completo demanda de 60 a 90 dias para que seja um número recorrente. Mas com tráfego pago já recebemos leads nos primeiros dias."
    },
    {
        question: "Como sei que o lead não será apenas um 'curioso'?",
        answer: "Implementamos uma triagem rigorosa via automação no WhatsApp. O contato só é transferido para o seu atendimento humano se passar pelos filtros de qualificação (interesse real e capacidade de investimento)."
    },
    {
        question: "Eu mesmo tenho que atender todos no WhatsApp?",
        answer: "Não. Nossa inteligência roda 24/7: atende instantaneamente, tira as dúvidas mais comuns e organiza o agendamento real. Você só entra no circuito para o fechamento (advogar)."
    },
    {
        question: "Qual o investimento mínimo nas plataformas de anúncio?",
        answer: "Recomendamos um mínimo de R$ 700 a R$ 800/mês distribuídos entre Meta Ads e Google Ads para que os algoritmos tenham dados suficientes para encontrar o seu cliente ideal."
    }
];

const NOTICIAS = [
    {
        title: "Estadão/Blue Studio: Monetização Digital para Advocacia",
        summary: "Escritórios monetizam sites com tráfego pago e programática, atraindo visitantes qualificados (estudantes OAB, profissionais) que viram receita principal.",
        link: "https://bluestudio.estadao.com.br/agencia-de-comunicacao/releases/releases-geral/tres-a-cada-dez-lideres-investem-em-marketing-digital/",
        image: "/image/noticia04.png"
    },
    {
        title: "Migalhas: Equilíbrio Caixa com Digital",
        summary: "Ao adotar estrutura digital, o advogado corta custos fixos em 30-50% e escala receita com clientes remotos, liberando caixa para crescimento sustentável.",
        link: "https://www.migalhas.com.br/depeso/448874/escritorio-fisico-ou-digital-estrutura-vs-a-realidade-do-caixa",
        image: "/image/noticia01.png"
    },
    {
        title: "Sebrae: Otimização Financeira",
        summary: "Com marketing digital, o custo por lead cai para R$5-10, elevando faturamento em 40% em 3 meses via clientes recorrentes e visibilidade eficiente.",
        link: "https://sebrae.com.br/sites/PortalSebrae/artigos/marketing-digital-juridico-confira-5-dicas-para-atrair-mais-clientes,e33cec7c15632810VgnVCM100000d701210aRCRD",
        image: "/image/noticia02.png"
    },
    {
        title: "Revista FT: Expansão de Receita",
        summary: "Publicidade paga multiplica alcance para 50.000 potenciais clientes, explodindo receita em 5-10x com payback rápido em 15 dias.",
        link: "https://revistaft.com.br/marketing-juridico-desafios-e-oportunidades-para-advogados-previdenciarios-no-ambiente-digital-uma-analise-dos-resultados-positivos-da-presenca-online-na-advocacia-previdenciaria-e-das-barreiras-en/",
        image: "/image/noticia03.png"
    }
];

export default function AgencyLandingPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Animation variants mirroring the "fadeUp" CSS keyframes
    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: (customDelay: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: customDelay,
                ease: "easeOut"
            }
        })
    };

    return (
        <>
            {/* CSS Override to hide global layout elements (Header, Footer, Floating WhatsApp) */}
            <style dangerouslySetInnerHTML={{
                __html: `
                header, footer, #floating-whatsapp, .klaro { display: none !important; }
                @media (max-width: 768px) {
                    body { overflow: auto !important; }
                }
            ` }} />

            <div className="flex flex-col md:grid md:grid-cols-2 min-h-screen relative overflow-x-hidden bg-[#06060c] text-[#f2f0ea] font-sans">

                {/* VISUAL & CONTEXT (MOBILE FIRST ANCHOR) */}
                <div className="relative overflow-hidden w-full h-[50vh] min-h-[350px] md:h-screen md:max-h-full md:order-last order-first border-b border-white/10 md:border-b-0">
                    {/* Background Gradients */}
                    <div className="absolute inset-0 bg-[#06060c]" style={{
                        backgroundImage: `
                            radial-gradient(ellipse 100% 80% at 60% 40%, rgba(255, 69, 0, 0.18) 0%, transparent 60%),
                            radial-gradient(ellipse 60% 60% at 90% 80%, rgba(255, 112, 67, 0.08) 0%, transparent 50%),
                            linear-gradient(160deg, #0e0816 0%, #06060c 100%)
                        `
                    }} />

                    {/* Decorative Grid Lines */}
                    <div className="absolute inset-0 z-0" style={{
                        backgroundImage: `
                            linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px',
                        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
                        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)'
                    }} />

                    {/* Center Image Container — inset-0 no mobile para o container ter altura e a imagem aparecer sempre */}
                    <div className="absolute inset-0 z-10 flex items-end justify-center md:items-center">
                        <div className="relative w-full h-full min-h-[280px] md:min-h-0 md:w-[75%] md:h-[85%] rounded overflow-hidden">
                            {/* No mobile: <img> nativo para garantir que a imagem apareça em qualquer navegador */}
                            <img
                                src="/image/advogado-preocupado.jpg"
                                alt="Advogado preocupado com caixa curto — gatilho visual da LP"
                                className="absolute inset-0 w-full h-full object-cover object-top md:hidden"
                                style={{
                                    filter: 'grayscale(15%) contrast(1.05)',
                                    maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)'
                                }}
                                fetchPriority="high"
                            />
                            {/* No desktop: Next/Image com otimização */}
                            <Image
                                src="/image/advogado-preocupado.jpg"
                                alt="Advogado preocupado com caixa curto — gatilho visual da LP"
                                fill
                                sizes="50vw"
                                priority
                                className="object-cover object-top filter grayscale-[15%] contrast-[1.05] hidden md:block"
                                style={{
                                    maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)'
                                }}
                            />
                        </div>
                    </div>

                    {/* Floating Stat Card - Top Left */}
                    <motion.div
                        custom={0.7} initial="hidden" animate="visible" variants={fadeUp}
                        className="absolute z-20 top-2 left-2 md:top-8 md:left-8 bg-[#06060c]/85 backdrop-blur-md border border-white/5 rounded-lg p-2.5 md:p-4 scale-90 md:scale-100 origin-top-left"
                    >
                        <div className="font-display text-[1.8rem] md:text-[2rem] leading-none text-[#ff4500]">24/7</div>
                        <div className="text-[0.65rem] md:text-[0.7rem] text-[#f2f0ea] font-medium mt-1 leading-snug">Atendimento automático<br />no WhatsApp</div>
                    </motion.div>

                    {/* Floating Stat Card - Bottom Right */}
                    <motion.div
                        custom={0.8} initial="hidden" animate="visible" variants={fadeUp}
                        className="absolute z-20 bottom-3 right-3 md:bottom-12 md:right-8 bg-[#06060c]/85 backdrop-blur-md border border-white/5 rounded-lg p-2.5 md:p-4 scale-90 md:scale-100 origin-bottom-right"
                    >
                        <div className="font-display text-[1.8rem] md:text-[2rem] leading-none text-[#ff4500]">7–14d</div>
                        <div className="text-[0.65rem] md:text-[0.7rem] text-[#f2f0ea] font-medium mt-1 leading-snug">Para sua operação<br />ir ao ar</div>
                    </motion.div>

                    {/* Left Border Separator (Desktop only) */}
                    <div className="hidden md:block absolute left-0 top-[10%] bottom-[10%] w-[1px] z-30" style={{
                        background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.06), transparent)'
                    }} />
                </div>

                {/* TEXT & CONVERSION PAYLOAD */}
                <div className="flex flex-col justify-center px-5 md:px-[5vw] pt-10 pb-16 md:py-16 relative z-10 w-full md:order-first order-last">
                    <motion.div
                        custom={0.1} initial="hidden" animate="visible" variants={fadeUp}
                        className="inline-flex items-center gap-2 text-[10px] md:text-xs tracking-[0.14em] uppercase text-[#ff7043] font-semibold mb-5 md:mb-7"
                    >
                        <span className="w-5 md:w-6 h-[2px] bg-[#ff4500] inline-block" />
                        Para advogados que dependem de indicação
                    </motion.div>

                    <motion.h1
                        custom={0.2} initial="hidden" animate="visible" variants={fadeUp}
                        className="font-display text-[3.8rem] md:text-[clamp(3.8rem,6vw,6.5rem)] leading-[0.95] tracking-[0.01em] mb-5 md:mb-7 uppercase"
                    >
                        <span className="block text-transparent" style={{ WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.25)" }}>
                            Indicação não
                        </span>
                        <span className="block text-[#ff4500]">
                            paga
                        </span>
                        <span className="block text-white">conta todo mês.</span>
                    </motion.h1>

                    <motion.p
                        custom={0.35} initial="hidden" animate="visible" variants={fadeUp}
                        className="text-sm md:text-base text-[#f2f0ea] font-medium leading-[1.6] md:leading-[1.7] max-w-[400px] mb-8 md:mb-10"
                    >
                        <strong className="text-[#f2f0ea] font-semibold">Escritório que depende de indicação vive de aperto.</strong> Um mês cheio, dois meses vazios — e o caixa curto aparece antes do próximo cliente.<br /><br />
                        A gente monta um fluxo previsível de clientes para o seu escritório. Todo mês. Sem depender de ninguém.
                    </motion.p>

                    <motion.div custom={0.5} initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col gap-3 md:gap-4 items-start w-full md:w-auto">
                        <Link
                            href="https://wa.me/5562996903303?text=Ol%C3%A1%2C%20vim%20pelo%20an%C3%BAncio%20e%20quero%20agendar%20uma%20reuni%C3%A3o."
                            target="_blank"
                            className="group w-full md:w-auto justify-center text-center relative overflow-hidden inline-flex items-center gap-3 bg-[#ff4500] hover:bg-[#ff7043] text-white px-6 md:px-8 py-4 rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(255,69,0,0.35)] font-sans font-bold text-[15px] md:text-base tracking-[0.02em]"
                        >
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out" />
                            <svg className="w-5 h-5 md:w-6 md:h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                            </svg>
                            <span className="relative z-10 leading-tight">Quero clientes todo mês, <br className="md:hidden" /> não só quando indicam</span>
                        </Link>
                        <span className="text-[11px] md:text-xs text-[#f2f0ea] font-medium flex items-center justify-center w-full md:justify-start gap-1.5 md:gap-2">
                            <Lock className="w-3.5 h-3.5 shrink-0 text-[#f2f0ea]" aria-hidden /> Diagnóstico gratuito · Sem compromisso
                        </span>
                    </motion.div>

                    <motion.div custom={0.65} initial="hidden" animate="visible" variants={fadeUp} className="flex flex-wrap gap-2 md:gap-2.5 mt-8 md:mt-10 pt-6 md:pt-8 border-t border-white/5">
                        <span className="px-3 md:px-3.5 py-1 md:py-1.5 rounded-full border border-[#ff4500]/30 bg-[#ff4500]/10 text-[#ff7043] font-medium text-[11px] md:text-xs inline-flex items-center gap-1.5">
                            <TrendingUp className="w-3.5 h-3.5 shrink-0" aria-hidden /> Captação previsível todo mês
                        </span>
                        <span className="px-3 md:px-3.5 py-1 md:py-1.5 rounded-full border border-[#ff4500]/30 bg-[#ff4500]/10 text-[#ff7043] font-medium text-[11px] md:text-xs inline-flex items-center gap-1.5">
                            <Bot className="w-3.5 h-3.5 shrink-0" aria-hidden /> WhatsApp 24/7
                        </span>
                        <span className="px-3 md:px-3.5 py-1 md:py-1.5 rounded-full border border-[#ff4500]/30 bg-[#ff4500]/10 text-[#ff7043] font-medium text-[11px] md:text-xs inline-flex items-center gap-1.5">
                            <Zap className="w-3.5 h-3.5 shrink-0" aria-hidden /> Meta Ads + Google Ads
                        </span>
                        <span className="px-3 md:px-3.5 py-1 md:py-1.5 rounded-full border border-white/5 text-[#f2f0ea] font-medium text-[11px] md:text-xs inline-flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" aria-hidden /> Compliance OAB
                        </span>
                    </motion.div>
                </div>

            </div>

            {/* NOTÍCIAS / NA MÍDIA */}
            <section className="bg-[#0e0816] text-[#f2f0ea] py-20 px-5 md:px-[5vw] border-t border-white/5 relative z-10 w-full">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} custom={0.1}
                        className="inline-flex items-center gap-2 text-[10px] md:text-xs tracking-[0.14em] uppercase text-[#ff7043] font-semibold mb-3 md:mb-5"
                    >
                        <span className="w-5 md:w-6 h-[2px] bg-[#ff4500] inline-block" />
                        Na mídia
                    </motion.div>

                    <motion.h2
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} custom={0.2}
                        className="font-display text-[2.5rem] md:text-5xl text-white uppercase tracking-tight mb-12"
                    >
                        Marketing digital e advocacia
                    </motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                        {NOTICIAS.map((noticia, i) => (
                            <motion.article
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={fadeUp}
                                custom={0.2 + i * 0.1}
                                key={i}
                                className="group border border-white/10 bg-[#06060c] rounded-lg overflow-hidden hover:border-white/15 transition-colors"
                            >
                                <a
                                    href={noticia.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0e0816]">
                                        <Image
                                            src={noticia.image}
                                            alt=""
                                            fill
                                            sizes="(max-width: 640px) 100vw, 50vw"
                                            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                                        />
                                    </div>
                                    <div className="p-5 md:p-6">
                                        <h3 className="text-base md:text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-[#ff7043] transition-colors">
                                            {noticia.title}
                                        </h3>
                                        <p className="text-sm text-[#f2f0ea] font-medium leading-relaxed line-clamp-3 mb-4">
                                            {noticia.summary}
                                        </p>
                                        <span className="inline-flex items-center gap-2 text-[#ff4500] font-medium text-sm">
                                            Leia a reportagem
                                            <ExternalLink className="w-4 h-4 shrink-0" aria-hidden />
                                        </span>
                                    </div>
                                </a>
                            </motion.article>
                        ))}
                    </div>

                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} custom={0.3}
                        className="mt-16 md:mt-20 pt-12 border-t border-white/5 text-center"
                    >
                        <p className="text-[#f2f0ea] text-sm md:text-base font-medium mb-6 max-w-xl mx-auto">
                            A mídia já fala. <strong className="text-[#f2f0ea]">Chega de depender só de indicação</strong> — coloque seu escritório em um fluxo previsível.
                        </p>
                        <Link
                            href="https://wa.me/5562996903303?text=Ol%C3%A1%2C%20vim%20pelo%20an%C3%BAncio%20e%20quero%20agendar%20uma%20reuni%C3%A3o."
                            target="_blank"
                            className="group inline-flex items-center justify-center gap-3 bg-[#ff4500] hover:bg-[#ff7043] text-white px-6 md:px-8 py-4 rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(255,69,0,0.35)] font-sans font-bold text-[15px] md:text-base tracking-[0.02em] relative overflow-hidden"
                        >
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out" />
                            <svg className="w-5 h-5 md:w-6 md:h-6 shrink-0 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                            </svg>
                            <span className="relative z-10">Quero clientes todo mês, não só quando indicam</span>
                        </Link>
                        <p className="text-[11px] md:text-xs text-[#f2f0ea] font-medium mt-4 flex items-center justify-center gap-1.5">
                            <Lock className="w-3.5 h-3.5 shrink-0 text-[#f2f0ea]" aria-hidden /> Diagnóstico gratuito · Sem compromisso
                        </p>
                    </motion.div>
                </div>
            </section>
            <section className="bg-[#0e0816] text-[#f2f0ea] py-20 px-5 md:px-[5vw] border-t border-white/5 relative z-10 w-full">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} custom={0.1}
                        className="inline-flex items-center gap-2 text-[10px] md:text-xs tracking-[0.14em] uppercase text-[#ff7043] font-semibold mb-3 md:mb-5"
                    >
                        <span className="w-5 md:w-6 h-[2px] bg-[#ff4500] inline-block" />
                        Ainda com receio?
                    </motion.div>

                    <motion.h2
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} custom={0.2}
                        className="font-display text-[2.5rem] md:text-5xl text-white uppercase tracking-tight mb-12"
                    >
                        Dúvidas Frequentes
                    </motion.h2>

                    <div className="space-y-4">
                        {FAQS.map((faq, i) => (
                            <motion.div
                                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} custom={0.3 + (i * 0.1)}
                                key={i} className="border border-white/10 bg-[#06060c] rounded-md overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="flex items-center justify-between w-full p-5 md:p-6 text-left hover:bg-white/5 transition-colors"
                                    aria-expanded={openIndex === i}
                                >
                                    <span className="text-base md:text-lg font-medium pr-8">{faq.question}</span>
                                    {openIndex === i ? (
                                        <Minus className="h-5 w-5 text-[#ff4500] flex-shrink-0" />
                                    ) : (
                                        <Plus className="h-5 w-5 text-[#f2f0ea] flex-shrink-0" />
                                    )}
                                </button>
                                <AnimatePresence>
                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-5 md:p-6 pt-0 text-[#f2f0ea] text-sm md:text-base font-medium leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} custom={0.4}
                        className="mt-16 md:mt-20 pt-12 border-t border-white/5 text-center"
                    >
                        <p className="text-[#f2f0ea] text-sm md:text-base font-medium mb-6 max-w-xl mx-auto">
                            <strong className="text-[#f2f0ea]">Chega de meses cheios e meses vazios.</strong> Fluxo previsível de clientes começa com um diagnóstico — sem compromisso.
                        </p>
                        <Link
                            href="https://wa.me/5562996903303?text=Ol%C3%A1%2C%20vim%20pelo%20an%C3%BAncio%20e%20quero%20agendar%20uma%20reuni%C3%A3o."
                            target="_blank"
                            className="group inline-flex items-center justify-center gap-3 bg-[#ff4500] hover:bg-[#ff7043] text-white px-6 md:px-8 py-4 rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(255,69,0,0.35)] font-sans font-bold text-[15px] md:text-base tracking-[0.02em] relative overflow-hidden"
                        >
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out" />
                            <svg className="w-5 h-5 md:w-6 md:h-6 shrink-0 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                            </svg>
                            <span className="relative z-10">Agendar meu diagnóstico gratuito</span>
                        </Link>
                        <p className="text-[11px] md:text-xs text-[#f2f0ea] font-medium mt-4 flex items-center justify-center gap-1.5">
                            <Lock className="w-3.5 h-3.5 shrink-0 text-[#f2f0ea]" aria-hidden /> Sem compromisso · Resposta em até 24h
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CONHEÇA A GENTE */}
            <section className="bg-[#06060c] text-[#f2f0ea] py-16 px-5 md:px-[5vw] border-t border-white/5 relative z-10 w-full">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} custom={0.1}
                        className="inline-flex items-center gap-2 text-[10px] md:text-xs tracking-[0.14em] uppercase text-[#ff7043] font-semibold mb-3 md:mb-4"
                    >
                        <span className="w-5 md:w-6 h-[2px] bg-[#ff4500] inline-block" />
                        Conheça a gente
                    </motion.div>
                    <motion.p
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} custom={0.2}
                        className="text-[#f2f0ea] text-sm md:text-base font-medium mb-8"
                    >
                        Site, redes e mais conteúdo sobre captação para advogados.
                    </motion.p>
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={fadeUp} custom={0.3}
                        className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
                    >
                        <a
                            href="https://www.agenciajuri.com.br"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 text-[#f2f0ea] hover:text-[#ff7043] transition-colors font-medium text-sm md:text-base"
                        >
                            <Globe className="w-5 h-5 shrink-0" aria-hidden />
                            <span>agenciajuri.com.br</span>
                            <ExternalLink className="w-4 h-4 shrink-0 opacity-70" aria-hidden />
                        </a>
                        <span className="text-white/20 hidden md:inline" aria-hidden>·</span>
                        <a
                            href="https://www.instagram.com/juriagencia"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 text-[#f2f0ea] hover:text-[#ff7043] transition-colors font-medium text-sm md:text-base"
                        >
                            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            <span>@juriagencia</span>
                            <ExternalLink className="w-4 h-4 shrink-0 opacity-70" aria-hidden />
                        </a>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
