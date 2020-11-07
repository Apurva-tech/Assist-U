import React from "react";
import { Link } from "react-router-dom";

import { Headerstyle } from "./style";

const Header = () => {
  return (
    <Headerstyle>
      <div className='zet'>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='/about'>About</Link>
        </div>
      </div>
    </Headerstyle>
  );
};

export default Header;
