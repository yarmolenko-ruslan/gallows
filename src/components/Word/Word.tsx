import { useContext } from 'react';
import { Context } from '../../context/constants';
import { IWordProp } from '../../interface/interface';
import styles from './word.module.scss';

function Word({ renderWord, renderGuesses }: IWordProp) {
	const { word, gameOver, isWinner, maxWrongGuesses, wrongGuesses } =
		useContext(Context);

	const remained = maxWrongGuesses - wrongGuesses;

	return (
		<section className={styles.word}>
			{isWinner ? (
				<h2 className={styles.title}>Поздравляем, вы выиграли!</h2>
			) : gameOver ? (
				<h2 className={styles.title}>Вы проиграли! Слово было: {word}</h2>
			) : (
				<h2 className={styles.title}>{renderWord()}</h2>
			)}
			<div className={styles.wrapper}>
				<p className={styles.not_true}>
					Не верные буквы:{' '}
					<span className={styles.guesses_word}>{renderGuesses()}</span>
				</p>
				<p className={styles.attempts}>
					Осталось попыток:{' '}
					{remained <= 3 ? (
						<span className={styles.number}>{remained}</span>
					) : (
						remained
					)}
				</p>
			</div>
		</section>
	);
}

export default Word;
