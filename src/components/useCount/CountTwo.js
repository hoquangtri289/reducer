import React, { useContext} from "react";
import { MyTheme } from "../../App";
import useCouter from "../../hooks/useCouter";

let CountTwo = () => {
    let myThem = useContext(MyTheme);
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
                        padding: myThem.padding,
                        cursor: myThem.cursor,
                    }}
                    onClick={handleClickCong}
                >
                    +
                </button>
                <button
                    style={{
                        padding: myThem.padding,
                        cursor: myThem.cursor,
                    }}
                    onClick={handleClickTru}
                >
                    -
                </button>
                <button
                    style={{
                        padding: myThem.padding,
                        cursor: myThem.cursor,
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
