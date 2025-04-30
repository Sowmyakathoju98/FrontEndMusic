import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const App = () => {
    const navigate = useNavigate();
    const [roomLink, setRoomLink] = useState('');

    const createRoom = () => {
        const uniqueId = Math.random().toString(36).substring(2, 8);
        const link = `${window.location.origin}/room/${uniqueId}`;
        const storedUser = localStorage.getItem('user');
        console.log(storedUser.email)
        setRoomLink(link);
        const reqBody = {
            userId : JSON.parse(storedUser).email,
            roomId : uniqueId
        }
        axios.post("http://localhost:3001/roomDetails/createRoom", reqBody)
            .then((res) => {
                // setIsInRoom(true);
                 
                localStorage.setItem('isInRoom', true);
                navigate(`/home`);
                // Navigate to home or handle success
                // navigate(`/live/${uniqueId}`);
            })
            .catch((err) => {
                console.log(err);
            })
    };

    const joinRoom = () => {
        alert('Joining a room...');
        // Need to add the email in that DB
    };

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

    const tileHoverStyle = {
        transform: 'scale(1.05)',
    };

    return (
        <div style={containerStyle}>
            <div
                style={tileStyle}
                onClick={createRoom}
                onMouseEnter={(e) => (e.currentTarget.style.transform = tileHoverStyle.transform)}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
                Create Room
            </div>
            <div
                style={tileStyle}
                onClick={joinRoom}
                onMouseEnter={(e) => (e.currentTarget.style.transform = tileHoverStyle.transform)}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
                Join Room
            </div>
            {roomLink && (
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <p>Room Link:</p>
                    <a
                        href={roomLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: '#0078d7',
                            textDecoration: 'none',
                            fontSize: '16px',
                            fontWeight: 'bold',
                        }}
                    >
                        {roomLink}
                    </a>
                </div>
            )}
        </div>
    );
};

export default App;
