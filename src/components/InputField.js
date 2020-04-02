import './InputField.css';
import React from 'react';
import Segment from './Segment';

class InputField extends React.Component {


  render() {
    return (
      <Segment>
        <textarea value={this.props.value} placeholder="What would you like to decode?" onChange={e => this.props.onChange(e.target.value)}></textarea>
      </Segment>
    );
  }
}

export default InputField;