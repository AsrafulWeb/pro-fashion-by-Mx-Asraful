import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import loader from './../../Logo/loader.svg';
import './ProductDetail.css'


const ProductDetail = ({ modal, modalId }) => {

    const [product, setProduct] = useState(null)
    const [image, setImage] = useState(null)
    const [carouselActive, setCarouselActive] = useState(0)

    const { pdId } = useParams()
    const path = window.location.pathname

    useEffect(() => {
        if (modal) {
            fetch(`http://localhost:3001/product/${modalId}`)
                .then(res => res.json())
                .then(data => {
                    setProduct(data)
                    setImage(data.imgs[0])
                })
        } else {
            fetch(`http://localhost:3001/product/${pdId}`)
                .then(res => res.json())
                .then(data => {
                    setProduct(data)
                    setImage(data.imgs[0])
                })
        }
    }, [pdId, modal])

    useEffect(() => {

    }, [pdId, modalId])

    return (
        <div className="productDetailComp">
            <div className={modal ? " " : "container"}>
                {
                    // product ?
                    <div className="productDetail row mt-5">
                        <div className="col-sm-7 text-center pe-3">
                            <div className="pd-images-carousel">
                                <div className="pd-images-carousel-items">
                                    {
                                        modal ?
                                            <div class="pd-images-carousel-item carousel-item-active" >
                                                {
                                                    product?.imgs.map(dt => (
                                                        <img src={dt} class="d-block w-100 carousel-item-img" style={{ margin: "0 auto" }} alt="..." />
                                                    ))
                                                }
                                            </div>
                                            :
                                            <div className="pd-images-carousel-thumbnails d-flex my-3">
                                                {
                                                    product?.imgs.map(dt => (
                                                        <div onClick={() => { setImage(dt); setCarouselActive(product?.imgs.indexOf(dt)) }} className={product?.imgs.indexOf(dt) === carouselActive ? "pd-images-carousel-thumbnail-item thumbnail-item-active me-2 thumbnail-item-" + product?.imgs.indexOf(dt) : "pd-images-carousel-thumbnail-item me-2 thumbnail-item-" + product?.imgs.indexOf(dt)}>
                                                            <img src={dt} alt="" className="img-fluid thumbnail-item-img" />
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5 ps-5 productDetailText">
                            <h2 className="mb-4 product-detail-title">{product?.title}</h2>
                            <div className="productDetailPriceAndReviews d-flex">
                                <div className="productDetailPrice me-auto">$ {product?.price}.00</div>
                                <div className="productDetailReviews me-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill me-1" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill me-1" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill me-1" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill me-1" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star me-3" viewBox="0 0 16 16">
                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                    </svg>
                                    <span> 7 REVIEWS</span>
                                </div>
                            </div>
                            <div className="product-detail-description mt-3">
                                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                            </div>
                            {
                                product?.sizes === null ? "" :
                                    <div className="productDetailSizes d-flex mt-4">
                                        <h4>Sizes: </h4>
                                        <select class="ms-2 form-select form-select-sm" style={{ width: "35%" }} aria-label="Default select example">
                                            {
                                                product?.sizes.map(dt => (
                                                    <option value={dt}>{dt}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                            }
                            <div className="product-detail-quantity-and-add-cart d-flex mt-4">
                                <input type="number" className="product-detail-quantity" />
                                <button className="product-detail-add-cart-btn">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    // :
                    // <div className="productDetailLoader text-center">
                    //     <img style={{ width: "60px" }} src={loader} alt="" className="img-fluid mt-5" />
                    // </div>
                }
            </div>
        </div>
    );
};

export default ProductDetail;