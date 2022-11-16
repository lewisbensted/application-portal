import SingleApplication from './SingleApplication'
import { Application, getApplicationsFixture } from './__fixtures__/applications.fixture'
import styles from './Applications.module.css'
import { Button } from './ui/Button/Button'
import { useState } from 'react'
import axios from 'axios'
import { Loader } from './ui/Button/Loader'


const Applications = () => {
	const [visibleApplications, setVisibleApplications] = useState<Application[]>([getApplicationsFixture[0]])
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [pageNumber, setPageNumber] = useState<number>(1)
	const [allDataLoaded, setAllDataLoaded] = useState<boolean>(false)
	
	function getApiData(pageNumber: number, numberToLoad: number){
		axios.get(`http://localhost:3001/api/applications?_page=${pageNumber}&_limit=${numberToLoad}`)
			.then(data=>{
				if (data.data.length===0){setAllDataLoaded(true)}
				setVisibleApplications([...visibleApplications, ...data.data])
				setPageNumber(pageNumber+1)
				setIsLoading(false)})
			.catch(error=>console.log(error.message))

	}
	
	return (
		<div>
			<div className={styles.Applications}>
				{visibleApplications.map((application, index)=>
					<SingleApplication application = {application} key={index}/>)}
			</div>
		
			<div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
				{isLoading? <Loader />: 
					allDataLoaded ? <h1>all data loaded</h1> :
						<Button onClick={() => {	
							setIsLoading(true)
							getApiData(pageNumber, 5)
						}}> Load more </Button>}
			</div>
		</div>
	)
}

export default Applications
