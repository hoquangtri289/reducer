import {useState} from 'react';

let useCouter = (initCouter = 0, value = 1) => {
    let [count, setCount] = useState(initCouter);
    let handleClickCong = () => {
        setCount(count + value);
    }
    let handleClickTru = () => {
        setCount(count - value);
    }
    let handleClickReset = () => {
        setCount(initCouter);
    }
    return [count, handleClickCong, handleClickTru, handleClickReset];
}

export default useCouter;