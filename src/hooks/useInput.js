import {useState} from 'react';

let useInput = (initValue) => {
    let [value, setValue] = useState(initValue);

    let handleReset = () => {
        setValue(initValue);
    };
    
    let bind = {
        value,
        onChange: (e) => {
            setValue(e.target.value);
        }
    }
    return [value, bind, handleReset];
}

export default useInput;