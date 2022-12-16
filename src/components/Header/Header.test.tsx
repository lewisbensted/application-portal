import { render } from '@testing-library/react'
import Header from './Header'

test('test header component functions correctly', () => {
	const { getByTestId } = render(<Header>Test Heading</Header>)
	const header = getByTestId('header')
	expect(header.textContent).toEqual('Test Heading')
})
