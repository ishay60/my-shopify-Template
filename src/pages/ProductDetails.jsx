import { useContext } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import Button from "../components/Button"; // Import the Button component

import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p className="mt-2">{product.description}</p>
      <p className="mt-2 font-bold">${product.price.toFixed(2)}</p>
      <Button
        variant="primary"
        onClick={() => addToCart(product)}
        className="mt-4"
      >
        Add to Cart
      </Button>
    </div>
  );
}

export default ProductDetails;
