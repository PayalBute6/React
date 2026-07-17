import { useState } from "react";
import type { HistoryItem } from "../types/history";

export default function useCalculator(){
    const [expression, setExpression ] = useState("");
    const [result, setResult] = useState("");
    const [history, setHistory] = useState<HistoryItem[]>([]);

    return{
        expression,
        result,
        setExpression,
        setResult,
        history,
        setHistory,
    };
}