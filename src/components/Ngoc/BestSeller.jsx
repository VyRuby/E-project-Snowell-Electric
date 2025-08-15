import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function BestSeller() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/bestSeller.json") // đọc file json trong public/data
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error loading data:", err));
  }, []);

  return (
    <div className="container my-5">
      <div className="d-flex overflow-auto" style={{ gap: "15px" }}>
        {products.map(product => (
          <div
            key={product.id}
            className="card"
            style={{ minWidth: "200px", flex: "0 0 auto" }}
          >
            <img
              src={product.image}
              className="card-img-top"
              alt={product.name}
              style={{ height: "150px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h6 className="card-title">{product.name}</h6>
              <p className="card-text">${product.price}</p>
              <Link
                to={`/product-detail/${product.id}`}
                className="btn btn-primary btn-sm"
              >
                Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
