import React from 'react'

function ButtonClickYear({handleClickYear}) {
    console.log('ButtonClickYear');
    return (
        <button onClick={handleClickYear}>Button Click Year</button>
    )
}

export default React.memo(ButtonClickYear);
