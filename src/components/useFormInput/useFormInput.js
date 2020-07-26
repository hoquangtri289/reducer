import React, { useContext } from "react";
import { MyTheme } from "../../App";
import useInput from "../../hooks/useInput";

const useFormInput = () => {
    let myTheme = useContext(MyTheme);
    let [name, bindName, handleResetName] = useInput("");
    let [age, bindAge, handleResetAge] = useInput("");

    let handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify({ name, age }));
        handleResetName();
        handleResetAge();
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label id="name">Name</label>
                    <input
                        style={{
                            padding: myTheme.padding,
                        }}
                        {...bindName}
                        htmlFor="name"
                    />
                </div>
                <div>
                    <label id="age">Age</label>
                    <input
                        style={{
                            padding: myTheme.padding,
                        }}
                        {...bindAge}
                        htmlFor="age"
                    />
                </div>
                <button
                    style={{
                        padding: myTheme.padding,
                    }}
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default useFormInput;
