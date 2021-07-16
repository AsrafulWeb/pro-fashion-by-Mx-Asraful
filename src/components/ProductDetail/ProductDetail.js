import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'


const ProductDetail = ({ modal }) => {

    const path = useParams()



    return (
        <div className="productDetailComp">
            <div className={modal && "container"}>
                <div className="productDetail">

                </div>
            </div>
        </div>
    );
};

export default ProductDetail;