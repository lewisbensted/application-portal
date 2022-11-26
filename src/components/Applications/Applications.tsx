import SingleApplication from '../SingleApplication/SingleApplication'
import { Application } from '../../__fixtures__/applications.fixture'
import styles from './Applications.module.css'
import { Button } from '../Button/Button'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Loader } from '../Loader/Loader'
import { ErrorModal } from '../ErrorModal/ErrorModal'
import Header from '../Header/Header'

const Applications = () => {
	const increment = 5
	const numberToLoad = 20
	const [numberVisible, setNumberVisible] = useState<number>(increment)
	const [page, setPage] = useState<number>(1)
	const [applications, setApplications] = useState<Application[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [isError, setIsError] = useState<boolean>(false)
	const [allDataLoaded, setAllDataLoaded] = useState<boolean>(false)

	function getApiData() {
		setIsLoading(true)
		axios
			.get(
				`http://localhost:3001/api/applications?_page=${page}&_limit=${numberToLoad}`
			)
			.then(res => {
				setApplications([...applications, ...res.data])
				setPage(page + 1)
				if (res.data.length === 0) {
					setAllDataLoaded(true)
				}
			})
			.catch(error => {
				console.log(error.message)
				setIsError(true)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}

	useEffect(() => {
		getApiData()
	}, [])

	return (
		<div className={styles.application}>
			{isError ? (
				<ErrorModal
					isError={isError}
					onClose={() => {
						setIsError(false)
					}}
				/>
			) : (
				<div className={styles.Applications}>
					{applications.slice(0, numberVisible).map((application, index) => (
						<SingleApplication application={application} key={index} />
					))}
					{isLoading ? (
						<Loader />
					) : allDataLoaded ? (
						<Header size={2}>All data loaded!</Header>
					) : (
						<Button
							testId="load-button"
							onClick={() => {
								if (numberVisible + increment >= applications.length) {
									getApiData()
								}
								setNumberVisible(numberVisible + increment)
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
