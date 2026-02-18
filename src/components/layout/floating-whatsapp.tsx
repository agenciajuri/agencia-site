"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export function FloatingWhatsApp() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="fixed bottom-6 right-6 z-40"
        >
            <Link
                href={SITE_CONFIG.links.whatsapp}
                target="_blank"
                className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#128C7E] transition-colors hover:scale-110 duration-200"
                aria-label="Falar no WhatsApp"
            >
                <MessageCircle size={28} fill="white" className="text-white" />
            </Link>
        </motion.div>
    );
}
