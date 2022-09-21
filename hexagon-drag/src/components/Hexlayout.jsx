// import React, { Component } from 'react';
// import { GridGenerator, Layout, Hexagon, Text, Pattern, HexUtils } from 'react-hexgrid';

// const Hexlayout = () => {
//     // const hexagons = GridGenerator.hexagon(2);
//     const [hexagons, setHexagons] = useState({hexagons});
//   return (
//     <div>Layout</div>
//   )
// }

// export default Layout

import React, { Component } from "react";
import {
  GridGenerator,
  Layout,
  Hexagon,
  Text,
  Pattern,
  HexUtils,
} from "react-hexgrid";
import "./hexalay.css";

class GameLayout extends Component {
  constructor(props) {
    super(props);
    const hexagons = GridGenerator.hexagon(2);
    // Add custom prop to couple of hexagons to indicate them being blocked
    // hexagons[0].blocked = true;
    // hexagons[1].blocked = true;
    this.state = { hexagons };
  }

  // onDrop you can read information of the hexagon that initiated the drag
  onDrop(event, source, targetProps) {
    const { hexagons } = this.state;
    const hexas = hexagons.map((hex) => {
      // When hexagon is dropped on this hexagon, copy it's image and text
      if (HexUtils.equals(source.state.hex, hex)) {
        hex.image = targetProps.data.image;
        hex.text = targetProps.data.text;
      }
      return hex;
    });
    this.setState({ hexagons: hexas });
  }

  onDragStart(event, source) {
    // If this tile is empty, let's disallow drag
    if (!source.props.data.text) {
      event.preventDefault();
    }
  }

  // Decide here if you want to allow drop to this node
  onDragOver(event, source) {
    // Find blocked hexagons by their 'blocked' attribute
    const blockedHexas = this.state.hexagons.filter((h) => h.blocked);
    // Find if this hexagon is listed in blocked ones
    const blocked = blockedHexas.find((blockedHex) => {
      return HexUtils.equals(source.state, blockedHex);
    });

    const { text } = source.props.data;
    // Allow drop, if not blocked and there's no content already
    if (!blocked && !text) {
      // Call preventDefault if you want to allow drop
      event.preventDefault();
    }
  }

  // onDragEnd you can do some logic, e.g. to clean up hexagon if drop was success
  onDragEnd(event, source, success) {
    if (!success) {
      return;
    }

    const { hexagons } = this.state;
    // TODO Drop the whole hex from array, currently somethings wrong with the patterns
    // const hexas = hexagons.filter(hex => !HexUtils.equals(targetHex, hex));
    const hexas = hexagons.map(hex => {
      if (HexUtils.equals(source.state, hex)) {
        hex.text = null;
        hex.image = null;
      }
      return hex;
    });
    this.setState({ hexagons: hexas });
  }

  render() {
    let { hexagons } = this.state;
    return (
      <Layout
        className="tiles"
        size={{ x: 8, y: 8 }}
        flat={false}
        spacing={1.01} origin={{ x: 40, y: -10 }}
      >
        {hexagons.map((hex, i) => (
          <Hexagon
            key={i}
            q={hex.q}
            r={hex.r}
            s={hex.s}
            // className={hex.blocked ? "blocked" : null}
            fill={hex.image ? HexUtils.getID(hex) : null}
            data={hex}
            onDragStart={(e, h) => this.onDragStart(e, h)}
            onDragEnd={(e, h, s) => this.onDragEnd(e, h, s)}
            onDrop={(e, h, t) => this.onDrop(e, h, t)}
            onDragOver={(e, h) => this.onDragOver(e, h)}
          >
            <Text>{hex.text || HexUtils.getID(hex)}</Text>
            {hex.image && <Pattern id={HexUtils.getID(hex)} link={hex.image} />}
          </Hexagon>
        ))}
      </Layout>
    );
  }
}

export default GameLayout;
