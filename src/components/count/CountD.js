import React, { useContext } from "react";
import { CountContext } from "./CountABCD";
import { MyTheme } from '../../App';

export default function CountD() {
    const countContext = useContext(CountContext);
    const myThem = useContext(MyTheme);
    return (
        <React.Fragment>
            <h4>CountD: {countContext.countState}</h4>
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
