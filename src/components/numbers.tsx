import './components.scss';

export const Numbers = ({ result, setResult, tmpResult, setTmpResult, activeButton }: { result: any, setResult: any, tmpResult: any, setTmpResult: any, activeButton: number}) => {
    const numbers = [
        ['7', '8', '9'],
        ['4', '5', '6'],
        ['1', '2', '3'],
        ['0', ',']
    ];

    function handleNumberClick(s: string) {
        if (activeButton === 0) {
            return;
        }
        if (s === ',' && result.includes(',')){ // Нельзя несколько запятых
            return;
        }
        if (tmpResult === '0' && s !== ',') {
            setResult(s)
            setTmpResult(s)
        } else {
            const sym = tmpResult.substring(tmpResult.length - 1);
            if (sym === "+" || sym === "-" || sym === "*" || sym === "/") {
                setResult(s)
            } else {
                setResult(result + s)
            }
            setTmpResult(tmpResult + s)
        }
    }

    return (
        <div className="container">
            {numbers.map((row, i) => (
                <div className="row" key={i}>
                    {row.map((num, j) => (
                        <div
                            key={j}
                            className={num === '0' ? 'num-sign big__num' : 'num-sign'}
                            onClick={() => handleNumberClick(num)}
                        >
                            {num}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};
