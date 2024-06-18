// Skeleton
import React from 'react';

const Skeleton = ({width, height, round, cn}) => {
    return (
        <React.Fragment>
            
            <div className={`cf_skeleton ${round ? 'round' : ''} ${cn ? cn : ''}`} style={{ width: `${width}`, height: `${height}` }}></div>

        </React.Fragment>
    )
}

export default Skeleton;