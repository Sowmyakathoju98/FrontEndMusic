import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpComponent() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        image: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        console.log(e.target);

        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        axios.post("http://localhost:3001/userDetails/signUp", formData)
            .then((res) => {
                console.log(res);
                navigate('/home');
            })
            .catch((err) => {
                console.log(err);
            })
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
                }}>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>First Name:</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Enter your first name"
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
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Enter your last name"
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
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
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
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
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
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Confirm Password:</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm your password"
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
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Profile Image:</label>
                        <input
                            type="file"
                            name="image"
                            onChange={handleChange}
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
                        Sign Up
                    </button>
                </form>
                <div style={{
                    textAlign: 'center',
                    marginTop: '20px'
                }}>
                    <button onClick={() => navigate('/login')} style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#4CAF50',
                        fontSize: '16px',
                        cursor: 'pointer',
                        textDecoration: 'underline'
                    }}>
                        Already have an account? Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SignUpComponent;