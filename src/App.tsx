import React, {useState, useRef} from 'react';
import './App.css';
import {Numbers} from "./components/numbers";
import {Display} from "./components/display";
import {Operators} from "./components/operators";
import {Equal} from "./components/equal";
import {Switcher} from "./components/switcher";

function App() {
    const [result, setResult] = useState('0')
    const [tmpResult, setTmpResult] = useState('0')
    const [activeButton, setActiveButton] = useState(0);

    const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const elementRef = useRef<HTMLDivElement>(null)

    // Коду ниже требуется значительный рефакторинг
    function handleDragStart(e: any, index: number) {
        setActiveItemIndex(index);
    }

    function handleDragOver(e: any) {
        e.preventDefault();
        if (e.target.className === 'dropped filled') {
            e.target.style.backgroundColor = '#F0F9FF'
        }

        if (e.target.closest('.item')) {
            e.target.closest('.item').classList.add('line')
        }


    }

    function handleDrop(e: any) {
        e.preventDefault();

        const droppedElement = itemRefs.current[activeItemIndex as number];
        const targetElement = e.target;
        if (targetElement.closest('.elements')) {
            return
        }
        droppedElement!.draggable = false

        if (targetElement.className === "dropped filled") {
            targetElement.classList.remove('filled')
            targetElement.style.backgroundColor = '#FFFFFF'
        }

        const prevEl = elementRef.current!.childNodes[activeItemIndex! - 1]
        const clone = droppedElement!.cloneNode(true)

        if (targetElement.closest('.dropped')) {  //Если элемент переносится на нужную доску

            if (activeItemIndex === 0) { //Если это дисплей, он всегда ложится сверху
                targetElement.closest('.dropped').prepend(droppedElement!);
                elementRef.current!.prepend(clone)
            } else if (targetElement.closest('.item')) {  //Если элемент переносится на элемент
                targetElement.closest('.item').after(droppedElement);
                e.target.closest('.item').classList.remove('line')
                prevEl.after(clone)
            } else {
                targetElement.appendChild(droppedElement);
                prevEl.after(clone)
            }
        }


        const elem: any = elementRef.current!.children[activeItemIndex!]
        elem.style.opacity = 0.5
        setActiveItemIndex(null);

    }

    function handleDragEnd(e: any) {
        e.target.closest('.item').classList.remove('line')
    }

    function handleDragLeave(e: any) {
        e.target.closest('.item').classList.remove('line')
    }

    function handleDoubleClick(e:any, index: number) {
        if (e.target.closest('.dropped') && activeButton === 0) {
            const deleteElement = elementRef.current!.children[index];
            const elem = e.target.closest('.item');
            elem!.draggable = true
            deleteElement.after(elem)
            deleteElement!.remove()
        }
    }

    return (
        <div className="App">
            <div className="board">
                <div className="elements" ref={elementRef}>
                    <div className="item"  onDoubleClick={e => handleDoubleClick(e, 0)}
                         ref={el => itemRefs.current[0] = el} draggable={true}
                         onDragEnd={handleDragEnd}
                         onDragLeave={handleDragLeave} onDragOver={handleDragOver} onDrop={handleDrop}
                         onDragStart={e => handleDragStart(e, 0)}>
                        <Display result={result} />
                    </div>
                    <div className="item"  onDoubleClick={e => handleDoubleClick(e, 1)}
                         ref={el => itemRefs.current[1] = el} draggable={true}
                         onDragEnd={handleDragEnd}
                         onDragLeave={handleDragLeave} onDragOver={handleDragOver} onDrop={handleDrop}
                         onDragStart={e => handleDragStart(e, 1)}>
                        <Operators setResult={setResult} tmpResult={tmpResult} setTmpResult={setTmpResult}
                                   activeButton={activeButton} itemRefs={itemRefs}/>
                    </div>
                    <div className="item" onDoubleClick={e => handleDoubleClick(e, 2)}
                         ref={el => itemRefs.current[2] = el} draggable={true}
                         onDragEnd={handleDragEnd}
                         onDragLeave={handleDragLeave} onDragOver={handleDragOver} onDrop={handleDrop}
                         onDragStart={e => handleDragStart(e, 2)}>
                        <Numbers result={result} setResult={setResult} tmpResult={tmpResult} setTmpResult={setTmpResult}
                                 activeButton={activeButton} itemRefs={itemRefs}/>
                    </div>
                    <div className="item"  onDoubleClick={e => handleDoubleClick(e, 3)}
                         ref={el => itemRefs.current[3] = el} draggable={true}
                         onDragEnd={handleDragEnd}
                         onDragLeave={handleDragLeave} onDragOver={handleDragOver} onDrop={handleDrop}
                         onDragStart={e => handleDragStart(e, 3)}>
                        <Equal setResult={setResult} tmpResult={tmpResult} setTmpResult={setTmpResult}
                               activeButton={activeButton} itemRefs={itemRefs}/>
                    </div>
                </div>
            </div>
            <div className="board">
                <div className="switch__buttons">
                    <Switcher activeButton={activeButton} setActiveButton={setActiveButton} setResult={setResult} setTmpResult={setTmpResult} itemRefs={itemRefs}/>
                </div>
                <div className="dropped filled" onDragOver={handleDragOver} onDrop={handleDrop}>

                </div>
            </div>
        </div>
    );
}

export default App;
