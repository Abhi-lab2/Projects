import { HexGrid } from "react-hexgrid";
import "./App.css";
import TilesLayout from "./components/Hex";
import Hex from "./components/Hex";
import GameLayout from "./components/Hexlayout";
import Layout from "./components/Hexlayout";

function App() {
  return (
    <div className="App">
      <h1>Hexagonal drag</h1>
      <HexGrid width={1600} height={1000} viewBox="-50 -50 100 100">
        {/* <Layout/> */}
        {/* <TilesLayout/> */}
        <GameLayout/>
        <Hex />
      </HexGrid>
    </div>
  );
}

export default App;
