
export const Equal = ({ setResult, tmpResult, setTmpResult, activeButton, itemRefs }: { setResult: any, tmpResult: any, setTmpResult: any, activeButton: number, itemRefs: any }) => {

    function handleEqualClick() {
        if (activeButton === 0  || itemRefs.current[3].parentElement.className === 'elements' || itemRefs.current[0].parentElement.className === 'elements') {
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
