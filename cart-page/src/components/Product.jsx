import { Box, Button } from "@chakra-ui/react";
import React from "react";
// import "./product.css"

export const Product = ({ state, dispatch }) => {
  const { products, cart } = state;
  return (
    <Box
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "76%",
        position: "absolute"
      }}
    >
      {products.map((prod) => (
        <Box
          key={prod.id}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 10,
            border: "1px solid grey",
            width: "30%",
            marginTop: 10,
            gap: 10,
          }}
        >
          <img
            src={prod.thumbnail}
            alt={prod.images[0]}
            style={{ height: 200, objectFit: "cover" }}
          />
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{prod.title}</span>
            <b>Rs {prod.price}</b>
            <p>{prod.rating} ★</p>
          </Box>

          {cart.some((c) => c.id === prod.id) ? (
            <Button
              style={{
                padding: 5,
                border: 0,
                borderRadius: 5,
                backgroundColor: "#e53935",
                color: "white",
              }}
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              style={{
                padding: 5,
                border: 0,
                borderRadius: 5,
                backgroundColor: "green",
                color: "white",
              }}
              onClick={() => dispatch({
                type: "ADD_TO_CART",
                payload: {
                  id: prod.id,
                  title: prod.title,
                  thumbnail: prod.thumbnail,
                  qty: prod.qty,
                  price: prod.price,
                },
              })}
            >
              Add to Cart
            </Button>
          )}
        </Box>
      ))}
    </Box>
  );
};
