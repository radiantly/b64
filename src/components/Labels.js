import React from 'react';
import Segment from './Segment';
import Label from './Label';

class Labels extends React.Component {

  renderLabels = () => {
    return this.props.labels.map(label => {
      return (
        <Label key={label.text} attrs={label} />
      );
    });
  }

  render() {
    return (
      <Segment>
        {this.renderLabels()}
      </Segment>
    );
  }
}

export default Labels;