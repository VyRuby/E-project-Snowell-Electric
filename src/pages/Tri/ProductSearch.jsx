import React, { useState } from 'react';

const ProductSearch = ({ products, onViewDetails }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('default');

  const handleSearch = (event) => setSearchTerm(event.target.value);
  const handleSortChange = (event) => setSortOption(event.target.value);

  let filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (sortOption === 'low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div>
      {/* Top filters & search/sort bar */}
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
        {/* Filter buttons */}
        <div className="mb-2 mb-md-0">
          <button className="btn btn-outline-primary rounded-pill me-2">All</button>
          <button className="btn btn-outline-primary rounded-pill me-2">Newest</button>
          <button className="btn btn-outline-primary rounded-pill">Best Sellers</button>
        </div>

        {/* Search + sort */}
        <div className="d-flex">
          <input
            type="text"
            className="form-control rounded-pill me-2"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <select
            className="form-select rounded-pill"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="default">Sort by: Price</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="row g-3">
        {filteredProducts.map(product => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4">
            <div className="card h-100 text-center">
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top p-3"
                style={{ height: '150px', objectFit: 'contain' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.brand}</p>
                <p className="fw-bold">${product.price}</p>
                <button
                  className="btn btn-primary rounded-pill"
                  onClick={() => onViewDetails(product)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSearch;
