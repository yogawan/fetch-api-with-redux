import React from 'react';

const LabelAtoms = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default LabelAtoms;