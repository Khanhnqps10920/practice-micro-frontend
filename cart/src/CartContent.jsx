import React, { useState, useEffect } from "react";
import { cart, clearCart } from "cart/cart";
import { currency } from "home/products";
export const CartContent = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    return cart.subscribe((c) => {
      setItems(c?.cartItems ?? []);
    });
  }, []);

  return (
    <>
      <div className="my-10 grid grid-cols-4 gap-5">
        {items.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <div>{item.quantity}</div>
              <img src={item.image} alt={item.name} className="max-h-6" />
              <div className="text-right">{item.name}</div>
              <div className="text-right">
                {currency.format(item.quantity * item.price)}
              </div>
            </React.Fragment>
          );
        })}
        <div></div>
        <div></div>
        <div></div>
        <div className="text-right">
          {
            currency.format(items.reduce((a, v) => a + v.quantity * v.price, 0))
          }
        </div>
      </div>

      {Boolean(items.length) && (
        <div className="flex-mb-10">
          <div className="flex-grow">
            <button
              onClick={() => clearCart()}
              className="bg-white border border-green-800 text-green-800 py-2 px-5 rounded-md"
            >
              Clear Cart
            </button>
            <button className="bg-white ml-5 border bg-green-800 text-white py-2 px-5 rounded-md">
              Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
};
