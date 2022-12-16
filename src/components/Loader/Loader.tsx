import styles from './Loader.module.css'
import { ClipLoader } from 'react-spinners'

export const Loader = () => {
	return (
		<div className={styles.Loader}>
			<ClipLoader color="var(--color-denim-15)" size="50px" />
		</div>
	)
}
