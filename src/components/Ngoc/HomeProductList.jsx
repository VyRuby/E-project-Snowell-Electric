import React, { useState } from 'react';
import products from '../../data/products.json';
import HomeProductCard from './HomeProductCard';


export default function HomeProductList() {
    return (
        <>
            <div className="container my-5">
                <div className="row justify-content-center">
                    {products.map(product => (
                        <div
                            className="col-6 col-sm-4 col-md-3 mb-4"
                            key={product.id}>
                            <HomeProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}