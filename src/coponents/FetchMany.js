import React, {
    useReducer,
    useEffect,
    useRef,
    useState,
    useContext,
} from "react";
import { MyTheme } from "../App";

let initFetch = {
    loading: true,
    data: [],
    error: "",
};

let reducer = (state, action) => {
    switch (action.type) {
        case "FETCH-LOADING": {
            return {
                loading: false,
                data: action.data,
                error: "",
            };
        }
        case "FETCH-ERROR": {
            return {
                loading: false,
                data: [],
                error: "Error: fetch fail",
            };
        }
        default: {
            return state;
        }
    }
};

export default function FetchMany() {
    const [state, dispatch] = useReducer(reducer, initFetch);
    let [search, setSearch] = useState("");
    let myTheme = useContext(MyTheme);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((response) => response.json())
            .then((value) => {
                let arr = value.filter((v) => {
                    return v.title.includes(search);
                });
                dispatch({ type: "FETCH-LOADING", data: arr });
            })
            .catch((error) => {
                dispatch({ type: "FETCH-ERROR" });
            });
    }, [search]);

    let valueSeacrch = useRef("");
    let handleOnchangeSearch = (e) => {
        valueSeacrch.current = e.target.value;
    };
    let handleClickSearch = () => {
        setSearch(valueSeacrch.current);
    };

    return (
        <div>
            <input
                style={{
                    padding: myTheme.padding,
                }}
                type="text"
                onChange={handleOnchangeSearch}
            ></input>
            <button
                style={{
                    color: myTheme.color,
                    padding: myTheme.padding,
                    backgroundColor: myTheme.backgroundcolor,
                    cursor: myTheme.cursor
                }}
                onClick={handleClickSearch}
            >
                Search
            </button>
            Fetch many
            <ol>
                {state.loading
                    ? "Loanding ..."
                    : state.data.map((value) => (
                          <li key={value.id}>{value.title}</li>
                      ))}
                {state.error ? <li>{state.error}</li> : null}
            </ol>
        </div>
    );
}
