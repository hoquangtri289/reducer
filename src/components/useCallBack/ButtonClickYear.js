import React, { useContext } from "react";
import { MyTheme } from "../../App";

function ButtonClickYear({ handleClickYear }) {
    let myTheme = useContext(MyTheme);
    console.log("ButtonClickYear");
    return (
        <button
            style={{
                padding: myTheme.padding,
                color: myTheme.color,
                backgroundColor: myTheme.backgroundcolor,
            }}
            onClick={handleClickYear}
        >
            Button Click Year
        </button>
    );
}

export default React.memo(ButtonClickYear);
