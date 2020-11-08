import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../whitelogo.png";

import { HeaderWrapper } from "./style";

export const Header = () => {
  return (
    <HeaderWrapper>
      <div className="zet">
        <div className="logo">
          {/* <span class="fas fa-paw" style={{ fontSize: "2em" }}></span>
           */}
          <img src={logo} height="50em" />
        </div>
        <div>
          <Link to="/">
            <span className="fa fa-home nav-icon"></span>
          </Link>
        </div>
        <div>
          <Link to="/about">
            <span className="fa fa-info nav-icon"></span>
          </Link>
        </div>
      </div>
    </HeaderWrapper>
  );
};
