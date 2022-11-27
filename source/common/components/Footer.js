import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="icons">
        <a className="vkCom" href="https://vk.com/itsdevelopmentru"></a>
        <a className="dzen" href="https://itsdevelopment.ru/"></a>
        <a className="telegram" href="https://t.me/+3ERzYQm6fUxhNjky"></a>
       <div className="upBtn">
       </div>

        </div>
          <div className="col">
            <h1 className="list-unstyled">
              <p>All rights reserved и ОГРНИП: 000000000000</p>
            </h1>
            <p className="col-sm">
         Copyright &copy;{new Date().getFullYear()} its.dev
          </p>
          </div>
      </div>
    </div>
  );
}

export default Footer;