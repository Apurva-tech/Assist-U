import { Button, Box } from "@material-ui/core";

export const GameNav = ({ changeGameHandler }) => {
  return (
    <div>
      <Box margin='1em 2em' padding='0.3em'>
        <Button
          variant='contained'
          color='primary'
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
    </div>
  );
};
