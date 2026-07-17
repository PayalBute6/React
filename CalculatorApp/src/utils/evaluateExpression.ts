export default function evaluateExpression(expression: string): number {
    const exp = expression
    .replace(/×/g, "*")
    .replace(/÷/g, "/");

    try {
        const result =  Function(
            `"use strict"; return (${exp})`
        )();
        return Number(result);

    } catch {
        return NaN;
    }
}