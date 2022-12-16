import { useState } from 'react'
import Modal from 'react-modal'
import { Application } from '../../__fixtures__/applications.fixture'
import SingleLoan from '../SingleLoan/SingleLoan'
import styles from './ApplicationModal.module.css'

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		borderRadius: '8px',
		width: '70%',
	},
}

export const ApplicationModal = (props: {
	application: Application
	isOpen: boolean
	onClose: () => void
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(props.isOpen)
	const dateCreated = new Date(props.application.date_created)
	const expiryDate = new Date(props.application.expiry_date)
	return (
		<Modal
			isOpen={isOpen}
			style={customStyles}
			appElement={document.getElementsByClassName('App')}
			onRequestClose={() => {
				setIsOpen(false)
				props.onClose()
			}}
		>
			<div className={styles.ApplicationModal} data-testid="application-modal">
				<div className={styles.Info}>
					<div className={styles.PersonalInfo}>
						<img src={props.application.avatar} alt=" "></img>
						<div>
							<div className={styles.cell} data-testid="name">
								{`${props.application.first_name} ${props.application.last_name}`}
							</div>
							<div className={styles.cell} data-testid="company">
								{props.application.company}
							</div>
							<div className={styles.cell} data-testid="email">
								<a href={props.application.email}>{props.application.email}</a>
							</div>
						</div>
					</div>
					<div>
						<div className={styles.cellAmount} data-testid="loan-amount">
							<sub>Loan amount</sub>
							{`£${props.application.loan_amount}`}
						</div>
						<div className={styles.LoanInfo}>
							<div className={styles.cell} data-testid="product">
								<sub>Product</sub>
								{props.application.loan_type}
							</div>
							<div className={styles.cell} data-testid="application-date">
								<sub>Application date</sub>
								{`${dateCreated.getDate()}-${
									dateCreated.getMonth() + 1
								}-${dateCreated.getFullYear()}`}
							</div>
							<div className={styles.cell} data-testid="expiry-date">
								<sub>Expiry Date</sub>
								{`${expiryDate.getDate()}-${
									expiryDate.getMonth() + 1
								}-${expiryDate.getFullYear()}`}
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className={styles.LoanHistory}>Loan History</div>
					<div className={styles.LoanGrid}>
						<div className={styles.cell}>Start date</div>
						<div className={styles.cell}>End date</div>
						<div className={styles.cell}>Principle</div>
						<div className={styles.cell}>Interest</div>
						<div className={styles.cell}>Repayment</div>
					</div>
				</div>
				{props.application.loan_history.map((loan, index) => (
					<SingleLoan loan={loan} key={index} testId={index} />
				))}
			</div>
		</Modal>
	)
}
