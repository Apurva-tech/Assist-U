import React from "react";
import { Link } from "react-router-dom";

import { HeaderWrapper } from "./style";

export const Header = () => {
  return (
    <HeaderWrapper>
      <div className="zet">
        <div>
          <Link to="/videos">
            <span className="fa fa-play nav-icon"></span>
          </Link>
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
