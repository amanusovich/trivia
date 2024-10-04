import { useMemo } from 'react';
import { Box, Button } from '@mui/material';
import { TriviaOptionState, TriviaQuestion } from '../../constants';
import styles from './Trivia.styles';

const Options = ({
  currentQuestion,
  optionState,
  handleAnswerSelect,
}: {
  currentQuestion: TriviaQuestion;
  optionState: (option: string) => TriviaOptionState;
  handleAnswerSelect: (answer: string) => void;
}) => {
  const shuffleOptions = (question: TriviaQuestion) => {
    const answers = [question.correct_answer, ...question.incorrect_answers];
    return answers.sort(() => Math.random() - 0.5);
  };

  const shuffledOptions = useMemo(
    () => shuffleOptions(currentQuestion),
    [currentQuestion]
  );

  const buttonStyles = {
    [TriviaOptionState.NOT_SELECTED]: {
      color: 'secondary',
      variant: 'outlined',
    },
    [TriviaOptionState.CORRECT]: { color: 'success', variant: 'contained' },
    [TriviaOptionState.INCORRECT]: { color: 'error', variant: 'contained' },
  };

  const buttonStyle = (option: string) => buttonStyles[optionState(option)];

  return (
    <Box sx={styles.optionsContainer}>
      {shuffledOptions.map((option, optionIndex) => (
        <Button
          key={optionIndex}
          variant={buttonStyle(option).variant as any}
          color={buttonStyle(option).color as any}
          sx={styles.optionButton}
          onClick={() => handleAnswerSelect(option)}
        >
          {option}
        </Button>
      ))}
    </Box>
  );
};

export default Options;
