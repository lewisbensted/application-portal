import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { applicationsFixture } from '../../__fixtures__/applications.fixture'
import SingleLoan from './SingleLoan'

test('displays heading correctly', () => {
	const { getByTestId } = render(
		<SingleLoan loan={applicationsFixture[0].loan_history[0]} />
	)
	expect(getByTestId('single-loan')).toBeInTheDocument()
	expect(getByTestId('single-loan')).toHaveTextContent('17-7-2021')
	expect(getByTestId('single-loan')).toHaveTextContent('29-4-2021')
	expect(getByTestId('single-loan')).toHaveTextContent('£54797')
	expect(getByTestId('single-loan')).toHaveTextContent('£1643.91')
	expect(getByTestId('single-loan')).toHaveTextContent('£56440.91')
})
