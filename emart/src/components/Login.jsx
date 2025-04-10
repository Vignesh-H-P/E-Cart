import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            navigate('/');
        }
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body p-4">
                            <h2 className="text-center mb-4">Login</h2>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    className="form-control mb-3"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <input
                                    type="password"
                                    className="form-control mb-3"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button type="submit" className="btn btn-primary w-100">Login</button>
                            </form>
                            <p className="text-center mt-3">
                                Don't have an account? <NavLink to="/register">Register</NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;