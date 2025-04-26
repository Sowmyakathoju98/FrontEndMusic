import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePageComponent() {
    const navigate = useNavigate();
    const storedUser = localStorage.getItem('user');
    const [user, setUser] = useState(JSON.parse(storedUser));

    useEffect(() => {
        // Retrieve user data from localStorage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, [storedUser]);

    return (
        <div>
            {/* Navigation Bar */}
            <nav style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 20px',
                backgroundColor: '#4CAF50',
                color: 'white'
            }}>
                {/* Logo and App Name */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/727/727245.png"
                        alt="Music Logo"
                        style={{ width: '30px', height: '30px', marginRight: '10px' }}
                    />
                    <h1 style={{ margin: 0, fontSize: '24px' }}>TuneTogether</h1>
                </div>

                {user ? (
                    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <img
                            src={user.image}
                            alt="User"
                            title={user.name}
                            style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }}
                        />
                        <span style={{ fontSize: '16px', marginRight: '10px' }}>{user.name}</span>
                        <button
                            onClick={() => {
                                if (window.confirm("Are you sure you want to logout?")) {
                                    localStorage.removeItem('user'); // Clear user data
                                    setUser(null); // Reset user state
                                    navigate('/home'); // Redirect to Home page
                                }
                            }}
                            style={{
                                padding: '5px 10px',
                                backgroundColor: '#f44336',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontSize: '14px',
                                color: 'white'
                            }}
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={() => navigate('/login')}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#61dafb',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            color: '#282c34'
                        }}
                    >
                        Login
                    </button>
                )}
            </nav>


            {/* Main Content */}
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h2>Welcome to TuneTogether!</h2>
                <p>Discover and enjoy music with your friends.</p>
            </div>
        </div>
    );
}

export default HomePageComponent;