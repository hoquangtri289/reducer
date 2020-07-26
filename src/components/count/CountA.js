import React, { useContext } from "react";
import { CountContext } from "./CountABCD";
import { MyTheme } from "../../App";

export default function CountA() {
    let countContext = useContext(CountContext);
    let myThem = useContext(MyTheme);
    return (
        <React.Fragment>
            CountA: {countContext.countState}
            <button
                style={{
                    padding: myThem.padding,
                    color: myThem.color,
                    backgroundColor: myThem.backgroundcolor
                }}
                onClick={() => countContext.dispatchCount({ type: "cong" })}
            >
                +
            </button>
            <button
                style={{
                    padding: myThem.padding,
                    color: myThem.color,
                    backgroundColor: myThem.backgroundcolor
                }}
                onClick={() => countContext.dispatchCount({ type: "tru" })}
            >
                -
            </button>
            <button
                style={{
                    padding: myThem.padding,
                    color: myThem.color,
                    backgroundColor: myThem.backgroundcolor
                }}
                onClick={() => countContext.dispatchCount({ type: "reset" })}
            >
                Reset
            </button>
        </React.Fragment>
    );
}
