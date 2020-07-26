import React, { useContext } from "react";
import { MyTheme } from "../../App";

const ButtonClickAge = ({ handleClickAge }) => {
    let myTheme = useContext(MyTheme);
    console.log("ButtonClickAge");
    return (
        <button
            style={{
                padding: myTheme.padding,
                color: myTheme.color,
                backgroundColor: myTheme.backgroundcolor,
            }}
            onClick={handleClickAge}
        >
            Button Click Age
        </button>
    );
};

export default React.memo(ButtonClickAge);
