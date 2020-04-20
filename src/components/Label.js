import React from 'react';

const Label = props => {
  return (
    <div className="ui label">
      { props.attrs.icon && <i className={`${props.attrs.icon} icon`}></i> }
      { props.attrs.text }
      { props.attrs.detail && <div className="detail">{props.attrs.detail}</div> }
    </div>
  );
}

export default Label;