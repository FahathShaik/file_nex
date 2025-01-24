import React from 'react';
import backButtonIcon from '../assets/left-arrow.png'; // Ensure correct path to your back button image

interface BackButtonProps {
    onClick: () => void;
    style?: React.CSSProperties; // Allow for custom styling if needed
}

const BackButton: React.FC<BackButtonProps> = ({onClick, style}) => {
    return (
        <button
            onClick={onClick}
            className="backButton"
            style={{
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                ...style, // Allow for custom styles
            }}
        >
            <img src={backButtonIcon} alt="Back" style={{width: '30px', height: '30px'}}/>
        </button>
    );
};

export default BackButton;
