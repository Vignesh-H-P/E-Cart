import React from 'react';
import { NavLink } from 'react-router-dom';

const Cart = () => {
    // Get cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    const removeFromCart = (productId) => {
        const updatedCart = cartItems.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        window.location.reload(); // Refresh to update cart
    };

    const updateQuantity = (productId, change) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === productId && (item.quantity + change) > 0) {
                return { ...item, quantity: item.quantity + change };
            }
            return item;
        });
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        window.location.reload(); // Refresh to update cart
    };

    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (cartItems.length === 0) {
        return (
            <div className="container py-5 text-center">
                <h2>Your cart is empty</h2>
                <NavLink to="/products" className="btn btn-primary mt-3">
                    Continue Shopping
                </NavLink>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <h2 className="mb-4">Shopping Cart</h2>
            <div className="row">
                <div className="col-md-8">
                    {cartItems.map(item => (
                        <div key={item.id} className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-3">
                                    <img src={item.image} className="img-fluid rounded-start" alt={item.title} />
                                </div>
                                <div className="col-md-9">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="card-title">{item.title}</h5>
                                            <button 
                                                className="btn btn-link text-danger" 
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                <i className="fa fa-trash"></i>
                                            </button>
                                        </div>
                                        <p className="card-text">${item.price.toFixed(2)}</p>
                                        <div className="d-flex align-items-center">
                                            <button 
                                                className="btn btn-outline-secondary btn-sm"
                                                onClick={() => updateQuantity(item.id, -1)}
                                            >
                                                -
                                            </button>
                                            <span className="mx-2">{item.quantity}</span>
                                            <button 
                                                className="btn btn-outline-secondary btn-sm"
                                                onClick={() => updateQuantity(item.id, 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Order Summary</h5>
                            <div className="d-flex justify-content-between mb-3">
                                <strong>Total</strong>
                                <strong>${total.toFixed(2)}</strong>
                            </div>
                            <button className="btn btn-primary w-100">
                                Checkout
                            </button>
                            <NavLink to="/products" className="btn btn-outline-primary w-100 mt-2">
                                Continue Shopping
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;