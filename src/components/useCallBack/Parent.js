import React, { useState, useCallback } from 'react';
import TitleCallBack from './TitleCallBack';
import ShowAge from './ShowAge';
import ButtonClickAge from './ButtonClickAge';
import ShowYear from './ShowYear';
import ButtonClickYear from './ButtonClickYear';

export default function Parent() {
    let [age, setAge] = useState(89);
    let [year, setYear] = useState(2020);

    let handleClickAge = useCallback(() => { // luu tru chuc nang. goi lai khi age thay doi
        setAge(age + 1);
    }, [age]);

    let handleClickYear = useCallback(() => {
        setYear(year + 1);
    }, [year]);

    return(
        <React.Fragment>
            <TitleCallBack />
            <ShowAge age={age} />
            <ButtonClickAge handleClickAge={handleClickAge} />
            <ShowYear year={year} />
            <ButtonClickYear handleClickYear={handleClickYear} />
        </React.Fragment>
    )
}