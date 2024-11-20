import { ReactNode, useCallback, useContext, useEffect, useRef } from 'react';
import { Context } from '../../context/constants';
import Footer from '../Footer/Footer.tsx';
import Header from '../Header/Header.tsx';

import styles from './game.module.scss';
import { useNavigate } from 'react-router-dom';
import Main from '../Main/Main.tsx';

function Game() {
	const {
		data,
		category,
		setCategory,
		word,
		setWord,
		isWinner,
		gameOver,
		guesses,
		setGuesses,
		wrongGuesses,
		setWrongGuesses,
		incorrectLetters,
		setIncorrectLetters,
	} = useContext(Context);

	const inputRef = useRef<HTMLDivElement | null>(null);
	const navigate = useNavigate();

	useEffect(() => {
		inputRef.current?.focus();

		if (!category || !data.length) {
			navigate('/');
			return;
		}

		interface ICategoryData {
			category: string;
			words: string[];
		}

		const categoryData: ICategoryData = data.find(
			el => el.category === category
		)!;

		const randomWord =
			categoryData.words[Math.floor(Math.random() * categoryData.words.length)];
		setWord(randomWord.toLowerCase());
	}, [category, data, navigate, setWord]);

	const renderWord = useCallback((): ReactNode[] => {
		return word.split('').map((letter, index) => (
			<span key={index} className={styles.letter}>
				{guesses.includes(letter) ? letter : ' _ '}
			</span>
		));
	}, [word, guesses]);

	const renderGuesses = useCallback((): ReactNode[] => {
		return incorrectLetters.map((guess, index) => (
			<span key={index} className={styles.guess}>
				{guess}
			</span>
		));
	}, [incorrectLetters]);

	const handleKeydown = (event: React.KeyboardEvent): void => {
		const letter = event.key.toLowerCase();

		if (isWinner || gameOver) return;

		if (letter >= 'а' && letter <= 'я') {
			handleGuess(letter);
		}
	};

	const handleGuess = useCallback(
		(letter: string): void => {
			if (incorrectLetters.includes(letter) || guesses.includes(letter)) return;

			if (word.includes(letter)) {
				setGuesses([...guesses, letter]);
			} else {
				setIncorrectLetters([...incorrectLetters, letter]);
				setWrongGuesses(wrongGuesses + 1);
			}
		},
		[
			word,
			guesses,
			incorrectLetters,
			wrongGuesses,
			setGuesses,
			setIncorrectLetters,
			setWrongGuesses,
		]
	);

	// Функция очищения всех состояний для обнуления игры
	const resetStateGame = () => {
		setCategory('');
		setWord('');
		setGuesses([]);
		setWrongGuesses(0);
		setIncorrectLetters([]);
	};

	return (
		<div
			className={styles.game}
			tabIndex={0}
			ref={inputRef}
			onKeyDown={handleKeydown}
		>
			<div className={styles.wrapper}>
				<Header />
				<Main
					handleGuess={handleGuess}
					renderGuesses={renderGuesses}
					renderWord={renderWord}
				/>
				<Footer resetStateGame={resetStateGame} />
			</div>
		</div>
	);
}

export default Game;
