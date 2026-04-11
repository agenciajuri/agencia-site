"use client";

import * as React from "react";

function formatWhatsApp(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 11);

    if (digits.length === 0) {
        return "";
    }

    if (digits.length <= 2) {
        return `(${digits}`;
    }

    if (digits.length <= 7) {
        return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    }

    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

type WhatsAppInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">;

export function WhatsAppInput({ defaultValue = "", ...props }: WhatsAppInputProps) {
    const [value, setValue] = React.useState(() => formatWhatsApp(String(defaultValue)));

    return (
        <input
            {...props}
            value={value}
            inputMode="numeric"
            onChange={(event) => {
                setValue(formatWhatsApp(event.target.value));
            }}
        />
    );
}
