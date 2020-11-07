import React from "react";
import { Link } from "react-router-dom";

import { HeaderWrapper } from "./style";

export const Header = () => {
  return (
    <HeaderWrapper>
      <div className='zet'>
        <div>
          <Link to='/'>HOME</Link>
        </div>
        <div>
          <Link to='/about'>ABOUT</Link>
        </div>
      </div>
    </HeaderWrapper>
  );
};


