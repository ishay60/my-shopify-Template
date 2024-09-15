import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Button from "../components/Button"; // Import the Button component

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  if (cartItems.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold">Your Cart</h2>
      <ul className="mt-4">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center border-b py-2"
          >
            <div>
              <h3 className="font-bold">{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
            </div>
            <Button
              variant="destructive"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <p className="font-bold">Total: ${totalPrice.toFixed(2)}</p>
        <Button variant="primary" className="mt-2">
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
}

export default Cart;
