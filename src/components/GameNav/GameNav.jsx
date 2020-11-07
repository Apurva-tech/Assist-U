import { Button, Box, Grid } from "@material-ui/core";

import { GameNavWrapper } from "./style";

export const GameNav = ({ changeGameHandler }) => {
  return (
    <GameNavWrapper>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Box margin='1em 2em' padding='0.3em'>
          <Button
            variant='contained'
            className='game-button'
            disableElevation
            onClick={() => {
              changeGameHandler(1);
            }}>
            game1
          </Button>
        </Box>
        <Box margin='1em 2em' padding='0.3em'>
          <Button
            variant='contained'
            className='game-button'
            disableElevation
            onClick={() => {
              changeGameHandler(2);
            }}>
            game2
          </Button>
        </Box>
        <Box margin='1em 2em' padding='0.3em'>
          <Button
            variant='contained'
            className='game-button'
            disableElevation
            onClick={() => {
              changeGameHandler(3);
            }}>
            game3
          </Button>
        </Box>
      </Grid>
    </GameNavWrapper>
  );
};
