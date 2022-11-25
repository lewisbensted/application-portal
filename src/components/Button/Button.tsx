import React from 'react'
import styles from './Button.module.css'

export const Button = (props: {
	onClick: () => void
	children: React.ReactNode
	testId: string
}) => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
			}}>
			<button
				data-testid={props.testId}
				className={styles.button}
				onClick={props.onClick}>
				{props.children}
			</button>
		</div>
	)
}
