import SingleApplication from './SingleApplication'
import { Application, getApplicationsFixture } from './__fixtures__/applications.fixture'
import styles from './Applications.module.css'
import { Button } from './ui/Button/Button'
import { useState } from 'react'
import axios from 'axios'


const Applications = () => {
	const [visibleApplications, setVisibleApplications] = useState<Application[]>([getApplicationsFixture[0]])
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [pageNumber, setPageNumber] = useState<number>(1)
	const numberToLoad = 5
	
	return (
		<div>
			<div className={styles.Applications}>
				{visibleApplications.map((application, index)=><SingleApplication application = {application} key={index}/>)}
			</div>
		
			<div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
				{isLoading? <h1>loading...</h1>: 
					<Button onClick={() => {	
						setIsLoading(true)
						axios.get(`http://localhost:3001/api/applications?_page=${pageNumber}&_limit=${numberToLoad}`)
							.then(data=>{
								setVisibleApplications([...visibleApplications, ...data.data])
								setPageNumber(pageNumber+1)
								setIsLoading(false)})
							.catch(error=>console.log(error.message))}
					}> Load more </Button>}
			</div>

			
			
		</div>
	)
}

export default Applications
