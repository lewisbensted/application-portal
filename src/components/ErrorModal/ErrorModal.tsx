import { useState } from 'react'
import { Button } from '../Button/Button'
import Modal from 'react-modal'
import Header from '../Header/Header'

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		borderRadius: '8px',
	},
}

export const ErrorModal = (props: {
	isError: boolean
	onClose: () => void
}) => {
	const [ModalIsOpen, setModalIsOpen] = useState<boolean>(props.isError)
	return (
		<Modal
			isOpen={ModalIsOpen}
			style={customStyles}
			appElement={document.getElementsByClassName('App')}
		>
			<div data-testid="error-modal" className="ErrorModal">
				<Header size={2}>Something went wrong!</Header>
				<Header size={3}>Please try loading the applications again.</Header>
				<Button
					onClick={() => {
						setModalIsOpen(false)
						props.onClose()
					}}
				>
					OK
				</Button>
			</div>
		</Modal>
	)
}
