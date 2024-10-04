import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useQuestion from './hooks/useQuestion';
import { TriviaQuestion } from '../../constants';
import styles from './Trivia.styles';
import Options from './Options';
import AnswerFeedback from './AnswerFeedback';

const Question = ({
  questions,
  onScoreUpdate,
  score,
}: {
  questions: TriviaQuestion[];
  onScoreUpdate: (points: number) => void;
  score: number;
}) => {
  const {
    currentQuestion,
    lastQuestion,
    optionState,
    handleNextQuestion,
    handleAnswerSelect,
    selectedAnswer,
    isCorrectAnswer,
  } = useQuestion({ questions, onScoreUpdate, score });

  return (
    <Box sx={styles.questionContainer}>
      <Typography variant='h5' sx={styles.questionText}>
        {currentQuestion.question}
      </Typography>
      <Options
        currentQuestion={currentQuestion}
        optionState={optionState}
        handleAnswerSelect={handleAnswerSelect}
      />
      {selectedAnswer && (
        <AnswerFeedback
          correctAnswer={currentQuestion.correct_answer}
          isCorrectAnswer={isCorrectAnswer(selectedAnswer)}
        />
      )}
      {selectedAnswer && (
        <Button
          variant='contained'
          color='primary'
          onClick={handleNextQuestion}
          endIcon={<ArrowForwardIcon />}
          sx={styles.button}
        >
          {lastQuestion ? 'Obtener puntaje' : 'Siguiente Pregunta'}
        </Button>
      )}
    </Box>
  );
};

export default Question;
