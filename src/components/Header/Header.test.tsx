import { render } from '@testing-library/react'
import Header from './Header'

test('test header component functions correctly', () => {
	const { getByTestId } = render(<Header size={2}>Test Heading</Header>)
	const header = getByTestId('header-2')
	expect(header.textContent).toEqual('Test Heading')
})
