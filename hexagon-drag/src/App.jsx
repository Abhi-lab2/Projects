import { HexGrid } from "react-hexgrid";
import "./App.css";
import Hex from "./components/Hex";
import Hexagonall from "./components/Hexlayout";
// import Layout from "./components/Hexlayout";
import arrow from "./assets/arrow.png"

function App() {
  return (
    <div className="App">
      <h1>Hexagonal drag <img src={arrow} alt="" width={'180px'} height={'85px'}/> </h1>
      <p>drag n drop left to right, cordinates mentioned</p>
      <HexGrid width={1600} height={1000} viewBox="-50 -50 100 100">
        <Hexagonall/>
        <Hex />
      </HexGrid>
    </div>
  );
}

export default App;
