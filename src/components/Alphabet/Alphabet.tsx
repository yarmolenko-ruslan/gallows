import { useContext } from 'react';
import { Context } from '../../context/constants';
import { IAlphaProp } from '../../interface/interface';
import styles from './alphabet.module.scss';
import { alphaWord } from './constants';

function Alphabet({ handleGuess }: IAlphaProp) {
	const {
		category,
		guesses,
		wrongGuesses,
		incorrectLetters,
		isWinner,
		gameOver,
		maxWrongGuesses,
	} = useContext(Context);
	const remained = maxWrongGuesses - wrongGuesses;

	const isDisButton = `${styles.button_inactive} ${styles.button}`;
	const isActButton = `${styles.button_active} ${styles.button}`;

	const isActiveButton = (word: string) => {
		return incorrectLetters.includes(word) || !category
			? isDisButton
			: guesses.includes(word)
			? isActButton
			: styles.button;
	};

	const renderButton = (word: string, index: number) => {
		return (
			<button
				className={isActiveButton(word)}
				onClick={e => {
					const target = e.target as HTMLElement;
					handleGuess(target.textContent || '');
				}}
				key={index}
				disabled={remained === 0 || gameOver || isWinner}
			>
				{word}
			</button>
		);
	};

	return (
		<section className={styles.alphabet}>{alphaWord.map(renderButton)}</section>
	);
}

export default Alphabet;
