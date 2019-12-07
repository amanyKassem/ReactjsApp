import React from 'react';

const MemoComp = ({name}) => {
    console.log('memo comp')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)