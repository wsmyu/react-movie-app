import React from "react";
import './button.css'
const Button = ({icon,text,color,bgColor}) => {
  return (
    <a href="/" className="mainBtn" style={{color:color,background:bgColor}}>
      {icon}{text}
    </a>
  );
};

export default Button;
