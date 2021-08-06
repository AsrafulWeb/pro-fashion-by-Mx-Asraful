import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../../CartContext/CartContext';

const CartItem = ({ dt }) => {

    const [quantity, setQuantity] = useState(1)
    const [itemData, setItemData] = useState(null)

    const { updateItem, deleteItem } = useCart()

    // get data for display items info
    useEffect(() => {
        fetch(`http://localhost:3001/product/${dt.id}`)
            .then(res => res.json())
            .then(data => {
                setQuantity(dt.qty)
                setItemData(data)
            })
            .catch(err => console.log(err.message))
    }, [dt])

    // Update a item data
    const updateItemQty = () => {
        if (quantity === dt.qty) {

        } else {
            updateItem({
                id: itemData.id,
                size: dt.size,
                qty: quantity,
                num: dt?.num
            })
        }
    }

    return (
        <div className="cart-item d-flex mb-4">
            {
                itemData ?
                    <>
                        <div className="col-2 cart-item-img pe-3">
                            <img src={itemData?.imgs[0]} alt="" className="img-fluid" />
                        </div>
                        <div className="col-4 cart-item-title mt-2 pe-4">
                            <Link to={"/product/" + itemData?.for + "/" + itemData?.categories + "/" + itemData?.id} style={{ textDecoration: "none" }} className="text-dark"><h5 className="text-secondary">{itemData?.title}</h5> </Link>
                            <div className="text-secondary">{dt?.size ? "Size: " + dt?.size : ""}</div>
                        </div>
                        <div className="col-1 cart-item-price mt-4">
                            <h5 className="text-dark">${itemData?.price}</h5>
                        </div>
                        <div className="col-3 cart-item-quantity d-flex mt-4">
                            <button onClick={() => {
                                quantity > 1 && setQuantity(quantity - 1)
                                updateItemQty()
                            }} className="cartItemQuantityMinus">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                                    <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z" />
                                </svg>
                            </button>
                            <div className="cartItemQuantity text-center">
                                <h5>{quantity}</h5>
                            </div>
                            <button onClick={() => {
                                setQuantity(quantity + 1)
                                updateItemQty()
                            }} className="cartItemQuantityPlus">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                    <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
                                </svg>
                            </button>
                        </div>
                        <div className="col-1 cart-item-total-price mt-4">
                            <h5 className="text-dark">${itemData?.price * quantity}.00</h5>
                        </div>
                        <div className="col-1 text-center cart-item-action ps-5 mt-4">
                            <button onClick={() => deleteItem(dt?.id)} style={{ border: "none", background: "none" }} className="text-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                                </svg>
                            </button>
                        </div>
                    </>
                    :
                    <div className="cartItemLoader text-center w-100">
                        <div className="text-center mt-4">Loading...</div>
                    </div>
            }
        </div>
    );
};

export default CartItem;