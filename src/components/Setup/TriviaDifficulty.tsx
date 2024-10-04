import { useAtom } from 'jotai';
import { triviaPreferencesAtom } from '../../atoms';
import { Box, Stack } from '@mui/material';
import styles from './Setup.styles';
import { difficulties } from '../../constants';

export default function TriviaDifficulty({
  handleNextStep,
}: {
  handleNextStep: () => void;
}) {
  const [preferences, setPreferences] = useAtom(triviaPreferencesAtom);

  const handleDifficultyChange = (difficultyId: string) => {
    setPreferences((prev) => ({
      ...prev,
      difficulty: difficultyId,
    }));
    handleNextStep();
  };

  return (
    <Stack direction='row' flexWrap='wrap' gap={2} justifyContent={'center'}>
      {difficulties.map((difficulty) => (
        <Box
          key={difficulty.id}
          onClick={() => handleDifficultyChange(difficulty.id.toString())}
          borderColor={
            preferences.difficulty === difficulty.id.toString()
              ? 'primary.light'
              : 'information.main'
          }
          sx={styles.stepButton}
        >
          {difficulty.name}
        </Box>
      ))}
    </Stack>
  );
}
