import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel"; // if using react-bootstrap
import { Link } from "react-router-dom";
import productsData from "../../data/products.json"; 
export default function ProductDetails({ product, onClose }) {
  if (!product) return null;

  return (
    <div
      className="modal fade show"
      style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-lg"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{product.name}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {/* Carousel */}
            <Carousel>
              {product.images && product.images.length > 0 ? (
                product.images.map((img, idx) => (
                  <Carousel.Item key={idx}>
                    <img
                      className="d-block w-100"
                      src={`/${img}`}
                      alt={`Slide ${idx}`}
                      style={{ height: "300px", objectFit: "contain" }}
                    />
                  </Carousel.Item>
                ))
              ) : (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/placeholder.jpg"
                    alt="No image"
                    style={{ height: "300px", objectFit: "contain" }}
                  />
                </Carousel.Item>
              )}
            </Carousel>

            {/* Product info */}
            <h4 className="mt-3">{product.name}</h4>
            <p>{product.brand}</p>
            <p>
              {product.price !== undefined
                ? `$${product.price.toFixed(2)}`
                : "Price not available"}
            </p>

            {/* Product details table */}
            {product.details && (
              <table className="table table-bordered mt-3">
                <tbody>
                  {Object.entries(product.details).map(([key, value], idx) => (
                    <tr key={idx}>
                      <th>{key}</th>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

