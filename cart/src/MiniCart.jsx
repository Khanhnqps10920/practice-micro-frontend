import React, { useState, useEffect } from "react";

import { cart, clearCart } from "./cart";
import { currency } from "home/products";

export default function MiniCart() {
  const [items, setItems] = useState(undefined);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    setItems(cart.values?.cartItems);

    return cart.subscribe((c) => {
      setItems(c?.cartItems);
    });
  }, []);

  if (!items) return null;

  return (
    <>
      <span onClick={() => setShowCart(!showCart)} id="showCart">
        <i className="ri-shopping-cart-2-fill text-2xl">{items?.length}</i>
      </span>

      {showCart && (
        <>
          <div
            style={{
              width: 300,
              top: "2rem",
            }}
            className="absolute p-5 border-4 border-blue-800 bg-white"
          >
            <div
              className="grid gap-3 text-sm text-black" 
              style={{
                gridTemplateColumns: "1fr 3fr 10fr 2fr",
              }}
            >
              {items.map((item) => {
                return (
                  <React.Fragment key={item.id}>
                    <div>{item.quantity}</div>
                    <img src={item.image} alt={item.name} className="max-h-6" />
                    <div>{item.name}</div>
                    <div className="text-right">
                      {currency.format(item.quantity * item.price)}
                    </div>
                  </React.Fragment>
                );
              })}

              <div></div>
              <div></div>
              <div></div>
              <div>
                {currency.format(
                  items.reduce((a, v) => a + v.quantity * v.price, 0)
                )}
              </div>
            </div>

            <div className="flex">
              <button
                onClick={() => clearCart()}
                className="bg-white border border-green-800 text-green-800 py-2 px-5 rounded-md"
              >
                Clear Cart
              </button>
              <button className=" ml-5 border bg-green-800 text-white py-2 px-5 rounded-md">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
