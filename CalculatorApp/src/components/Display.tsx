interface Props{
    expression:string;
    result:string;
}

function Display({expression, result}:Props){

    return (
        <div className="display">
            <div className="expression">
                {expression || 0}
            </div>
            <div className="result">
                {result || 0}
            </div>
        </div>
    );

}

export default Display;