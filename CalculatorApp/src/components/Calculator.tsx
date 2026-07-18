import { useState } from "react";
import Display from "./Display";
import Keypad from "./Keypad";
import ThemeToggle from "./ThemeToggle";
import useCalculator from "../hooks/useCalculator";
import evaluateExpression from "../utils/evaluateExpression";
import History from "./HistoryDrawer";
import useKeyboard from "../hooks/useKeyboard";
import useTheme from "../hooks/useTheme";

function Calculator(){

    // const handleClick=(value:string)=>{

    //     console.log(value);

    // };
    
    const {
        expression,
        result,
        history,
        setHistory,
        setExpression,
        setResult
    } = useCalculator();

    const { theme, toggleTheme } = useTheme();

    const [showHistory, setShowHistory] = useState(false);

    const buttons = [

    "AC", "⌫", "%", "÷",

    "7", "8", "9", "×",

    "4", "5", "6", "-",

    "1", "2", "3", "+",

    "+/-", "0", ".", "="

  ];

  const operators = ["+", "-", "×", "÷"];

  const handleClick=(value:string)=>{

        if(value==="AC"){
            setExpression("");
            setResult("");
            return;
        }

        if(value==="⌫"){
            setExpression((prev) => prev.slice(0, -1));
            return;
        }

        if (value === "="){
            try {
                // Clean trailing operators if any exist
                let cleanedExpr = expression.trim();
                while (operators.includes(cleanedExpr.slice(-1))) {
                    cleanedExpr = cleanedExpr.slice(0, -1);
                }
                
                if (cleanedExpr === "") {
                    return;
                }

                const answer = evaluateExpression(cleanedExpr);
                if(!isNaN(answer)){
                    const answerText = answer.toString();
                    setResult(answerText);
                    setHistory(prev => [
                       ...prev,
                       {
                        expression: cleanedExpr,
                        result: answerText
                       }
                    ]);
                } else {
                    setResult("Error");
                }
            } catch (e: any) {
                setResult(e.message || "Error");
            }
            return;
        }

        // Sign Toggle (+/-)
        if (value === "+/-") {
            setExpression((prev) => {
                if (prev === "") return prev;
                
                let lastOperatorIdx = -1;
                for (let i = prev.length - 1; i >= 0; i--) {
                    if (operators.includes(prev[i])) {
                        if (prev[i] === "-" && (i === 0 || operators.includes(prev[i - 1]))) {
                            continue;
                        }
                        lastOperatorIdx = i;
                        break;
                    }
                }

                if (lastOperatorIdx === -1) {
                    if (prev.startsWith("-")) {
                        return prev.slice(1);
                    } else {
                        return "-" + prev;
                    }
                } else {
                    const before = prev.slice(0, lastOperatorIdx + 1);
                    const lastNumber = prev.slice(lastOperatorIdx + 1);
                    if (lastNumber.startsWith("-")) {
                        return before + lastNumber.slice(1);
                    } else {
                        return before + "-" + lastNumber;
                    }
                }
            });
            return;
        }

        // Percentage (%)
        if (value === "%") {
            setExpression((prev) => {
                if (prev === "") return prev;
                
                let lastOperatorIdx = -1;
                for (let i = prev.length - 1; i >= 0; i--) {
                    if (operators.includes(prev[i])) {
                        if (prev[i] === "-" && (i === 0 || operators.includes(prev[i - 1]))) {
                            continue;
                        }
                        lastOperatorIdx = i;
                        break;
                    }
                }

                if (lastOperatorIdx === -1) {
                    const num = Number(prev);
                    if (isNaN(num)) return prev;
                    return (num / 100).toString();
                } else {
                    const before = prev.slice(0, lastOperatorIdx + 1);
                    const lastNumber = prev.slice(lastOperatorIdx + 1);
                    const num = Number(lastNumber);
                    if (isNaN(num) || lastNumber === "") return prev;
                    return before + (num / 100).toString();
                }
            });
            return;
        }

        if(value==="."){
            setExpression((prev) => {
                if (prev === "") return "0.";
                const lastChar = prev.slice(-1);
                
                if (operators.includes(lastChar)) {
                    return prev + "0.";
                }
                
                const parts = prev.split(/[\+\-×÷]/);
                const lastNumber = parts[parts.length - 1];
                
                if (lastNumber.includes(".")) {
                    return prev;
                }
                
                return prev + ".";
            });
            return;
        }

        if(operators.includes(value)){
            setExpression((prev) => {
                if (prev === "") return prev;
                const lastChar = prev.slice(-1);
                if(operators.includes(lastChar)){
                    return prev.slice(0,-1) + value;
                }
                return prev + value;
            
            });
            return;
        }

        if(!isNaN(Number(value))){
            setExpression((prev) => prev + value);
            return;
        }
    };
    useKeyboard({ onKeyPress: handleClick });

    return(

        <div className="calculator">

            <History 
                history={history} 
                isOpen={showHistory} 
                onClose={() => setShowHistory(false)} 
                onClear={() => setHistory([])}
            />

            <div className="header">

                <button className="calc-btn" onClick={() => setShowHistory(true)}>
                    ☰
                </button>

                <ThemeToggle

                    theme={theme}

                    toggleTheme={toggleTheme}

                />

            </div>

            <Display

            // expression="25+18"
            // result="43"

                expression={expression}
                result={result}

            />

            <Keypad 
                buttons={buttons} 
                operators={operators} 
                onButtonClick={handleClick} 
            />

        </div>
        

    );

}

export default Calculator;