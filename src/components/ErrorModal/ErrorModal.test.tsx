import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { ErrorModal } from './ErrorModal'

test('test error modal component functions correctly', () => {
	const mockFn = jest.fn()
	const { getByTestId } = render(<ErrorModal isError={true} onClose={mockFn} />)
	const errorModal = getByTestId('error-modal')
	expect(errorModal).toBeInTheDocument()
	getByTestId('button').click()
	expect(errorModal).not.toBeInTheDocument()
	expect(mockFn).toHaveBeenCalled()
})
