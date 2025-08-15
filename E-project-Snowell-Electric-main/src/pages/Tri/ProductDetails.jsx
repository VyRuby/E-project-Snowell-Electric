import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { getProductImages } from '../../utils/imageUtils'; // Import the utility function

export default function ProductDetails({ product, onClose }) {
  if (!product) return null;

  // Function to format key names for display
  const formatKey = (key) => {
    return key
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Function to render value based on its type
  const renderValue = (value) => {
    if (Array.isArray(value)) {
      return (
        <ul>
          {value.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );
    }
    return value?.toString() || 'N/A';
  };

  return (
    <div
      className="modal fade show"
      style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{product.name}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <Carousel>
              {getProductImages(product).map((img, idx) => (
                <Carousel.Item key={idx}>
                  <img
                    className="d-block w-100"
                    src={img}
                    alt={`Slide ${idx}`}
                    style={{ height: "300px", objectFit: "contain" }}
                    onError={(e) => {
                      e.target.src = `${process.env.PUBLIC_URL}/images/placeholder.jpg`;
                    }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
            <h4 className="mt-3">{product.name}</h4>
            <table className="table table-bordered mt-3">
              <tbody>
                {Object.entries(product).map(([key, value], idx) => {
                  if (['images', 'details', 'image', 'status'].includes(key)) {
                    return null;
                  }
                  return (
                    <tr key={idx}>
                      <th>{formatKey(key)}</th>
                      <td>{renderValue(value)}</td>
                    </tr>
                  );
                })}
                {product.details && Object.keys(product.details).length > 0 && (
                  Object.entries(product.details).map(([key, value], idx) => (
                    <tr key={`details-${idx}`}>
                      <th>{formatKey(key)}</th>
                      <td>{renderValue(value)}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}