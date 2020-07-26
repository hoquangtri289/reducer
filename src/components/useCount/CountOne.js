import React, {useContext} from 'react'
import { MyTheme } from '../../App';
import useCouter from '../../hooks/useCouter';

const CountOne = () => {
    let myTheme = useContext(MyTheme);
    let [count, handleClickCong, handleClickTru, handleClickReset] = useCouter(10, 10); // su dung hook tuy bien
    return (
        <div>
            <h3>Count One: {count}</h3>
            <div>
                <button
                    style={{
                        padding: myTheme.padding,
                        cursor: myTheme.cursor,
                    }}
                    onClick={handleClickCong}
                >+</button>
                <button
                    style={{
                        padding: myTheme.padding,
                        cursor: myTheme.cursor
                    }}
                    onClick={handleClickTru}
                >-</button>
                <button
                    style={{
                        padding: myTheme.padding,
                        cursor: myTheme.cursor
                    }}
                    onClick={handleClickReset}
                >Reset</button>
            </div>
        </div>
    )
}

export default CountOne


