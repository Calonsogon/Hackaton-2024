import React from 'react';
import  "./Resetbutton.scss"

const ResetButton = ({ onReset }) => {
    return (
        <button type="button" onClick={onReset}>
            Reset
        </button>
    );
};

export default ResetButton;
