import { Link } from "react-router-dom";
import { products } from "./product";
import "./Product.css";

const Product = () => {
  return (
    <div className="product-page">
      <h1 className="product-heading">Upcycled Furniture Collection</h1>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.afterImg}
              alt={product.title}
              className="product-img"
            />

            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">₹{product.price}</p>
            <p className="product-materials">{product.materials}</p>
            <p className="product-artisan">By {product.artisan}</p>

            <div className="product-buttons">
              <Link to={`/product/${product.id}`}>
                <button className="view-btn view">View in 3D</button>
              </Link>
              <button className="view-btn purchase">Purchase</button>
            </div>
          </div>
        ))}
      </div>

      <div className="coming-soon">
        <h2>More Upcycled Creations Coming Soon...</h2>
        <p>
          We’re always crafting something new. Stay tuned for more eco-friendly
          designs!
        </p>
      </div>
    </div>
  );
};

export default Product;
