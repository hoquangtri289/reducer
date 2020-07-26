import React from "react";

import Count from "./components/count/Count";
import FetchOne from "./components/fetch/FetchOne";
import FetchMany from "./components/fetch/FetchMany";
import CountABCD from "./components/count/CountABCD";
import UseCallBack from "./components/useCallBack/Parent";
import Memo from "./components/useMemo/Memo";
import DocTitleA from "./components/useHooks/DocTitleA";
import DocTitleB from "./components/useHooks/DocTitleB";
import CountOne from "./components/useCount/CountOne";
import CountTwo from "./components/useCount/CountTwo";
import UseFormInput from "./components/useFormInput/useFormInput";

let theme = {
    margin: 16,
    border: "1px solid grey",
    padding: 16,
    borderBottom: "10px solid blue",
    backgroundColor: "#fafafa",
    light: {
        color: "white",
        padding: 16,
        backgroundcolor: "#f50057",
        width: 500,
        border: "1px solid #33eaff",
        title: {
            border: "10px solid #33eaff",
        },
        cursor: "pointer",
    },
    dark: {
        color: "white",
        padding: 16,
        backgroundcolor: "#2a3eb1",
        width: 500,
        border: "1px solid #637bfe",
        title: {
            border: "10px solid #637bfe",
        },
        cursor: "pointer",
    },
};

let MyTheme = React.createContext(theme);
let arrBody = [
    {
        title:
            "Su Dung Hook Cua React: useState, useReducer, useContext, useEffect",
        value: [<Count />, <CountABCD />],
    },
    {
        title: "Su Dung Hook Cua React: useCallBack. f12 len nhin",
        value: [<UseCallBack />],
    },
    {
        title: "Su Dung Hook Cua React: useMemo",
        value: [<Memo />],
    },
    {
        title: "Su Dung Hook Tuy Chinh: useDocTitle",
        value: [<DocTitleA />, <DocTitleB />],
    },
    {
        title: "Su Dung Hook Tuy Chinh: useCouter",
        value: [<CountOne />, <CountTwo />],
    },
    {
        title: "Su Dung Hook Tuy Chinh: useFormInput",
        value: [<UseFormInput />],
    },
    {
        title:
            "Su Dung Hook Cua React: useState, useEffect, useContext, useRef",
        value: [<FetchOne />],
    },
    {
        title:
            " Su Dung Hook Cua React: useState, useEffect, useContext, useReducer",
        value: [<FetchMany />],
    },
];

function App() {
    return (
        <MyTheme.Provider value={theme.light}>
            <h2
                style={{
                    padding: theme.padding,
                    margin: theme.margin,
                    backgroundColor: theme.backgroundColor,
                    border: theme.border,
                }}
            >
                Xin Chào Bạn Đến Với React Hooks. Từ Những Kiến Thức Căn Bản Đến
                Chuyên Sâu
            </h2>

            {arrBody.map((doc, index) => {
                return (
                    <div
                        key={index}
                        style={{ border: theme.border, margin: theme.margin }}
                    >
                        <h3
                            style={{
                                borderBottom: theme.borderBottom,
                                padding: theme.padding,
                            }}
                        >
                            {doc.title}
                        </h3>
                        <div>{doc.value}</div>
                    </div>
                );
            })}
        </MyTheme.Provider>
    );
}

export { App as default, MyTheme };
