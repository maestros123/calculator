
export const Equal = ({ setResult, tmpResult, setTmpResult, activeButton }: { setResult: any, tmpResult: any, setTmpResult: any, activeButton: number }) => {

    function handleEqualClick() {
        if (activeButton === 0) {
            return;
        }
        const inter = eval(tmpResult.replace(/,/, '.'));

        setResult(String(inter).replace('.', ','))
        setTmpResult(String(inter))
    }

    return (
        <div className='container'>
            <button className='equal-sign' onClick={() => handleEqualClick()}>=</button>
        </div>

    )
}
