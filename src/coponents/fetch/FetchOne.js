import React, { useState, useEffect, useContext, useRef } from "react";
import { MyTheme } from "../../App";

export default function FetchOne() {
    let [loading, setLoading] = useState(true);
    let [data, setData] = useState({});
    let [error, setError] = useState("");
    let myThem = useContext(MyTheme);
    let [id, setId] = useState(1);
    let timeId = useRef();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => response.json())
            .then((value) => {
                setLoading(false);
                setData(value);
                setError("");
            })
            .catch(() => {
                setLoading(false);
                setData({});
                setError("Error: ko the fetch");
            });
    }, [id]);

    useEffect(() => {
        timeId.current = setInterval(handleClickSetId, 1000);
        return () => {
            clearInterval(timeId.current);
        };
    });
    let handleClickSetId = () => {
        let id = Math.random() * 100;
        setId(parseInt(id) === 0 ? 1 : parseInt(id));
    };

    let handleClickClearTimeId = () => {
        clearInterval(timeId.current);
    };
    return (
        <React.Fragment>
            {loading ? (
                "Dag tai ..."
            ) : (
                <div style={{ width: myThem.width, border: myThem.border }}>
                    <div
                        style={{
                            padding: myThem.padding,
                            color: myThem.color,
                            backgroundColor: myThem.backgroundcolor,
                        }}
                    >
                        {data.id}
                    </div>
                    <div
                        style={{
                            borderBottom: myThem.title.border,
                        }}
                    >
                        {data.title}
                    </div>
                    <div>{data.body}</div>
                </div>
            )}
            {error ? <div>{error}</div> : null}
            <button
                style={{
                    color: myThem.color,
                    padding: myThem.padding,
                    backgroundColor: myThem.backgroundcolor,
                    cursor: myThem.cursor,
                }}
                onClick={handleClickSetId}
            >
                Click Start Id
            </button>
            <button
                style={{
                    cursor: myThem.cursor,
                    color: myThem.color,
                    padding: myThem.padding,
                    backgroundColor: myThem.backgroundcolor,
                }}
                onClick={handleClickClearTimeId}
            >
                Clear End Id
            </button>
        </React.Fragment>
    );
}
