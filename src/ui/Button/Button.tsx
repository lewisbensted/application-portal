import React from 'react'
import styles from './Button.module.css'

export const Button = (props:{onClick: ()=>void, children: React.ReactNode}) => {
	return <button className={styles.button} 
		onClick= {props.onClick}
	>{props.children}</button>}