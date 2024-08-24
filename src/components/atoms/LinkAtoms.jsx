import React from 'react';

const LinkAtoms = ({ href, children, target = '_self', rel = 'noopener noreferrer' }) => {
  return (
    <a href={href} target={target} rel={rel}>
      {children}
    </a>
  );
};

export default LinkAtoms;