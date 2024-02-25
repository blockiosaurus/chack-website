import React from 'react';
import '../styles/styles.scss'; // Import the CSS file where you defined your button styles

const FloatingButton = ({ text, link, style }) => {
    const handleClick = () => {
        window.open(link);
    };

    return (
        <button style={style} className="floating-button" onClick={handleClick}>
            {text}
        </button>
    );
};

export default FloatingButton;
