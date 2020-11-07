import React, { useState } from "react";
// import { Button, Box } from "@material-ui/core";
import {HomeWrapper} from './style'

import { GameNav } from "./../../components/GameNav/GameNav";

export const Home = () => {
  const [game, changeGame] = useState(0);

  const changeGameHandler = (data) => {
    changeGame(data);
  };

  const gameRender = () => {
    return game;
  };

  return (
    <div>
      <HomeWrapper >    
        <GameNav changeGameHandler={changeGameHandler}/>  
        {gameRender()}
      </HomeWrapper>
    </div>
  );
};

export default Home;
