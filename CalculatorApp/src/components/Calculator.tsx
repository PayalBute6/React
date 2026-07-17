import Display from "./Display";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";
import useCalculator from "../hooks/useCalculator";
import evaluateExpression from "../utils/evaluateExpression";

function Calculator(){

    // const handleClick=(value:string)=>{

    //     console.log(value);

    // };

    const {
        expression,
        result,
        setExpression,
        setResult
    } = useCalculator();
    const buttons = [

    "AC", "⌫", "%", "÷",

    "7", "8", "9", "×",

    "4", "5", "6", "-",

    "1", "2", "3", "+",

    "+/-", "0", ".", "="

  ];

  const operators = ["+", "-", "×", "÷", "="];

  const handleClick=(value:string)=>{

        if(!isNaN(Number(value))){
            setExpression((prev) => prev + value);
            return;
        }

        if(value==="."){
            setExpression((prev) => prev + ".");
            return;
        }

        if(value==="AC"){
            setExpression("");
            setResult("");
            return;
        }

        if(value==="⌫"){
            setExpression((prev) => prev.slice(0, -1));
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

        if (value === "="){
            const answer = evaluateExpression(expression);
            if(!isNaN(answer)){
                setResult(answer.toString());
            }else{
                setResult("Error");
            }
            return;
        }
    };

    return(

        <div className="calculator">

            <div className="header">

                <button className="calc-btn">
                    ☰
                </button>

                <ThemeToggle

                    theme="light"

                    toggleTheme={()=>{}}

                />

            </div>

            <Display

            // expression="25+18"
            // result="43"

                expression={expression}
                result={result}

            />

            <div className="keypad">

                {
                buttons.map(btn=>(

                    <Button

                        key={btn}

                        value={btn}

                        operator={
                            ["+","-","×","÷","="].includes(btn)
                        }

                        onClick={handleClick}

                    />

                ))}

            </div>

        </div>

    );

}

export default Calculator;