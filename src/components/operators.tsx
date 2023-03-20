
export const Operators = ({ setResult, tmpResult, setTmpResult, activeButton, itemRefs }: { setResult: any, tmpResult: any, setTmpResult: any, activeButton: number, itemRefs: any }) => {
    const operators = ['/', 'x', '-', '+']

    function handleOperatorClick(op: string) {
        if (activeButton === 0 || itemRefs.current[1].parentElement.className === 'elements'  || itemRefs.current[0].parentElement.className === 'elements') {
            return;
        }

        // Если пользователь нажимает несколько раз на оператор
        let res = tmpResult
        if (res.slice(res.length - 1) === '+' || res.slice(res.length - 1) === '-' || res.slice(res.length - 1) === '*' || res.slice(res.length - 1) === '/') {
            res = res.slice(0, res.length - 1)
            setTmpResult(res);
        }

        const inter = eval(res.replace(/,/, '.'))


        if  (op === "x") {
            setTmpResult(inter + '*')
        } else {
            setTmpResult(inter + op)
        }

        if (String(inter).replace('.', ',') === 'Infinity') {
            setResult('Не определено')
            setTmpResult('0')
        } else {
            setResult(String(inter).replace('.', ','))
        }

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
