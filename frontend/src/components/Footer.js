import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        // background: "red",
        color: "grey",
        textAlign: "center",
      }}
    >
      <p>
      © 2020 Copyright:
        <a 
        style={{color:'grey'}} 
        href="https://www.instagram.com/juaanluna/?hl=pt-br"> Juan Luna</a> e
        <a 
        style={{color:'grey'}}
        href="https://www.instagram.com/marcoaurelio1337/?hl=pt-br">  Marco Galvão
        </a>
      </p>
    </div>
  );
};
export default Footer;
