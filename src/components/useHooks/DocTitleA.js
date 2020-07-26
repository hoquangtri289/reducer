import React, { useState } from "react";
import useDocTitle from "../../hooks/useDocTitle";

const DocTitleA = () => {
    let [count, setCount] = useState(0);
    let handleClickCount = () => {
        setCount(count + 1);
    };

    useDocTitle(count);
    return (
        <div>
            <button onClick={handleClickCount}>Click Change DocTitle A</button>
            <span>Count: {count}</span>
        </div>
    );
};

export default DocTitleA;
