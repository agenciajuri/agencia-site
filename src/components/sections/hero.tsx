"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const HERO_POSTER = "/image/hero-estatua-justica-balanca-fundo-escuro.jpg";
const HERO_VIDEO_SRC: string = "https://www.youtube-nocookie.com/embed/J1gGhFSOtcA?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1";

export function Hero() {
    const { scrollY } = useScroll();
    const backgroundY = useTransform(scrollY, [0, 1000], [0, 220]);
    const backgroundOpacity = useTransform(scrollY, [0, 500], [1, 0.4]);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(true);
    const hasVideoUrl = HERO_VIDEO_SRC !== "about:blank";

    useEffect(() => {
        if (!isVideoLoaded) {
            return;
        }

        const iframe = iframeRef.current;

        if (!iframe) {
            return;
        }

        iframe.src = iframe.dataset.src || "about:blank";
    }, [isVideoLoaded]);

    return (
        <section className="relative flex min-h-[95vh] items-center overflow-hidden bg-background">
            <motion.div style={{ y: backgroundY, opacity: backgroundOpacity }} className="absolute inset-0 z-0">
                <Image
                    src={HERO_POSTER}
                    alt="Estátua da Justiça com balança e espada em fundo escuro"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-left md:object-center grayscale-[45%] opacity-90"
                    quality={60}
                />
                <div className="absolute inset-0 bg-black/85 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-background/60 to-background" />
            </motion.div>

            <div className="container relative z-10 px-4 pb-16 pt-32 md:px-6 md:pb-24 md:pt-40 lg:pt-36">
                <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
                    <div className="lg:col-span-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="inline-flex items-center gap-2 bg-black/65 px-3 py-2"
                        >
                            <span className="h-[2px] w-8 shrink-0 bg-accent" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent md:text-sm">
                                Engenharia Comercial Jurídica
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-8 max-w-3xl text-[2.35rem] font-display leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-[4.2rem]"
                        >
                            Estrutura Comercial para Escritórios de Advocacia em Goiás.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-6 max-w-2xl border-l-4 border-accent bg-black/70 px-4 py-4 text-base leading-relaxed text-white/90 sm:px-6 sm:text-lg md:text-xl"
                        >
                            Unimos Tráfego Pago, Prospecção via IA e Triagem Automática para estruturar previsibilidade na captação de novos contatos para o seu escritório.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-6 inline-flex items-center border border-white/15 bg-white/[0.08] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/80"
                        >
                            Compliance OAB 100% · Provimento 205/2021
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-5"
                        >
                            <Button
                                size="lg"
                            className="group min-h-[56px] h-auto rounded-none border-b-4 border-accent-foreground/50 bg-accent px-4 py-4 text-center text-xs font-bold uppercase tracking-wider leading-tight text-accent-foreground transition-all hover:translate-y-1 hover:border-b-0 sm:min-h-[64px] sm:px-8 sm:text-sm"
                                asChild
                            >
                                <Link
                                    href="https://viewer.agenciajuri.com.br/diagnostico-advogados"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Consultar Viabilidade para meu Escritório
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 sm:ml-3 sm:h-5 sm:w-5" />
                                </Link>
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="h-14 rounded-none border-zinc-500 bg-black/60 px-4 text-center text-xs font-bold uppercase tracking-wider text-zinc-100 backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white sm:h-16 sm:px-8 sm:text-sm"
                                asChild
                            >
                                <Link href="#metodo">
                                    Ver como funciona
                                </Link>
                            </Button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-6"
                    >
                        <div className="relative overflow-hidden border-2 border-accent bg-primary shadow-[8px_8px_0_rgba(0,0,0,0.35)]">
                            <div className="relative aspect-video w-full max-h-[280px] md:max-h-none">
                                {!isVideoLoaded || !hasVideoUrl ? (
                                    <>
                                        <Image
                                            src={HERO_POSTER}
                                            alt="Thumbnail do vídeo de apresentação da Agência Juri"
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            className="object-cover object-center"
                                        />
                                        <div className="absolute inset-0 bg-black/45" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                                        <button
                                            type="button"
                                            onClick={() => setIsVideoLoaded(true)}
                                            className="absolute inset-0 flex items-center justify-center"
                                            aria-label="Reproduzir vídeo de apresentação"
                                        >
                                            <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-accent bg-background/85 text-accent transition-transform duration-300 hover:scale-105">
                                                <Play className="ml-1 h-8 w-8 fill-current" />
                                            </span>
                                        </button>
                                        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/70 px-4 py-3 text-xs uppercase tracking-[0.16em] text-white/70">
                                            {hasVideoUrl
                                                ? "Vídeo de apresentação da operação comercial"
                                                : "VSL em preparação: estrutura visual já aplicada"}
                                        </div>
                                    </>
                                ) : (
                                    <iframe
                                        ref={iframeRef}
                                        title="Vídeo Agência Juri"
                                        src="about:blank"
                                        data-src={HERO_VIDEO_SRC}
                                        className="absolute inset-0 h-full w-full border-0 bg-black"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
