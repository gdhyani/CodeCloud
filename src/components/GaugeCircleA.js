"use client";

import GaugeCircle from "@/components/ui/gauge-circle";
import { useEffect, useState } from "react";

export function GaugeCircleA() {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const handleIncrement = (prev) => {
            if (prev === 100) {
                return 0;
            }
            return prev + 10;
        };
        setValue(handleIncrement);
        const interval = setInterval(() => setValue(handleIncrement), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <GaugeCircle
            max={100}
            min={0}
            value={value}
            gaugePrimaryColor="rgb(79 70 229)"
            gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
        />
    );
}
