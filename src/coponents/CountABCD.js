import React, { useReducer } from "react";

import CountA from "./CountA";
import CountB from "./CountB";

let initCount = 0;
let reducer = (state, action) => {
    switch (action.type) {
        case "cong": {
            return state + 1;
        }
        case "tru": {
            return state - 1;
        }
        case "reset": {
            return initCount;
        }
        default: {
            return state;
        }
    }
};

let CountContext = React.createContext();

function CountABCD() {
    const [count, dispatch] = useReducer(reducer, initCount);
    return (
        <CountContext.Provider
            value={{ countState: count, dispatchCount: dispatch }}
        >
            <div style={{ border: "1px solid grey" }}>
                <h3>Count Lồng Nhau Sâu:  {count}</h3>
                <CountA />
                <CountB />
            </div>
        </CountContext.Provider>
    );
}

export { CountABCD as default, CountContext };
