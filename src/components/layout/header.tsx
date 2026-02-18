"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isExiting, setIsExiting] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    const closeMenu = () => {
        setIsExiting(true);
        setIsOpen(false);
    };

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 24);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    // Close mobile menu on route change
    useEffect(() => {
        if (isOpen) {
            setIsExiting(true);
            setIsOpen(false);
        }
    }, [pathname]);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                isScrolled && !(isOpen || isExiting)
                    ? "bg-background/80 backdrop-blur-md border-border py-4 shadow-sm"
                    : "bg-transparent border-transparent py-6"
            )}
        >
            <div className="container flex items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2 group z-50">
                    <div className={cn(
                        "relative transition-all duration-300 ease-in-out",
                        isScrolled
                            ? "w-40 h-16 md:w-48 md:h-20"
                            : "w-56 h-24 md:w-72 md:h-32"
                    )}>
                        <Image
                            src="/logo.svg"
                            alt="Agência Juri"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium tracking-wide transition-all uppercase relative group",
                                pathname === link.href
                                    ? "text-accent font-bold"
                                    : "text-muted-foreground hover:text-primary"
                            )}
                        >
                            {link.label}
                            <span className={cn(
                                "absolute -bottom-1 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left",
                                pathname === link.href && "scale-x-100"
                            )} />
                        </Link>
                    ))}
                    <Button variant="default" size="sm" className="rounded-full px-6" asChild>
                        <Link href={SITE_CONFIG.links.whatsapp} target="_blank">
                            Falar no WhatsApp
                        </Link>
                    </Button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden z-50 p-2 text-primary"
                    onClick={() => {
                        if (isOpen) setIsExiting(true);
                        setIsOpen(!isOpen);
                    }}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence onExitComplete={() => setIsExiting(false)}>
                    {isOpen && (
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="fixed inset-0 z-[100] bg-background md:hidden flex flex-col pt-32 px-8 gap-8"
                        >
                            {/* Close Button inside Overlay */}
                            <button
                                className="absolute top-6 right-4 p-2 text-primary"
                                onClick={closeMenu}
                                aria-label="Close menu"
                            >
                                <X size={24} />
                            </button>

                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "text-3xl font-display uppercase tracking-tight border-b border-border/50 pb-4",
                                        pathname === link.href ? "text-accent" : "text-primary"
                                    )}
                                    onClick={closeMenu}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Button size="lg" className="w-full mt-auto mb-8 rounded-full" asChild>
                                <Link href={SITE_CONFIG.links.whatsapp} target="_blank">
                                    Falar no WhatsApp
                                </Link>
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
