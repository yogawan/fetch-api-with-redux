import React from 'react';

const ButtonAtoms = ({ onClick, children, type = 'button' }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonAtoms;