import axios from 'axios';
import he from 'he';
import { TriviaCategory, TriviaQuestion } from './constants';

const BASE_URL = 'https://opentdb.com';
interface FetchTriviaOptions {
  category: string;
  difficulty: string;
  amount?: number;
  type?: string;
}

const fetchTriviaQuestions = async ({
  category,
  difficulty,
  amount = 10,
  type = 'multiple',
}: FetchTriviaOptions): Promise<TriviaQuestion[]> => {
  const response = await axios.get(`${BASE_URL}/api.php`, {
    params: {
      amount,
      category,
      difficulty,
      type,
    },
  });

  if (response.data.response_code === 0) {
    const decodedResults = response.data.results.map(
      (item: TriviaQuestion) => ({
        ...item,
        question: he.decode(item.question),
        correct_answer: he.decode(item.correct_answer),
        incorrect_answers: item.incorrect_answers.map((answer) =>
          he.decode(answer)
        ),
      })
    );
    return decodedResults;
  } else {
    throw new Error('Failed to fetch questions');
  }
};

const fetchCategories = async (): Promise<TriviaCategory[]> => {
  const response = await axios.get(`${BASE_URL}/api_category.php`);

  if (response.data.trivia_categories) {
    return response.data.trivia_categories;
  } else {
    throw new Error('Failed to fetch categories');
  }
};

export { fetchTriviaQuestions, fetchCategories };
