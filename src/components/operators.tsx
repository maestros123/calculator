
export const Operators = ({ setResult, tmpResult, setTmpResult, activeButton }: { setResult: any, tmpResult: any, setTmpResult: any, activeButton: number }) => {
    const operators = ['/', 'x', '-', '+']

    function handleOperatorClick(op: string) {
        if (activeButton === 0) {
            return;
        }
        const inter = eval(tmpResult.replace(/,/, '.'))

        if  (op === "x") {
            setTmpResult(inter + '*')
        } else {
            setTmpResult(inter + op)
        }

        setResult(String(inter).replace('.', ','))
    }

    return (
        <div className='container'>
            <div className='row'>
                {operators.map((op, i) =>
                    <div
                        key = {i}
                        className="math-sign"
                        onClick={() => handleOperatorClick(op)}
                    >{op}</div>
                )}
            </div>
        </div>
    )
}
