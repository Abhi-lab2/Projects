import { Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./cart.css";

export const Cart = ({ state, dispatch }) => {
  const { cart } = state;
  console.log("cart: -", cart);
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  const changeQty = (id, qty) =>
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        id: id,
        qty: qty,
      },
    });
  return (
    <Box className="container">
      <b style={{ fontSize: 30, alignSelf: "center" }}>Cart</b>
      <b style={{ alignSelf: "center" }}>Subtotal: Rs {total}</b>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {cart.length > 0 ? (
          cart.map((prod) => (
            <div key={prod.title} className="title">
              <div style={{ display: "flex", gap: 10 }}>
                <img src={prod.thumbnail} alt={prod.title} className="img" />
                <div className="desc">
                  <span>{prod.title}</span>
                  <b>Rs {prod.price}</b>
                </div>
              </div>
              <div style={{ display: "grid", alignItems: "center", gap: 10 }}>
                <Button onClick={() => changeQty(prod.id, prod.qty - 1)}>
                  -
                </Button>
                <span>{prod.qty}</span>
                <Button onClick={() => changeQty(prod.id, prod.qty + 1)}>
                  +
                </Button>
              </div>
            </div>
          ))
        ) : (
          <span className="cart">Cart is Empty</span>
        )}
      </div>
    </Box>
  );
};
