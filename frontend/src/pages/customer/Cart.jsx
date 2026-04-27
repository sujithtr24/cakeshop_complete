import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Cart = () => {

  const [cart, setCart] = useState([
    { id: 1, name: "Chocolate Cake", price: 500, qty: 1 },
    { id: 2, name: "Vanilla Cake", price: 400, qty: 2 }
  ]);

  const increase = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const decrease = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    ));
  };

  const remove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h2>My Cart</h2>

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {cart.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>₹{item.price}</td>
                <td>
                  <button onClick={() => decrease(item.id)}>-</button>
                  <span className="mx-2">{item.qty}</span>
                  <button onClick={() => increase(item.id)}>+</button>
                </td>
                <td>₹{item.price * item.qty}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => remove(item.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h4>Total: ₹{total}</h4>
      </div>

      <Footer />
    </>
  );
};

export default Cart;