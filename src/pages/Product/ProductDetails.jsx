import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "./product";
import Product3DViewer from "../../components/Product3DViewer";
import DIYTutorial from "../../components/DIYTutorial";
import "./ProductDetails.css"; // ✅ Import external CSS

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-details-page">
      <h1 className="product-details-title">{product.title}</h1>
      <p className="product-details-description">{product.description}</p>

      <div className="product-3d-section">
        <h3>View in 3D:</h3>
        <Product3DViewer modelPath={product.model} />
      </div>

      {/* Optional DIY Tutorial Section */}
      {product.tutorialSteps && product.tutorialSteps.length > 0 && (
        <div className="diy-section">
          <h2>DIY Tutorial</h2>
          <DIYTutorial steps={product.tutorialSteps} />
        </div>
      )}

      <Link to="/products" className="back-btn">← Back to Collection</Link>
    </div>
  );
};

export default ProductDetails;
