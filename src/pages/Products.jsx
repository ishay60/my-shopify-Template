import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products or import them from a local file
    setProducts([
      // Example products
      { id: 1, name: "Product 1", price: 10.0, image: "path/to/image1.jpg" },
      { id: 2, name: "Product 2", price: 20.0, image: "path/to/image2.jpg" },
    ]);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.name} />
          <div className="card-content">
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
          </div>
          <div className="card-footer">
            <Link to={`/products/${product.id}`}>
              <button className="btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
