import Button from "./Button";

interface KeypadProps {
    buttons: string[];
    operators: string[];
    onButtonClick: (value: string) => void;
}

function Keypad({ buttons, operators, onButtonClick }: KeypadProps) {
    return (
        <div className="keypad">
            {buttons.map((btn) => (
                <Button
                    key={btn}
                    value={btn}
                    operator={operators.includes(btn)}
                    onClick={onButtonClick}
                />
            ))}
        </div>
    );
}

export default Keypad;
