import { useEffect } from "react";

interface UseKeyboardProps {
    onKeyPress: (value: string) => void;
}

export default function useKeyboard({ onKeyPress }: UseKeyboardProps) {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const { key } = event;

            // Map keyboard keys to calculator buttons
            if (!isNaN(Number(key))) {
                onKeyPress(key);
            } else if (key === "+") {
                onKeyPress("+");
            } else if (key === "-") {
                onKeyPress("-");
            } else if (key === "*") {
                onKeyPress("×");
            } else if (key === "/") {
                onKeyPress("÷");
            } else if (key === "Enter" || key === "=") {
                onKeyPress("=");
            } else if (key === "Backspace") {
                onKeyPress("⌫");
            } else if (key === "Escape" || key === "c" || key === "C") {
                onKeyPress("AC");
            } else if (key === ".") {
                onKeyPress(".");
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onKeyPress]);
}
