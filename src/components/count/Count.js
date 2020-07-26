import React, { useContext, useReducer } from "react";
import { MyTheme } from "../../App";

let initCouter = { count: 0 };
let reducer = (state, action) => {
    switch (action.type) {
        case "cong": {
            return { count: state.count + 1 };
        }
        case "tru": {
            return { count: state.count - 1 };
        }
        case "reset": {
            return initCouter;
        }
        default: {
            return state;
        }
    }
};

export default function Count() {
    let myThem = useContext(MyTheme);
    const [state, dispatch] = useReducer(reducer, initCouter);
    return (
        <React.Fragment>
            <div>{state.count}</div>
            <button
                style={{
                    color: myThem.color,
                    padding: myThem.padding,
                    backgroundColor: myThem.backgroundcolor,
                }}
                onClick={() => dispatch({ type: "cong" })}
            >
                +
            </button>
            <button
                style={{
                    color: myThem.color,
                    padding: myThem.padding,
                    backgroundColor: myThem.backgroundcolor,
                }}
                onClick={() => dispatch({ type: "tru" })}
            >
                -
            </button>
            <button
                style={{
                    color: myThem.color,
                    padding: myThem.padding,
                    backgroundColor: myThem.backgroundcolor,
                }}
                onClick={() => dispatch({ type: "reset" })}
            >
                Reset
            </button>
        </React.Fragment>
    );
}
