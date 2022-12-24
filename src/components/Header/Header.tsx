import React from 'react'
import styles from './Header.module.css'

const Header = (props: { children: React.ReactNode; size: 1 | 2 | 3 }) => {
	return (
		<div className={styles.Header} data-testid={`header-${props.size}`}>
			{props.size === 1 ? (
				<h1>{props.children}</h1>
			) : props.size === 2 ? (
				<h2>{props.children}</h2>
			) : (
				<h3>{props.children}</h3>
			)}
		</div>
	)
}

export default Header
