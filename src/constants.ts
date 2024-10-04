const difficulties = [
  { id: 'easy', name: 'Fácil' },
  { id: 'medium', name: 'Intermedia' },
  { id: 'hard', name: 'Difícil' },
];

enum TriviaOptionState {
  NOT_SELECTED = 'NOT SELECTED',
  CORRECT = 'CORRECT',
  INCORRECT = 'INCORRECT',
}

enum TriviaGameState {
  Setup = 'setup',
  Play = 'play',
  GameOver = 'gameover',
}

interface TriviaCategory {
  id: number;
  name: string;
}

interface TriviaQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface TriviaPreferences {
  category: string;
  difficulty: string;
}

export { difficulties, TriviaOptionState, TriviaGameState };
export type { TriviaCategory, TriviaQuestion, TriviaPreferences };
