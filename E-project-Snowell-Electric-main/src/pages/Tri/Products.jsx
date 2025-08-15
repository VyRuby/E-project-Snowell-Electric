import React, { useState, useEffect } from "react";
import productsData from "../../data/products.json";
import ProductDetails from "./ProductDetails";
import { Link } from "react-router-dom";



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
        // Get all selected categories/subcategories
        const selectedKeys = Object.keys(selected).filter((key) => selected[key]);

        if (selectedKeys.length === 0) {
            setFilteredProducts(productsData);
        } else {
            setFilteredProducts(
                productsData.filter(
                    (product) =>
                        selectedKeys.includes(product.category) ||
                        selectedKeys.includes(product.subCategory)
                )
            );
        }
    }, [selected]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    return (
        <div style={{ display: "flex", gap: "20px" }}>

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


            <div style={{ flex: 1 }}>
                <h3>Products</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            style={{
                                border: "1px solid #ddd",
                                padding: "10px",
                                borderRadius: "8px",
                                textAlign: "center"
                            }}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                style={{ width: "100%", height: "150px", objectFit: "contain" }}
                            />
                            <h4>{product.name}</h4>
                            <p>{product.brand}</p>
                            <p>${product.price.toFixed(2)}</p>
                            <button
                                style={{ background: "blue", color: "#fff", padding: "5px 10px" }}
                                onClick={() => setSelectedProduct(product)}
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>
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