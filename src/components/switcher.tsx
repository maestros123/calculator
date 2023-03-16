
export const Switcher = ({activeButton, setActiveButton, setResult, setTmpResult, itemRefs}: {activeButton: number, setActiveButton: any, setResult: any, setTmpResult: any, itemRefs: any}) => {

    function handleSwitcherClick(index:number) {
        setActiveButton(index);
        if (activeButton === 0) {
            itemRefs.current.forEach((item:any) => {
                if (item.parentElement.className === 'elements') {
                    item.draggable = false;
                    item.style.opacity = '0.5';
                }
            })
        } else {
            setResult('0')
            setTmpResult('0')
            itemRefs.current.forEach((item:any) => {
                if (item.parentElement.className === 'elements') {
                    item.style.opacity = '1';
                    item.draggable = true;
                }
            })
        }

    }

    return (
        <div className='buttons'>
            <button onClick={() => handleSwitcherClick(1)} className={activeButton === 1 ? 'active' : ''}><img src="runtime.svg" alt=""/>Runtime</button>
            <button onClick={() => handleSwitcherClick(0)} className={activeButton === 0 ? 'active' : ''}><img src="constructor.svg" alt=""/> Constructor</button>
        </div>
    )
}
