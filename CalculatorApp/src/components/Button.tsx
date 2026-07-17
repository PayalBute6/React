interface Props{
    value: string;
    onClick:(value:string)=>void;
    operator?:boolean;

}

function Button({
    value, 
    onClick, 
    operator=false
}:Props){
    return (
        <button
        className={
            operator ? "calc-btn operator" : "calc-btn"
        }
        onClick={()=>onClick(value)}
        >
            {value}
        </button>
    );

}

export default Button;
    

