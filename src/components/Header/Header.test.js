import { render, screen } from '@testing-library/react'
import Header from './Header'

test('displays heading correctly', () => {
	render(<Header />)
	const linkElement = screen.getByTestId('header').textContent
	expect(linkElement).toEqual('Application Portal')
})
