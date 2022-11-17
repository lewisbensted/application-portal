import styles from './Header.module.css'

const Header = () => {
	return (
		<div className={styles.Header} style={styles} data-testid='header'>
			<h1>Application Portal</h1>
		</div>
	)
}

export default Header
