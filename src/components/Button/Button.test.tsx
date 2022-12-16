import { render } from '@testing-library/react'
import { Button } from './Button'

test('test button component functions correctly', () => {
	const mockFn = jest.fn()
	const { getByTestId } = render(<Button onClick={mockFn}>Test Button</Button>)
	const button = getByTestId('button')
	expect(button.textContent).toEqual('Test Button')
	button.click()
	expect(mockFn).toHaveBeenCalled()
})
