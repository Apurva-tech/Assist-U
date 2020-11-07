import { Button, Box, Grid } from "@material-ui/core";

import { GameNavWrapper } from "./style";

export const GameNav = ({ changeGameHandler }) => {
  return (
    <GameNavWrapper>
      <div className="button-container">
        <Button
          variant="contained"
          className="game-button"
          disableElevation
          onClick={() => {
            changeGameHandler(1);
          }}
        >
          game1
        </Button>

        <Button
          variant="contained"
          className="game-button"
          disableElevation
          onClick={() => {
            changeGameHandler(2);
          }}
        >
          game2
        </Button>

        <Button
          variant="contained"
          className="game-button"
          disableElevation
          onClick={() => {
            changeGameHandler(3);
          }}
        >
          game3
        </Button>
      </div>
    </GameNavWrapper>
  );
};
