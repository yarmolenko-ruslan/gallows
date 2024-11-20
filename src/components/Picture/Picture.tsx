import { useContext } from 'react';
import { Context } from '../../context/constants';
import styles from './picture.module.scss';

function Picture() {
	const { wrongGuesses, maxWrongGuesses } = useContext(Context);

	const remained = maxWrongGuesses - wrongGuesses;

	return (
		<section className={styles.picture}>
			<img
				className={styles.img}
				src={`/images/${remained}.png`}
				alt='Виселица'
				title='Виселица'
			/>
		</section>
	);
}

export default Picture;
