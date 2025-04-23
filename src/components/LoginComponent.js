
import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
function LoginComponent(props) {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);

    };

    const handleClick = () => {
        navigate('/signup');
    };
    return (
        <div style={{ maxWidth: '400px', margin: '50px auto' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label>Username:</label><br />
                    <input
                        type="text"
                        value={email}
                        placeholder='Enter your valid email'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Password:</label><br />
                    <input
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form><br />
            or
            <button onClick={() => navigate('/signup')}>Create your account</button>
            or
            <GoogleLogin
                onSuccess={(creds) => {
                    console.log(creds);
                    console.log(jwtDecode(creds.credential));
                }}
                onError={() => console.log("Login Failed")
                } />
        </div>
    );

}

export default LoginComponent;