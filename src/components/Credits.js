import React from 'react';

const Credits = () => {
  return (
    <div style={{ 
      textAlign: 'center', 
      bottom: '15px',
      position: 'absolute',
      width: '100%' }}
    >
      Made with <i className="fitted icon heart"></i> using ReactJS <a href="https://github.com/radiantly/b64"><i className="icon github link"></i></a>
    </div>
  );
}

export default Credits;