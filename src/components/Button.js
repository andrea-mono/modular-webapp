import React from 'react';

const Button = ({ type = 'button', label }) => {
  return <button type={type}>{label}</button>;
};

export default Button;
