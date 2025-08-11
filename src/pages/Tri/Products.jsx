import React, { useState, useEffect } from "react";
import productsData from "../../data/products.json";
import ProductDetails from "./ProductDetails";
import ProductSearch from "./ProductSearch";

const categories = [
  { name: "LED and Lightning", sub: [{ name: "LED" }, { name: "CFL" }] },
  { name: "Fans", sub: [{ name: "Standing Fan" }, { name: "A-C Fan" }] },
  { name: "Heater" },
  { name: "Vacuum Cleaner", sub: [{ name: "Handheld" }, { name: "Cordless" }, { name: "Robot" }] },
  { name: "Air Purifier" },
  { name: "Geysers" },
  { name: "Kitchen Appliances" }
];

const Products = () => {
  const [expanded, setExpanded] = useState({});
  const [selected, setSelected] = useState({});
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleExpand = (category) => {
    setExpanded((prev) => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const toggleSelect = (category) => {
    setSelected((prev) => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  useEffect(() => {
    const selectedKeys = Object.keys(selected).filter((key) => selected[key]);
    if (selectedKeys.length === 0) {
      setFilteredProducts(productsData);
    } else {
      setFilteredProducts(
        productsData.filter(
          (product) =>
            selectedKeys.includes(product.category) ||
            selectedKeys.includes(product.type)
        )
      );
    }
  }, [selected]);

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* Sidebar */}
      <div style={{ width: "250px", padding: "10px", border: "1px solid #ccc" }}>
        <h3>Product Categories</h3>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          {categories.map((cat) => (
            <li key={cat.name} style={{ marginBottom: "5px" }}>
              <label style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="checkbox"
                  checked={selected[cat.name] || false}
                  onChange={() => {
                    toggleSelect(cat.name);
                    if (cat.sub) toggleExpand(cat.name);
                  }}
                />
                <span style={{ marginLeft: "8px" }}>{cat.name}</span>
                {cat.sub && (
                  <button
                    style={{
                      marginLeft: "auto",
                      border: "none",
                      background: "transparent",
                      cursor: "pointer"
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpand(cat.name);
                    }}
                  >
                    {expanded[cat.name] ? "▲" : "▼"}
                  </button>
                )}
              </label>
              {cat.sub && expanded[cat.name] && (
                <ul style={{ listStyle: "none", paddingLeft: "20px" }}>
                  {cat.sub.map((subCat) => (
                    <li key={subCat.name}>
                      <label>
                        <input
                          type="checkbox"
                          checked={selected[subCat.name] || false}
                          onChange={() => toggleSelect(subCat.name)}
                        />
                        <span style={{ marginLeft: "8px" }}>{subCat.name}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h3>Products</h3>
        <ProductSearch
          products={filteredProducts}
          onViewDetails={setSelectedProduct}
        />
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Products;
