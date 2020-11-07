import React, { useState } from "react";
// import { Button, Box } from "@material-ui/core";
import { HomeWrapper } from "./style";

import { GameNav } from "./../../components/GameNav/GameNav";
import { Expression } from "./../../components/Expression/Expression";
import { Time } from "./../../components/Time/Time";

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
      <HomeWrapper>
        <GameNav changeGameHandler={changeGameHandler} />
        {gameRender()}

        {/* <Expression /> */}
        {/* <Time /> */}
      </HomeWrapper>
    </div>
  );
};

export default Home;
