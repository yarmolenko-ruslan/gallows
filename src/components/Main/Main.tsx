import { IMainProp } from '../../interface/interface';
import Alphabet from '../Alphabet/Alphabet';
import Picture from '../Picture/Picture';
import Word from '../Word/Word';
import styles from './main.module.scss';

export default function Main({
	handleGuess,
	renderGuesses,
	renderWord,
}: IMainProp) {
	return (
		<main className={styles.main}>
			<Picture />
			<Word renderWord={renderWord} renderGuesses={renderGuesses} />
			<Alphabet handleGuess={handleGuess} />
		</main>
	);
}
