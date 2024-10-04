import { Box, Button, Skeleton } from '@mui/material';
import Question from './Question';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from './Trivia.styles';
import useTrivia from './hooks/useTrivia';

export default function Trivia() {
  const { questions, loading, score, handleScoreUpdate, handleGoToSetup } =
    useTrivia();

  if (loading) return <TriviaSkeleton />;

  return (
    <Box sx={styles.triviaContainer}>
      <Button
        variant='contained'
        color='primary'
        onClick={handleGoToSetup}
        startIcon={<ArrowBackIcon />}
        sx={styles.triviaGoBackButton}
      >
        Volver al inicio
      </Button>
      {questions.length > 0 && (
        <Question
          questions={questions}
          onScoreUpdate={handleScoreUpdate}
          score={score}
        />
      )}
    </Box>
  );
}

function TriviaSkeleton() {
  return (
    <Box sx={styles.triviaContainer}>
      <Skeleton
        variant='rectangular'
        height={47}
        width={800}
        sx={styles.questionSkeletonItem}
      />
      {[...Array(5)].map((_, index) => (
        <Skeleton
          variant='rectangular'
          height={47}
          width={500}
          sx={styles.optionSkeletonItem}
        />
      ))}
    </Box>
  );
}
