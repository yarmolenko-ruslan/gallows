import { useState } from 'react';
import { ContextProviderProps, IWord } from '../interface/interface';
import { Context } from './constants';

export const ContextProvider = ({
	children,
}: ContextProviderProps): JSX.Element => {
	const [data, setData] = useState<IWord[]>([]);
	const [categoryList, setCategoryList] = useState<string[]>([]);
	const [category, setCategory] = useState<string>('');
	const [word, setWord] = useState<string>('');
	const [guesses, setGuesses] = useState<string[]>([]);
	const [wrongGuesses, setWrongGuesses] = useState<number>(0);
	const [incorrectLetters, setIncorrectLetters] = useState<string[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const maxWrongGuesses = 7;
	const gameOver = wrongGuesses >= maxWrongGuesses;
	const isWinner = word.split('').every(letter => guesses.includes(letter));

	return (
		<Context.Provider
			value={{
				data,
				setData,
				categoryList,
				setCategoryList,
				category,
				setCategory,
				word,
				setWord,
				guesses,
				setGuesses,
				wrongGuesses,
				setWrongGuesses,
				incorrectLetters,
				setIncorrectLetters,
				maxWrongGuesses,
				gameOver,
				isWinner,
				isLoading,
				setIsLoading,
			}}
		>
			{children}
		</Context.Provider>
	);
};
