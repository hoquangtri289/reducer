import React from 'react'

const ButtonClickAge = ({handleClickAge}) => {
    console.log('ButtonClickAge');
    return (
        <button onClick={handleClickAge}>Button Click Age</button>
    )
}

export default React.memo(ButtonClickAge);
