import React, { useState, useEffect } from "react";
import { getProducts, currency } from "./products";
import { addToCart, useLoggedIn } from "cart/cart";

export default function HomeContent() {
  const [products, setProducts] = useState([]);
  const loggedIn = useLoggedIn();
  useEffect(() => {
    getProducts().then((result) => setProducts(result));
  }, []);

  return (
    <div className="my-10 grid grid-cols-4 gap-5">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="flex">
              <div className="flex-grow font-bold">
                <a href="">{product.name}</a>
              </div>
              <div className="flex-end">{currency.format(product.price)}</div>
            </div>
            <div className="text-sm mt-4">{product.description}</div>
            {
              loggedIn && (
                <div className="text-right mt-2">
                  <button onClick={() => addToCart(product.id)} className="px-5 text-white rounded-md bg-blue-500 hover:bg-blue-700">
                    Add To Cart
                  </button>
                </div>
              )
            }
          </div>
        );
      })}
    </div>
  );
}
