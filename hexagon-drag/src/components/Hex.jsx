import React, { Component } from 'react';
import { GridGenerator, Layout, Hexagon, Text, Pattern, HexUtils } from 'react-hexgrid';
import './hexa.css';

class TilesLayout extends Component {
  constructor(props) {
    super(props);
    
    const hexagons = GridGenerator.hexagon(2).map((hexagon, index) => {
      return Object.assign({}, hexagon, {
        text: `hexa`,
      });
    })
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

  onDragEnd(event, source, success) { // takes 3 parameters -syn
    if (!success) {
      return;
    }
    const { hexagons } = this.state;
    const hexas = hexagons.map(hex => {
      if (HexUtils.equals(source.state.hex, hex)) {
        hex.text = null;
        hex.image = null;
      }
      return hex;
    });
    this.setState({ hexagons: hexas });
  }

  render() {
    const { hexagons } = this.state;
    return (
      <Layout className="tiles" size={{ x: 8, y: 8 }} flat={true} spacing={1.01} origin={{ x: -40, y: -8 }}>
        <img src="https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-right-arrow-icon-png-image_956430.jpg" alt="" />
        {
          hexagons.map((hex, i) => (
            <Hexagon
              key={i}
              q={hex.q}
              r={hex.r}
              s={hex.s}

          // 
              data={hex}
              onDragStart={(e, h) => this.onDragStart(e)}
              onDragEnd={(e, h, s) => this.onDragEnd(e, h, s)}
              onDrop={(e, h, t) => this.onDrop(e, h, t)}
              onDragOver={(e, h) => this.onDragOver(e, h)}
            >
              <Text>{hex.text}</Text>
              { hex.image && <Pattern id={HexUtils.getID(hex)} link={hex.image} /> }
            </Hexagon>
          ))
        }
      </Layout>
    );
  }
}

export default TilesLayout;