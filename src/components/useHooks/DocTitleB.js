import React, { useState } from "react";
import useDocTitle from "../../hooks/useDocTitle";

function DocTitleB() {
    let [count, setCount] = useState(0);
    let handleClickCount = () => {
        setCount(count + 1);
    };
    useDocTitle(count);
    return (
        <div>
            <button onClick={handleClickCount}>Click Change DocTitle B</button>
            <span>Count B: {count}</span>
        </div>
    );
}

export default DocTitleB;
