import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useAtomValue, useSetAtom } from 'jotai';
import {
  triviaCategoriesAtom,
  triviaGameStateAtom,
  triviaPreferencesAtom,
} from '../../atoms';
import CasinoOutlinedIcon from '@mui/icons-material/CasinoOutlined';
import styles from './Setup.styles';
import { difficulties, TriviaGameState } from '../../constants';

export default function TriviaStart() {
  const setGameState = useSetAtom(triviaGameStateAtom);
  const triviaPreferences = useAtomValue(triviaPreferencesAtom);
  const triviaCategories = useAtomValue(triviaCategoriesAtom);

  const selectedCategoryName = triviaCategories.find(
    (category) => category.id.toString() === triviaPreferences.category
  )?.name;
  const selectedDifficultyName = difficulties.find(
    (difficulty) => difficulty.id === triviaPreferences.difficulty
  )?.name;

  const startGame = () => {
    setGameState(TriviaGameState.Play);
  };

  return (
    <Box sx={styles.triviaStartContainer}>
      <Box sx={{ display: 'flex', mb: 10, gap: 2 }}>
        <Box sx={styles.selectedPreferences}>
          <b>Temática</b>
          <br />
          {selectedCategoryName}
        </Box>
        <Box sx={styles.selectedPreferences}>
          <b>Dificultad</b>
          <br />
          {selectedDifficultyName}
        </Box>
      </Box>
      <Button
        onClick={startGame}
        variant='outlined'
        color='secondary'
        size='large'
        startIcon={<CasinoOutlinedIcon fontSize='large' />}
        sx={styles.playButton}
      >
        Jugar!
      </Button>
    </Box>
  );
}
