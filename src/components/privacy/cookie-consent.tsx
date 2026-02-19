"use client";

import { useEffect } from "react";
// import "klaro/dist/klaro.css"; // Disable default styles
import "@/app/klaro.css"; // Import custom theme
import { klaroConfig } from "@/config/klaro";

export function KlaroConsent() {
    useEffect(() => {
        // Dynamic import to avoid SSR issues
        import("klaro/dist/klaro-no-css.js").then((Klaro) => {
            const config = { ...klaroConfig };
            // @ts-ignore
            if (!window.klaro) {
                // @ts-ignore
                Klaro.setup(config);
            }
        });
    }, []);

    return null;
}
