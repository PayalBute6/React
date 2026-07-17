// export default function evaluateExpression(expression: string): number {
//     const exp = expression
//     .replace(/×/g, "*")
//     .replace(/÷/g, "/");

//     try {
//         const result =  Function(
//             `"use strict"; return (${exp})`
//         )();
//         return Number(result);

//     } catch {
//         return NaN;
//     }
// }

import { calculate, precedence } from "./operators";

export default function evaluateExpression(expression: string): number {

    const numbers: number[] = [];
    const operators: string[] = [];

    let currentNumber = "";

    function applyTopOperation() {

        const operator = operators.pop()!;
        const right = numbers.pop()!;
        const left = numbers.pop()!;

        const result = calculate(left, right, operator);

        numbers.push(result);

    }

    for (const char of expression) {

        if ("0123456789.".includes(char)) {

            currentNumber += char;

        } else {

            numbers.push(Number(currentNumber));
            currentNumber = "";

            while (
                operators.length > 0 &&
                precedence(operators[operators.length - 1]) >= precedence(char)
            ) {
                applyTopOperation();
            }

            operators.push(char);

        }

    }

    numbers.push(Number(currentNumber));

    while (operators.length > 0) {

        applyTopOperation();

    }

    return numbers[0];

}