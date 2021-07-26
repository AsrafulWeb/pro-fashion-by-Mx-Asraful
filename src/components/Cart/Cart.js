import React, { useState } from 'react';
import './Cart.css'

const Cart = () => {

    const [cartItems, setCartItems] = useState(null)

    return (
        <div className="cartComp">
            <div className="container">
                <h1 className="mt-4">Shopping cart</h1>
                <div className="row">
                    {
                        cartItems ?
                            <>
                                <div className="col-sm-4 cart-order-summary">
                                    <h4 className="py-2 bg-light cart-order-summary-title">
                                        <span className="ms-3">Order Summary</span>
                                    </h4>
                                    <div className="cart-order-summary-options px-4">
                                        <div className="mt-3 text-secondary">Shipping and additional costs are calculated based on values you have entered.</div>
                                        <hr />
                                        <div className="cart-order-summary-order-subtotal d-flex">
                                            <h5 className="me-auto">Order Subtotal</h5>
                                            <h5 className="text-secondary">$0.00</h5>
                                        </div>
                                        <hr />
                                        <div className="cart-order-summary-order-subtotal d-flex">
                                            <h5 className="me-auto">Shipping and handling</h5>
                                            <h5 className="text-secondary">$10.00</h5>
                                        </div>
                                        <hr />
                                        <div className="cart-order-summary-order-subtotal d-flex">
                                            <h5 className="me-auto">Tax</h5>
                                            <h5 className="text-secondary">$0.00</h5>
                                        </div>
                                        <hr />
                                        <div className="cart-order-summary-order-subtotal d-flex">
                                            <h5 className="me-auto">Total</h5>
                                            <h4 className="text-dark">$0.00</h4>
                                        </div>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <div className="text-center mt-5 pt-5">
                                    <span>Don't have any item in your cart.</span>
                                </div>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;