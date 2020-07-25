import React from 'react';

function TitleCallBack() {
    console.log('TitleCallBack');
    return(
        <h2>
            Hoc su dung: userCallBack
        </h2>
    )
}

export default React.memo(TitleCallBack);