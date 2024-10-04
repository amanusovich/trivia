import { Box, Typography, Button } from '@mui/material';
import { useAtomValue, useSetAtom } from 'jotai';
import { triviaGameStateAtom, triviaScoreAtom } from '../../atoms';
import { TriviaGameState } from '../../constants';
import styles from './GameOver.styles';

const GameOver = () => {
  const lastScore = useAtomValue(triviaScoreAtom);
  const setGameState = useSetAtom(triviaGameStateAtom);

  const handlePlayAgain = () => {
    setGameState(TriviaGameState.Play);
  };

  const handleGoToSetup = () => {
    setGameState(TriviaGameState.Setup);
  };

  return (
    <Box sx={styles.container}>
      <Typography variant='h5' sx={styles.scoreLabel}>
        Puntaje obtenido: {lastScore} puntos
      </Typography>
      <Box sx={styles.buttonsContainer}>
        <Button variant='contained' color='primary' onClick={handlePlayAgain}>
          Reiniciar juego
        </Button>
        <Button variant='contained' color='primary' onClick={handleGoToSetup}>
          Cambiar configuración
        </Button>
      </Box>
    </Box>
  );
};

export default GameOver;
