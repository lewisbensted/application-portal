import { useState } from 'react'
import { Button } from '../Button/Button'
import Modal from 'react-modal'

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

export const ErrorModal = (props:{isError:boolean}) =>{
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(props.isError)
	return(
		<div>
			<Modal isOpen = {modalIsOpen} style={customStyles} ariaHideApp={false}>
				<h2>Something went wrong!</h2>
				<div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
					<Button onClick={()=>setModalIsOpen(false)}>OK</Button></div>
			</Modal>
			
		</div>)
}