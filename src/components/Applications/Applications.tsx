import SingleApplication from '../SingleApplication/SingleApplication'
import { Application } from '../../__fixtures__/applications.fixture'
import styles from './Applications.module.css'
import { Button } from '../Button/Button'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Loader } from '../Loader/Loader'
import { ErrorModal } from '../ErrorModal/ErrorModal'

const Applications = () => {
	const increment = 5
	const [applications, setApplications] = useState<Application[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [numberOfVisibleApplications, setNumberOfVisibleApplications] =
		useState<number>(increment)
	const [isError, setIsError] = useState<boolean>(false)

	function getApiData() {
		setIsLoading(true)
		axios
			.get('http://localhost:3001/api/applications')
			.then(res => {
				setApplications([...res.data])
			})
			.catch(error => {
				console.log(error.message)
				setIsError(true)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}

	useEffect(() => getApiData(), [])

	return (
		<div className={styles.application}>
			{isLoading ? (
				<Loader />
			) : isError ? (
				<ErrorModal
					isError={isError}
					onClose={() => {
						setIsError(false)
					}}
				/>
			) : (
				<div className={styles.Applications}>
					{applications
						.slice(0, numberOfVisibleApplications)
						.map((application, index) => (
							<SingleApplication application={application} key={index} />
						))}
					{numberOfVisibleApplications === applications.length ? null : (
						<Button
							testId="load-button"
							onClick={() => {
								if (applications.length === 0) {
									getApiData()
								} else {
									setNumberOfVisibleApplications(
										numberOfVisibleApplications + increment
									)
								}
							}}>
							Load more applications
						</Button>
					)}
				</div>
			)}
		</div>
	)
}

export default Applications
