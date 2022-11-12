import styles from "./SingleApplication.module.css";
import { Application } from "./__fixtures__/applications.fixture";

const SingleApplication = (props:{application: Application}) => {
  return (
    <div className={styles.SingleApplication}>
      <div className={styles.cell}>
        <sub>Company</sub>
        {props.application.company}
      </div>
      <div className={styles.cell}>
        <sub>Name</sub>
        {props.application.firstName} {props.application.lastName}
      </div>
      <div className={styles.cell}>
        <sub>Email</sub>
        {props.application.email}
      </div>
      <div className={styles.cell}>
        <sub>Loan Amount</sub>
        {props.application.loanAmount}
      </div>
      <div className={styles.cell}>
        <sub>Application Date</sub>
        {props.application.dateCreated}
      </div>
      <div className={styles.cell}>
        <sub>Expiry date</sub>
        {props.application.expiryDate}
      </div>
    </div>
  );
};

export default SingleApplication;
