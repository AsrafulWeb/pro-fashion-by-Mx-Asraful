import React, { useEffect, useState } from 'react';
import Product from '../../Reusable/Product/Product';

const SomeFeaturedProducts = () => {

    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/products")
            .then(res => res.json())
            .then(data => setProduct(data.splice(0, 10)))
            .catch(err => console.log(err.message))
    }, [])

    console.log(products)

    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        products?.map(dt => (
                            <div className="col-2 mb-5">
                                <Product productData={dt} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default SomeFeaturedProducts;