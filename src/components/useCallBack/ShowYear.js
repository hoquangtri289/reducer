import React from 'react'

function ShowYear({year}) {
    console.log('ShowYear');
    return (
        <div>
            ShowYear: {year}
        </div>
    )
}

export default React.memo(ShowYear)
