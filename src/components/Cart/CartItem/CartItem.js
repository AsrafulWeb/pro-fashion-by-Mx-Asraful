import React from 'react';

const CartItem = () => {
    return (
        <div className="cart-item d-flex">
            <div className="col-2 cart-item-img">
                <img src="https://varkala-react-version.vercel.app/img/product/0987188250_1_1_1.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-4 cart-item-title">
                <h5 className="text-dark">White Tee</h5>
                <div className="text-secondary">Size: M</div>
            </div>
            <div className="col-2 cart-item-quantity">

            </div>
            <div className="col-1 cart-item-price">
                <h4 className="text-dark">$40.00</h4>
            </div>
            <div className="col-2 text-center cart-item-action">
                <button className="text-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                    </svg>
                </button>
            </div>


























        </div>
    );
};

export default CartItem;