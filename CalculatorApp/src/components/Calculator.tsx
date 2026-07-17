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

            // console.log("Equal pressed");
            // console.log("Expression:", expression);
            const answer = evaluateExpression(expression);
            if(!isNaN(answer)){

                const answerText = answer.toString();

                setResult(answerText);

                setHistory(prev => [
                    
                   ...prev,
                   {
                    expression,
                    result: answerText
                   }

                ]);
                                
            }else{
                setResult("Error");
            }
            return;
        }

        if(value==="."){
            setExpression((prev) => prev + ".");
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