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

class Hexagonall extends Component {
  constructor(props) {
    super(props);
    const hexagons = GridGenerator.hexagon(2);
    this.state = { hexagons };
  }

  onDrop(event, source, targetProps) {
    const { hexagons } = this.state;
    const hexas = hexagons.map((hex) => {
      if (HexUtils.equals(source.state.hex, hex)) {
        hex.image = targetProps.data.image;
        hex.text = targetProps.data.text;
      }
      return hex;
    });
    this.setState({ hexagons: hexas });
  }

  onDragStart(event, source) {
    
    if (!source.props.data.text) {
      event.preventDefault();
    }
  }

  onDragOver(event, source) {
    const blockedHexas = this.state.hexagons.filter((h) => h.blocked);
    
    const blocked = blockedHexas.find((blockedHex) => {
      return HexUtils.equals(source.state, blockedHex);
    });

    const { text } = source.props.data;
    if (!blocked && !text) {
      event.preventDefault();
    }
  }
  onDragEnd(event, source, success) {
    if (!success) {
      return;
    }

    const { hexagons } = this.state;
    const hexas = hexagons.map(hex => {
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

export default Hexagonall;
