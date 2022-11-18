import SingleApplication from '../SingleApplication/SingleApplication'
import { Application } from '../../__fixtures__/applications.fixture'
import styles from './Applications.module.css'
import { Button } from '../Button/Button'
import { useState } from 'react'
import axios from 'axios'
import { Loader } from '../Loader/Loader'
import { ErrorModal } from '../ErrorModal/ErrorModal'



const Applications = () => {
	const [visibleApplications, setVisibleApplications] = useState<Application[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [pageNumber, setPageNumber] = useState<number>(1)
	const [allDataLoaded, setAllDataLoaded] = useState<boolean>(false)
	const [isError, setIsError] = useState<boolean>(false)
	
	function getApiData(pageNumber: number, numberToLoad: number){
		setIsLoading(true)
		axios.get(`http://localhost:3001/api/appications?_page=${pageNumber}&_limit=${numberToLoad}`)
			.then(res=>{
				if (res.data.length===0){setAllDataLoaded(true)}
				setVisibleApplications([...visibleApplications, ...res.data])
				setPageNumber(pageNumber+1)
			}).catch(error=>{
				console.log(error.message)
				setIsError(true)
			}).finally(()=>setIsLoading(false))
	}

	
	return (
		<div>
			{isError?<ErrorModal isError={isError}/>:<ErrorModal isError={isError}/>}
			{isError?<h1>error</h1>:<h1>no error</h1>}
			<div className={styles.Applications}>
				{visibleApplications.map((application, index)=>
					<SingleApplication application = {application} key={index}/>)}
			</div>
		
			<div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
				{isLoading? <Loader />: 
					allDataLoaded ? <h1>all data loaded</h1> :
						<Button onClick={() => {	
						
							getApiData(pageNumber, 5)
						}}> Load more applications
						</Button>
				}
			</div>
		</div>
	)
}

export default Applications
