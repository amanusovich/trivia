import { Typography } from '@mui/material';

const AnswerFeedback = ({
  correctAnswer,
  isCorrectAnswer,
}: {
  correctAnswer: string;
  isCorrectAnswer: boolean;
}) => {
  return (
    <Typography sx={{ color: isCorrectAnswer ? 'success.main' : 'error.main' }}>
      {isCorrectAnswer
        ? '¡Correcto! Has acumulado 20 puntos.'
        : `Incorrecto. La respuesta correcta era: ${correctAnswer}`}
    </Typography>
  );
};

export default AnswerFeedback;
