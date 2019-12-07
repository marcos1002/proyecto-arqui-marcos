import React from 'react';

const Footer = props => (
  <div className="footer">
    {props.author} - {props.year}
  </div>
);

export default Footer;