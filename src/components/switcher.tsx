
export const Switcher = ({activeButton, setActiveButton}: {activeButton: any, setActiveButton: any}) => {

    function handleSwitcherClick(index:number) {
        setActiveButton(index);
    }

    return (
        <div className='buttons'>
            <button  onClick={() => handleSwitcherClick(1)} className={activeButton === 1 ? 'active' : ''}><img src="runtime.svg" alt=""/>Runtime</button>
            <button  onClick={() => handleSwitcherClick(0)} className={activeButton === 0 ? 'active' : ''}><img src="constructor.svg" alt=""/> Constructor</button>
        </div>
    )
}
