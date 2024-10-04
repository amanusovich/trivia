import React from 'react';
import { useAtomValue } from 'jotai';
import { GameOver, Setup, Trivia } from '../../components';
import { triviaGameStateAtom } from '../../atoms';
import { TriviaGameState } from '../../constants';

export default function Game() {
  const gameState = useAtomValue(triviaGameStateAtom);

  switch (gameState) {
    case TriviaGameState.Setup:
      return <Setup />;
    case TriviaGameState.Play:
      return <Trivia />;
    case TriviaGameState.GameOver:
      return <GameOver />;
    default:
      return null;
  }
}
