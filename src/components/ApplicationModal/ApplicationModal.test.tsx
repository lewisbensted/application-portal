import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import { applicationsFixture } from '../../__fixtures__/applications.fixture'
import { ApplicationModal } from './ApplicationModal'

test('test application modal component functions correctly', () => {
	const mockFn = jest.fn()
	const { getByTestId } = render(
		<ApplicationModal
			application={applicationsFixture[0]}
			isOpen={true}
			onClose={mockFn}
		/>
	)
	const applicationModal = getByTestId('application-modal')
	expect(getByTestId('name')).toHaveTextContent('Nikita Kruschev')
	expect(getByTestId('company')).toHaveTextContent('CPSU')
	expect(getByTestId('email')).toHaveTextContent('thegeneralsecretary@CPSU.com')
	expect(getByTestId('loan-amount')).toHaveTextContent('37597')
	expect(getByTestId('product')).toHaveTextContent('a type of loan')
	expect(getByTestId('application-date')).toHaveTextContent('10-8-2021')
	expect(getByTestId('expiry-date')).toHaveTextContent('2-12-2021')
	expect(getByTestId('single-loan-0')).toBeInTheDocument()
	expect(getByTestId('single-loan-1')).toBeInTheDocument()
	expect(getByTestId('single-loan-2')).toBeInTheDocument()
	fireEvent.click(document.body)
	expect(applicationModal).not.toBeInTheDocument()
	expect(mockFn).toHaveBeenCalled()
})
