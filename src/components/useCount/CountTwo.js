import React, { useContext } from "react";
import { MyTheme } from "../../App";
import useCouter from "../../hooks/useCouter";

let CountTwo = () => {
    let myTheme = useContext(MyTheme);
    let [count, handleClickCong, handleClickTru, handleClickReset] = useCouter(
        0,
        1
    ); // Su dung hook tuy bien
    return (
        <div>
            <h3>Count Two: {count}</h3>
            <div>
                <button
                    style={{
                        padding: myTheme.padding,
                        cursor: myTheme.cursor,
                        color: myTheme.color,
                        backgroundColor: myTheme.backgroundcolor,
                    }}
                    onClick={handleClickCong}
                >
                    +
                </button>
                <button
                    style={{
                        padding: myTheme.padding,
                        cursor: myTheme.cursor,
                        color: myTheme.color,
                        backgroundColor: myTheme.backgroundcolor,
                    }}
                    onClick={handleClickTru}
                >
                    -
                </button>
                <button
                    style={{
                        padding: myTheme.padding,
                        cursor: myTheme.cursor,
                        color: myTheme.color,
                        backgroundColor: myTheme.backgroundcolor,
                    }}
                    onClick={handleClickReset}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default CountTwo;
