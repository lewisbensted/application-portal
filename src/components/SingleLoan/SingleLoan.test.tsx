import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { applicationsFixture } from '../../__fixtures__/applications.fixture'
import SingleLoan from './SingleLoan'

test('test single loan component functions correctly', () => {
	const { getByTestId } = render(
		<SingleLoan loan={applicationsFixture[0].loan_history[0]} testId={0} />
	)
	const singleLoan = getByTestId('single-loan-0')
	expect(singleLoan).toHaveTextContent('17-7-2021')
	expect(singleLoan).toHaveTextContent('29-4-2021')
	expect(singleLoan).toHaveTextContent('£54797')
	expect(singleLoan).toHaveTextContent('£1643.91')
	expect(singleLoan).toHaveTextContent('£56440.91')
})
