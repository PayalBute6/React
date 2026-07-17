export function precedence(operator: string): number {

    switch (operator) {

        case "+":
        case "-":
            return 1;

        case "×":
        case "÷":
            return 2;

        default:
            return 0;

    }

}

export function calculate(
    left: number,
    right: number,
    operator: string
): number {

    switch (operator) {

        case "+":
            return left + right;

        case "-":
            return left - right;

        case "×":
            return left * right;

        case "÷":
            return left / right;

        default:
            throw new Error("Invalid operator");

    }

}