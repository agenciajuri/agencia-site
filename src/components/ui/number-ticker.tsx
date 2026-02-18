"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface NumberTickerProps {
    value: number;
    direction?: "up" | "down";
    delay?: number; // Delay in seconds
    className?: string;
    decimalPlaces?: number;
    prefix?: string;
    suffix?: string;
}

export default function NumberTicker({
    value,
    direction = "up",
    delay = 0,
    className,
    decimalPlaces = 0,
    prefix = "",
    suffix = "",
}: NumberTickerProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(direction === "down" ? value : 0);
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "0px" });

    useEffect(() => {
        if (isInView) {
            setTimeout(() => {
                motionValue.set(direction === "down" ? 0 : value);
            }, delay * 1000);
        }
    }, [motionValue, isInView, delay, value, direction]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = latest.toFixed(decimalPlaces);
            }
        });
    }, [springValue, decimalPlaces]);

    return (
        <span
            className={cn("inline-block tabular-nums tracking-wider", className)}
        >
            {prefix}
            <span ref={ref} />
            {suffix}
        </span>
    );
}
