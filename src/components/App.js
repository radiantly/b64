import React from 'react';
import InputField from './InputField';
import CaeserSegment from './CaeserSegment';
import DividedSegment from './DividedSegment';
import * as convert from '../util/convert';

const defaultStates = {
  base64encoded: 'Encoded',
  base64decoded: 'Decoded',
  hexenc: 'Encoded',
  hexdec: 'Decoded',
  base32encoded: 'Encoded',
  base32decoded: 'Decoded',
  rot13: 'Rot13',
  rot47: 'Rot47',
  caeser: 'Use the slider to set the shift.',
}

class App extends React.Component {
  state = {
    input: '',
    caeserShift: 19,
    ...defaultStates
  }

  handleInput = input => {
    this.setState({ input: input});

    if(!input)
      return this.setState({ ...defaultStates });

    this.setState({ 
      base64encoded: convert.Base64Encoder(input), 
      base64decoded: convert.Base64Decoder(input),
      hexenc: convert.HexEncoder(input),
      hexdec: convert.HexDecoder(input),
      base32encoded: convert.Base32Encoder(input),
      base32decoded: convert.Base64Decoder(input),
      rot13: convert.Rot13Encode(input),
      rot47: convert.Rot47Encode(input),
      caeser: convert.CaeserCipher(input, this.state.caeserShift)
    });
  }

  handleShiftChange = shift => {
    this.setState({ caeserShift: shift });

    this.setState({ caeser: convert.CaeserCipher(this.state.input, shift)});
  }

  render() {
    return (
      <div className="ui basic segments" style={{ fontFamily: 'Source Code Pro'}}>
        <InputField value={this.state.input} onChange={this.handleInput} />
        <DividedSegment left={this.state.base64encoded} right={this.state.base64decoded} divider="Base64" />
        <DividedSegment left={this.state.hexenc} right={this.state.hexdec} divider="Hex" />
        <DividedSegment left={this.state.base32encoded} right={this.state.base32decoded} divider="Base32" />
        <DividedSegment left={this.state.rot13} right={this.state.rot47} divider="Rot" />
        <CaeserSegment value={this.state.caeser} shift={this.state.caeserShift} handleShiftChange={this.handleShiftChange} header="Caeser cipher" />
      </div>
    );
  }
}

export default App;