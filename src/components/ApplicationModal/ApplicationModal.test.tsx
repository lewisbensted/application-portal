import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'
import { applicationsFixture } from '../../__fixtures__/applications.fixture'
import { ApplicationModal } from './ApplicationModal'

test('test application modal component functions correctly', () => {
	const mockFn = jest.fn()
	render(
		<ApplicationModal
			application={applicationsFixture[0]}
			isOpen={true}
			onClose={mockFn}
		/>
	)
	const applicationModal = screen.getByTestId('application-modal')
	expect(screen.getByTestId('name')).toHaveTextContent('Nikita Kruschev')
	expect(screen.getByTestId('company')).toHaveTextContent('CPSU')
	expect(screen.getByTestId('email')).toHaveTextContent(
		'thegeneralsecretary@CPSU.com'
	)
	expect(screen.getByTestId('loan-amount')).toHaveTextContent('37597')
	expect(screen.getByTestId('product')).toHaveTextContent('a type of loan')
	expect(screen.getByTestId('application-date')).toHaveTextContent('10-8-2021')
	expect(screen.getByTestId('expiry-date')).toHaveTextContent('2-12-2021')
	expect(screen.getByTestId('single-loan-0')).toBeInTheDocument()
	expect(screen.getByTestId('single-loan-1')).toBeInTheDocument()
	expect(screen.getByTestId('single-loan-2')).toBeInTheDocument()
	fireEvent.click(document.body)
	expect(applicationModal).not.toBeInTheDocument()
	expect(mockFn).toHaveBeenCalled()
})
