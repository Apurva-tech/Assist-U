import React, { useState } from "react";
import { Button, Box } from "@material-ui/core";

import { GameNav } from "../components/GameNav";

export const Home = () => {
  const [game, changeGame] = useState(0);

  const changeGameHandler = (data) => {
    changeGame(data);
  };

  const gameRender = () => {
    switch (game) {
      case 0:
        return (
          <GameNav
            game={game}
            changeGame={changeGame}
            changeGameHandler={changeGameHandler}
          />
        );
      case 1:
        return <p>Gane 1</p>;
      case 2:
        return <p>Gane 2</p>;
      case 3:
        return <p>Gane 3</p>;

      default:
        return null;
    }
  };

  return (
    <div>
      {game !== 0 ? (
        <Box margin='1em 2em' padding='0.3em'>
          <Button
            variant='contained'
            color='secondary'
            size='large'
            onClick={() => {
              changeGameHandler(0);
            }}>
            Back
          </Button>
        </Box>
      ) : null}
      {gameRender()}
    </div>
  );
};

export default Home;
