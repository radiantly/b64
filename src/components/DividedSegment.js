import React from 'react';
import Segment from './Segment';

const DividedSegment = props => {
  return (
    <Segment>
      <div className="ui two column very relaxed grid">
          <div className="column">{props.left}</div>
          <div className="column">{props.right}</div>
      </div>
      <div className="ui vertical divider">{props.divider}</div>
    </Segment>
  );
}

export default DividedSegment;