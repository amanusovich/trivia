import { useSetAtom } from 'jotai';
import { useState } from 'react';
import { triviaGameStateAtom, triviaScoreAtom } from '../../../atoms';
import {
  TriviaGameState,
  TriviaOptionState,
  TriviaQuestion,
} from '../../../constants';

const useQuestion = ({
  questions,
  onScoreUpdate,
  score,
}: {
  questions: TriviaQuestion[];
  onScoreUpdate: (points: number) => void;
  score: number;
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const setGameState = useSetAtom(triviaGameStateAtom);
  const setLastScore = useSetAtom(triviaScoreAtom);

  const currentQuestion = questions[currentQuestionIndex];
  const lastQuestion = currentQuestionIndex === questions.length - 1;

  const isCorrectAnswer = (option: string) =>
    option === currentQuestion.correct_answer;

  const isOptionSelected = (option: string) => selectedAnswer === option;

  const noOptionSelected = selectedAnswer === null;

  const optionState = (option: string): TriviaOptionState => {
    if (noOptionSelected) return TriviaOptionState.NOT_SELECTED;
    if (isCorrectAnswer(option)) return TriviaOptionState.CORRECT;
    if (isOptionSelected(option)) return TriviaOptionState.INCORRECT;

    return TriviaOptionState.NOT_SELECTED;
  };

  const handleNextQuestion = () => {
    if (!lastQuestion) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setLastScore(score);
      setGameState(TriviaGameState.GameOver);
    }
  };

  const handleAnswerSelect = (answer: string) => {
    if (noOptionSelected) {
      setSelectedAnswer(answer);
      if (isCorrectAnswer(answer)) onScoreUpdate(20);
    }
  };

  return {
    currentQuestion,
    lastQuestion,
    optionState,
    handleNextQuestion,
    handleAnswerSelect,
    selectedAnswer,
    isCorrectAnswer,
  };
};

export default useQuestion;
