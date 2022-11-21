import { useState } from 'react'
import Modal from 'react-modal'
import { Application } from '../../__fixtures__/applications.fixture'

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
}

export const ApplicationModal = (props: {
	application: Application,
	isOpen: boolean
	onClose: ()=>void
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(props.isOpen)
	return (
		<div>
			<Modal isOpen={isOpen} style={customStyles} 
				onRequestClose={()=>{
					setIsOpen(false)
					props.onClose()}} appElement={document.getElementsByClassName('App')}>
				<h5>{props.application.first_name}</h5>
				<h5>{props.application.last_name}</h5>
				<h5>{props.application.loan_amount}</h5>
                
				{props.application.loan_history.map((loan, index) => (
					<div key={index} style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
						<h5>{loan.interest}</h5>
						<h5>{loan.interest_rate}</h5>
						<h5>{loan.principle}</h5>
					</div>
				))}		
			</Modal>
		</div>
	)
}
