import React, { useState, useContext } from "react";
import useDocTitle from "../../hooks/useDocTitle";
import { MyTheme } from "../../App";

function DocTitleB() {
    let myTheme = useContext(MyTheme);
    let [count, setCount] = useState(0);
    let handleClickCount = () => {
        setCount(count + 1);
    };
    useDocTitle(count);
    return (
        <div>
            <button
                style={{
                    padding: myTheme.padding,
                    color: myTheme.color,
                    backgroundColor: myTheme.backgroundcolor,
                }}
                onClick={handleClickCount}
            >
                Click Change DocTitle B
            </button>
            <span>Count B: {count}</span>
        </div>
    );
}

export default DocTitleB;
