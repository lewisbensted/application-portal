import { render } from '@testing-library/react'
import { applicationsFixture } from '../../__fixtures__/applications.fixture'
import SingleApplication from './SingleApplication'


test('displays heading correctly', () => {
	const {getByTestId} = render(<SingleApplication application={applicationsFixture[0]} />)
	expect(getByTestId('test-id-0')).toBeInTheDocument()
	expect(getByTestId('test-id-0')).toHaveTextContent('Nikita Kruschev')
	expect(getByTestId('test-id-0')).toHaveTextContent('CPSU')
	expect(getByTestId('test-id-0')).toHaveTextContent('thegeneralsecretary@CPSU.com')
	expect(getByTestId('test-id-0')).toHaveTextContent('£37597')
	expect(getByTestId('test-id-0')).toHaveTextContent('10-8-2021')
	expect(getByTestId('test-id-0')).toHaveTextContent('2-12-2021')
})
