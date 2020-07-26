import React, { useState, useMemo } from "react";

function Memo() {
    let [countA, setCountA] = useState(0);
    let [countB, setCountB] = useState(0);

    let handleClickCountA = () => {
        setCountA(countA + parseInt(Math.random() * 100));
    };

    let handleClickCountB = () => {
        setCountB(countB + Math.random() * 100);
    };

    // Chuc nang su dung useMemo
    // Chay ti le treo may thap. Van co do tre nhat dinh.
    // useMemo tra ve bien. Chu ko phai tra ve chuc nang
    // no se chay lai khi bien trong dau ngoac [] co thay doi

    let isSmall = useMemo(() => {
        let i = 0;
        while (i < 2e9) {
            i++;
        }
        return countA % 2 === 0;
    }, [countA]);

    // Chuc nang ko su dung useMemo
    // Treo may cuc cao

    // let isSmall = () => {
    //     let i = 0;
    //     while(i < 2e9){
    //         i++
    //     }
    //     return countA % 2 === 0;
    // }
    return (
        <React.Fragment>
            <div>
                <button onClick={handleClickCountA}>Click Count A</button>
                {isSmall ? "chan" : "le"}
                {/* {isSmall() ? 'chan' : 'le'} */}
                Count A: {countA}
            </div>
            <div>
                <button onClick={handleClickCountB}>Click Count B</button>
                Count B: {countB}
            </div>
        </React.Fragment>
    );
}

export default Memo;
