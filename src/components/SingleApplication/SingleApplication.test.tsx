import { render } from '@testing-library/react'
import { applicationsFixture } from '../../__fixtures__/applications.fixture'
import SingleApplication from './SingleApplication'

test('test single application component functions correctly', () => {
	const { getByTestId } = render(
		<SingleApplication application={applicationsFixture[0]} />
	)
	const singleApplication = getByTestId('single-application-0')
	expect(singleApplication).toHaveTextContent('Nikita Kruschev')
	expect(singleApplication).toHaveTextContent('CPSU')
	expect(singleApplication).toHaveTextContent('thegeneralsecretary@CPSU.com')
	expect(singleApplication).toHaveTextContent('£37597')
	expect(singleApplication).toHaveTextContent('10-8-2021')
	expect(singleApplication).toHaveTextContent('2-12-2021')
})
