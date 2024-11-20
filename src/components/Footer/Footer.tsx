import { Link } from 'react-router-dom';
import { IFooterProp } from '../../interface/interface';
import styles from './footer.module.scss';

export default function Footer({ resetStateGame }: IFooterProp) {
	return (
		<footer className={styles.footer}>
			<Link to='/' onClick={resetStateGame} className={styles.button}>
				Начать заново
			</Link>
		</footer>
	);
}
