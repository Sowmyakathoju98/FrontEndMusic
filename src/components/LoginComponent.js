
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

        const reqBody = {
            email: email,
            password: password
        };

        axios.post("http://localhost:3001/userDetails/login", reqBody)
            .then((res) => {
                console.log("Login successful:", res.data);
                // Navigate to home or handle success
                const userData = {
                    name: res?.data?.user?.firstName,
                    image: res?.data?.user?.image
                };
                localStorage.setItem('user', JSON.stringify(userData));
                navigate('/home');
            })
            .catch((err) => {
                if (err.response) {
                    // Backend returned an error response
                    alert(err.response.data.message); // Display the error message as an alert
                } else {
                    // Handle error (e.g., show error message to the user)
                    console.error("Login failed:", err.response ? err.response.data : err.message);
                    alert("Login failed:" + (err.response ? err.response.data.message : err.message));
                }
            });
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
                // Navigate to home or handle success
                const userData = {
                    name: res?.data?.user?.firstName,
                    image: res?.data?.user?.image
                };
                console.log(userData);

                localStorage.setItem('user', JSON.stringify(userData));
                navigate('/home');
            })
            .catch((err) => {
                console.log(err);
            })
        navigate('/home');
    };
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f5f5f5'
        }}>
            <div style={{
                width: '400px',
                padding: '30px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                backgroundColor: 'white'
            }}>
                <h2 style={{
                    textAlign: 'center',
                    marginBottom: '20px',
                    color: '#333'
                }}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Email:</label>
                        <input
                            type="email"
                            value={email}
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '10px',
                                borderRadius: '5px',
                                border: '1px solid #ccc',
                                fontSize: '16px'
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Password:</label>
                        <input
                            type="password"
                            value={password}
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '10px',
                                borderRadius: '5px',
                                border: '1px solid #ccc',
                                fontSize: '16px'
                            }}
                        />
                    </div>
                    <button type="submit" style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '5px',
                        border: 'none',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        fontSize: '16px',
                        cursor: 'pointer'
                    }}>
                        Login
                    </button>
                </form>
                <div style={{
                    textAlign: 'center',
                    margin: '20px 0',
                    color: '#777'
                }}>
                    or
                </div>
                <GoogleLogin
                    onSuccess={(creds) => onHandleGmail(creds)}
                    onError={() => console.log("Login Failed")}
                    style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '5px',
                        border: 'none',
                        backgroundColor: '#4285F4',
                        color: 'white',
                        fontSize: '16px',
                        cursor: 'pointer'
                    }}
                />
                <div style={{
                    textAlign: 'center',
                    marginTop: '20px'
                }}>
                    <button onClick={() => navigate('/signup')} style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#4CAF50',
                        fontSize: '16px',
                        cursor: 'pointer',
                        textDecoration: 'underline'
                    }}>
                        Create your account
                    </button>
                </div>
            </div>
        </div>
    );

}

export default LoginComponent;