import React, { useEffect, useState } from 'react';

const LiveComponent = () => {
    const id = localStorage.getItem('roomId');
    const [roomId, setRoomId] = useState(null);

    useEffect(() => {       
            setRoomId(id);
    }, [id]);

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

    const roomLinkStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '20px',
    };

    const roomIdStyle = {
        fontSize: '20px',
        color: '#4caf50',
        fontWeight: 'bold',
        wordBreak: 'break-word',
    };

    return (
        <div style={containerStyle}>
        <h1 style={roomLinkStyle}>Room Id:</h1>
        {roomId ? (
            <p style={roomIdStyle}>{roomId}</p>
        ) : (
            <p style={{ color: '#999' }}>No Room ID Found</p>
        )}
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