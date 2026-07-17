import { useState } from "react";

export default function useCalculator(){
    const [expression, setExpression ] = useState("");
    const [result, setResult] = useState("");

    return{
        expression,
        result,
        setExpression,
        setResult,
    };
}