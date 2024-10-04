import { atom } from 'jotai';
import {
  TriviaCategory,
  TriviaGameState,
  TriviaPreferences,
  TriviaQuestion,
} from './constants';

const triviaGameStateAtom = atom<TriviaGameState>(TriviaGameState.Setup);

const triviaPreferencesAtom = atom<TriviaPreferences>({
  category: '',
  difficulty: '',
});

const triviaCategoriesAtom = atom<TriviaCategory[]>([]);

const triviaQuestionsAtom = atom<TriviaQuestion[]>([]);

const triviaScoreAtom = atom(0);

export {
  triviaQuestionsAtom,
  triviaCategoriesAtom,
  triviaPreferencesAtom,
  triviaGameStateAtom,
  triviaScoreAtom,
};
