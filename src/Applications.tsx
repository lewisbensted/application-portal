import SingleApplication from './SingleApplication'
import { getApplicationsFixture } from './__fixtures__/applications.fixture'
import styles from './Applications.module.css'
import { Button } from './ui/Button/Button'

const Applications = () => {
	const applications = getApplicationsFixture


	
	return (
		<div className={styles.Applications}>
			<SingleApplication application={applications[0]} />
			<Button onClick={()=>console.log('hi')}> show me the money </Button>  
		</div>
	)
}

export default Applications
