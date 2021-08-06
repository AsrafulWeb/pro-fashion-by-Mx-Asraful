import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../CartContext/CartContext';
import './Cart.css'
import CartItem from './CartItem/CartItem';

const Cart = () => {

    const { cartItems } = useCart()

    var array = [
        {
            num: 1
        },
        {
            num: 5
        },
        {
            num: 3
        },
        {
            num: 6
        },
    ];

    const sortedDt = array.sort((a, b) => {
        return a.num - b.num
    })

    useEffect(() => {
        if (cartItems) {
            fetch("http://localhost:3001/products-by-multi-id", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(cartItems)
            })
                // .then(res => res)
                .then(data => console.log(data))
                .catch(err => console.log(err))
        } else {

        }
    }, [cartItems])


    return (
        <div className="cartComp">
            <div className="container">
                <h1 className="mt-4">Shopping cart</h1>
                <div className="row">
                    {
                        cartItems?.length ?
                            <>
                                <div className="col-sm-4" style={{ padding: "0" }}>
                                    <div style={{ position: "sticky", top: "0", paddingTop: "50px", paddingBottom: "50px" }}>
                                        <div className="cart-order-summary">
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
                                    </div>
                                </div>
                                <div className="col-sm-8 cart-order-items py-5 px-5">
                                    {
                                        cartItems?.map(dt => (

                                            <CartItem dt={dt} />
                                        ))
                                    }
                                </div>
                            </>
                            :
                            <>
                                <div className="text-center mt-5 pt-5">
                                    <br />
                                    <span>Don't have any item in your cart.</span>
                                    <br /><br /><br />
                                    <Link to="/" className="btn btn-success btn-sm mb-5" >Shop Now</Link>
                                </div>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;