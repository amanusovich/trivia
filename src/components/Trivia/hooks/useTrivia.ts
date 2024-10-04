import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import {
  triviaGameStateAtom,
  triviaPreferencesAtom,
  triviaQuestionsAtom,
} from '../../../atoms';
import { useEffect, useState } from 'react';
import { fetchTriviaQuestions } from '../../../api';
import { TriviaGameState } from '../../../constants';

const useTrivia = () => {
  const [questions, setQuestions] = useAtom(triviaQuestionsAtom);
  const preferences = useAtomValue(triviaPreferencesAtom);
  const setGameState = useSetAtom(triviaGameStateAtom);

  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [newQuestions, setNewQuestions] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const trivia = await fetchTriviaQuestions(preferences);
        setQuestions(trivia);
      } catch (err) {
        console.error('Failed to fetch trivia questions.');
      } finally {
        setLoading(false);
        setNewQuestions(false);
      }
    };

    if (newQuestions) {
      fetchQuestions();
    }
  }, [newQuestions, preferences, setNewQuestions, setQuestions]);

  const handleScoreUpdate = (points: number) => {
    setScore((prevScore) => prevScore + points);
  };

  const handleGoToSetup = () => {
    setGameState(TriviaGameState.Setup);
  };

  return {
    questions,
    loading,
    score,
    handleScoreUpdate,
    handleGoToSetup,
  };
};

export default useTrivia;
