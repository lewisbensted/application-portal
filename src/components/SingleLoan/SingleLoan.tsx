import styles from './SingleLoan.module.css'
import { Loan } from '../../__fixtures__/applications.fixture'

const SingleLoan = (props: { loan: Loan }) => {
	const loanStarted = new Date(props.loan.loan_started)
	const loanEnded = new Date(props.loan.loan_ended)
	const interest = Number(
		(props.loan.principle * props.loan.interest_rate).toFixed(2)
	)
	const repayment = interest + props.loan.principle
	return (
		<div className={styles.SingleLoan}>
			<div className={styles.cell}>{`${loanStarted.getDate()}-${
				loanStarted.getMonth() + 1
			}-${loanStarted.getFullYear()}`}</div>
			<div className={styles.cell}>{`${loanEnded.getDate()}-${
				loanEnded.getMonth() + 1
			}-${loanEnded.getFullYear()}`}</div>
			<div className={styles.cell}>{`£${props.loan.principle}`}</div>
			<div className={styles.cell}>{`£${interest}`}</div>
			<div className={styles.cell}>{`£${repayment}`}</div>
		</div>
	)
}

export default SingleLoan
