import React from 'react'
import styles from './Button.module.css'

export const Button = (props: {
	onClick: () => void
	children: React.ReactNode
}) => {
	return (
		<div className={styles.ButtonDiv}>
			<button
				className={styles.button}
				data-testid="button"
				onClick={props.onClick}
			>
				{props.children}
			</button>
		</div>
	)
}
