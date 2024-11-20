import { useContext } from 'react';
import { Context } from '../../context/constants';
import { IAlphaProp } from '../../interface/interface';
import styles from './alphabet.module.scss';

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

	const alphaWord = [
		'а',
		'б',
		'в',
		'г',
		'д',
		'е',
		'ё',
		'ж',
		'з',
		'и',
		'й',
		'к',
		'л',
		'м',
		'н',
		'о',
		'п',
		'р',
		'с',
		'т',
		'у',
		'ф',
		'х',
		'ц',
		'ч',
		'ш',
		'щ',
		'ъ',
		'ы',
		'ь',
		'э',
		'ю',
		'я',
	];

	const isActiveButton = (word: string) => {
		return incorrectLetters.includes(word) || !category
			? styles.button_inactive + ' ' + styles.button
			: guesses.includes(word)
			? styles.button_active + ' ' + styles.button
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
