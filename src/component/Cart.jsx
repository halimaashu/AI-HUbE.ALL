import React from "react";
import CartCard from "./CartCard";

const Cart = ({ cart, setCart }) => {
  const totalPrise = cart.reduce((sum, item) => {
    return sum + item.price;
  }, 0);
  return (
    <div className=" py-3.5 space-y-7 p-5">
      <h1 className="text-4xl font-bold">Your Cart</h1>
      {cart.length === 0 ? (
        <h1 className="text-red-500 text-3xl font-bold text-center">
          There is no cart got models tab to select cart
        </h1>
      ) : (
        cart.map((cartItem) => (
          <CartCard key={cartItem.id} cartItem={cartItem} cart={cart} setCart={setCart} />
        ))
      )}

      {/* total box */}
      <div className="bg-black flex justify-between text-white p-10 rounded-lg font-bold text-3xl">
        <h1>total</h1>
        <h1 className="text-red-500">$ {totalPrise}</h1>
      </div>
      <button
        onClick={() => setCart([])}
        className="btn bg-red-500 text-white py-10 px-4 rounded-lg w-full"
      >
        proceed to checkout
      </button>
    </div>
  );
};

export default Cart;
