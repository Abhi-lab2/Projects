import { useEffect, useReducer } from "react";
import "./App.css";
import Axios from "axios";
import { Box } from "@chakra-ui/react";
import { Product } from "./components/Product";
import { cartReducer } from "./reducers/cartReducer";
import { Cart } from "./components/Cart";

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });
  const fetchProducts = async () => {
    const { data } = await Axios.get("https://dummyjson.com/products");
    console.log(data);
    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products,
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Box style={{ display: "flex" }}>
        <Product state={state} dispatch={dispatch} />
        <Cart state={state} dispatch={dispatch} />
      </Box>
    </div>
  );
}

export default App;
