import styles from './SingleApplication.module.css'
import { Application } from '../../__fixtures__/applications.fixture'

const SingleApplication = (props:{application: Application}) => {
	const dateCreated = new Date(props.application.date_created)
	const expiryDate = new Date(props.application.expiry_date)
	return (
		<div className={styles.SingleApplication} data-testid={`test-id-${props.application.id}`}>
			<div className={styles.cell}>
				<sub>Company</sub>
				{props.application.company}
			</div>
			<div className={styles.cell}>
				<sub>Name</sub>
				{props.application.first_name} {props.application.last_name}
			</div>
			<div className={styles.cell}>
				<sub>Email</sub>
				{props.application.email}
			</div>
			<div className={styles.cell}>
				<sub>Loan Amount</sub>
				{`£${props.application.loan_amount}`}
			</div>
			<div className={styles.cell}>
				<sub>Application Date</sub>
				{`${dateCreated.getDate()}-${dateCreated.getMonth()+1}-${dateCreated.getFullYear()}`}
			</div>
			<div className={styles.cell}>
				<sub>Expiry date</sub>
				{`${expiryDate.getDate()}-${expiryDate.getMonth()+1}-${expiryDate.getFullYear()}`}
			</div>
		</div>
	)
}

export default SingleApplication
