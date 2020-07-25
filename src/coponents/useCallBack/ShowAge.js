import React from 'react';

function ShowAge({age}){
    console.log('ShowAge');
    return (
        <div>
            ShowAge: {age}
        </div>
    )
}

export default React.memo(ShowAge);