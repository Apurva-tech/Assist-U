import { Button, Box, Grid } from "@material-ui/core";

import { GameNavWrapper } from "./style";

export const GameNav = ({ changeGameHandler }) => {
  return (
    <GameNavWrapper>
      <div className='button-container'>
        <Button
          variant='contained'
          className='game-button'
          disableElevation
          onClick={() => {
            changeGameHandler(1);
          }}>
          Understand Expression
        </Button>

        <Button
          variant='contained'
          className='game-button'
          disableElevation
          onClick={() => {
            changeGameHandler(2);
          }}>
          Learn Time Management
        </Button>

        <Button
          variant='contained'
          className='game-button'
          disableElevation
          onClick={() => {
            changeGameHandler(3);
          }}>
          Learn Money Management
        </Button>

        <Button
          variant='contained'
          className='game-button'
          disableElevation
          onClick={() => {
            changeGameHandler(4);
          }}>
          Educational Videos
        </Button>
      </div>
    </GameNavWrapper>
  );
};
