import React from 'react';

const LiveComponent = () => {

    const tileStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '300px',
        height: '150px',
        margin: '20px',
        borderRadius: '10px',
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#ffffff',
        backgroundColor: '#4caf50',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out',
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#f7f9fc',
        minHeight: '100vh',
    };

    return (
        <div style={containerStyle}>
            <h1>
                hiii
            </h1>
            <div
                style={tileStyle}
                onClick={() => alert('Live Room')}
            >
                Live Room
            </div>
        </div>
);

};

export default LiveComponent;