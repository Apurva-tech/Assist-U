import { Button, Box, Grid } from "@material-ui/core";

import { Gamestyle } from "./style";

export const GameNav = ({ changeGameHandler }) => {
  return (
    <Gamestyle>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Box margin='1em 2em' padding='0.3em'>
          <Button
            variant='contained'
            className='game-button'
            size='large'
            onClick={() => {
              changeGameHandler(1);
            }}>
            game1
          </Button>
        </Box>
        <Box margin='1em 2em' padding='0.3em'>
          <Button
            variant='contained'
            color='primary'
            size='large'
            onClick={() => {
              changeGameHandler(2);
            }}>
            game2
          </Button>
        </Box>
        <Box margin='1em 2em' padding='0.3em'>
          <Button
            variant='contained'
            color='primary'
            size='large'
            onClick={() => {
              changeGameHandler(3);
            }}>
            game3
          </Button>
        </Box>
      </Grid>
    </Gamestyle>
  );
};
