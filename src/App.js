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

let theme = {
    margin: 16,
    border: "1px solid grey",
    padding: 16,
    borderBottom: "10px solid blue",
    backgroundColor: "#fafafa",
    light: {
        color: "red",
        padding: 16,
        backgroundcolor: "green",
    },
    dark: {
        color: "yellow",
        padding: 16,
        backgroundcolor: "red",
        width: 500,
        border: "1px solid grey",
        title: {
            border: "10px solid green",
        },
        cursor: "pointer",
    },
};

let MyTheme = React.createContext(theme);

function App() {
    return (
        <MyTheme.Provider value={theme.dark}>
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
            <div style={{ border: theme.border, margin: theme.margin }}>
                <h3
                    style={{
                        borderBottom: theme.borderBottom,
                        padding: theme.padding,
                    }}
                >
                    Su Dung Hook Cua React: useState, useReducer, useContext,
                    useEffect
                </h3>
                <Count />
                <CountABCD />
            </div>
            <div style={{ border: theme.border, margin: theme.margin }}>
                <h3
                    style={{
                        borderBottom: theme.borderBottom,
                        padding: theme.padding,
                    }}
                >
                    Su Dung Hook Cua React: useCallBack. f12 len nhin
                </h3>
                <UseCallBack />
            </div>
            <div style={{ border: theme.border, margin: theme.margin }}>
                <h3
                    style={{
                        borderBottom: theme.borderBottom,
                        padding: theme.padding,
                    }}
                >
                    Su Dung Hook Cua React: useMemo
                </h3>
                <Memo />
            </div>
            <div style={{ border: theme.border, margin: theme.margin }}>
                <h3
                    style={{
                        borderBottom: theme.borderBottom,
                        padding: theme.padding,
                    }}
                >
                    Su Dung Hook Tuy Chinh: useDocTitle
                </h3>
                <DocTitleA />
                <DocTitleB />
            </div>
            <div style={{ border: theme.border, margin: theme.margin }}>
                <h3
                    style={{
                        borderBottom: theme.borderBottom,
                        padding: theme.padding,
                    }}
                >
                    Su Dung Hook Tuy Chinh: useCouter
                </h3>
                <CountOne />
                <CountTwo />
            </div>
            <div style={{ border: theme.border, margin: theme.margin }}>
                <h3
                    style={{
                        borderBottom: theme.borderBottom,
                        padding: theme.padding,
                    }}
                >
                    Su Dung Hook Cua React: useState, useEffect, useContext,
                    useRef
                </h3>
                <FetchOne />
            </div>
            <div style={{ border: theme.border, margin: theme.margin }}>
                <h3
                    style={{
                        borderBottom: theme.borderBottom,
                        padding: theme.padding,
                    }}
                >
                    Su Dung Hook Cua React: useState, useEffect, useContext,
                    useReducer
                </h3>
                <FetchMany />
            </div>
        </MyTheme.Provider>
    );
}

export { App as default, MyTheme };
