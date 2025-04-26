
import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
function LoginComponent(props) {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);

    };

    const onHandleGmail = (creds) => {
        const decodeUserDetails = jwtDecode(creds.credential);
        const reqBody = {
            firstName: decodeUserDetails.given_name,
            lastName: decodeUserDetails.family_name,
            email: decodeUserDetails.email,
            image: decodeUserDetails.picture,
            signIn: false
        }
        axios.post("http://localhost:3001/userDetails/signUp", reqBody)
            .then((res) => {
                console.log(res);
                navigate('/home');
            })
            .catch((err) => {
                console.log(err);
            })
        navigate('/home');
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
            <button onClick={() => navigate('/signup')}>Create your account</button><br /><br />
            or
            <GoogleLogin
                onSuccess={(creds) => { onHandleGmail(creds) }}
                onError={() => console.log("Login Failed")
                } />
        </div>
    );

}

export default LoginComponent;