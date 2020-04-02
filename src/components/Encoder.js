import React from 'react';
import Segment from './Segment';

class DividedSegment extends React.Component {

  conditionalRender = (obj, text) => {
    if(obj.value && obj.enabled)
      return obj.value;
    else
      return (
        <div className="ui slider checkbox">
          <input type="checkbox" checked={obj.enabled} />
          <label>{text}</label>
        </div>
      );
  }

  render() {
    return (
      <Segment>
        <div className="ui two column very relaxed grid">
            <div className="column">{this.conditionalRender(this.props.values.encoded, 'Enable Encoding')}</div>
            <div className="column">{this.conditionalRender(this.props.values.decoded, 'Enable Decoding')}</div>
        </div>
        <div className="ui vertical divider">{this.props.divider}</div>
      </Segment>
    );
  }
}

export default DividedSegment;