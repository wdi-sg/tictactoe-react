import React from 'react';

const Square = ({ value, onClick }) => {
    const squareClass = value ? `squares ${value}` : `squares`;

    return (
        <button className={squareClass} onClick={onClick}>
            {value}
        </button>
    )
}

export default Square;