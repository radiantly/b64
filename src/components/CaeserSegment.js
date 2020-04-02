import React from 'react';
import Segment from './Segment';
import Slider from '@material-ui/core/Slider';

class CaeserSegment extends React.Component {
  render() {
    return (
      <Segment>
        <h4 className="ui header">{this.props.header}</h4>
        <Slider
          value={this.props.shift}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          max={25}
          onChange={(e, val) => this.props.handleShiftChange(val)}
        />
        <div id="caesercipher" className="item">{this.props.value}</div>
      </Segment>
    );
  }
}

export default CaeserSegment;