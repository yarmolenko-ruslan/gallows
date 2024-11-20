import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface ContextProviderProps {
	children: ReactNode;
}

export interface IWord {
	category: string;
	words: string[];
}

export interface IContextType {
	data: IWord[];
	setData: Dispatch<SetStateAction<IWord[]>>;
	categoryList: string[];
	setCategoryList: Dispatch<SetStateAction<string[]>>;
	category: string;
	setCategory: Dispatch<SetStateAction<string>>;
	word: string;
	setWord: Dispatch<SetStateAction<string>>;
	guesses: string[];
	setGuesses: Dispatch<SetStateAction<string[]>>;
	wrongGuesses: number;
	setWrongGuesses: Dispatch<SetStateAction<number>>;
	incorrectLetters: string[];
	setIncorrectLetters: Dispatch<SetStateAction<string[]>>;
	maxWrongGuesses: number;
	gameOver: boolean;
	isWinner: boolean;
	isLoading: boolean;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export interface IContextProviderProps {
	children: ReactNode;
}

export interface IAlphaProp {
	handleGuess: (letter: string) => void;
}

export interface IWordProp {
	renderGuesses: () => ReactNode[];
	renderWord: () => ReactNode;
}

export interface IMainProp {
	handleGuess: (letter: string) => void;
	renderGuesses: () => ReactNode[];
	renderWord: () => ReactNode;
}

export interface IFooterProp {
	resetStateGame: () => void;
}
