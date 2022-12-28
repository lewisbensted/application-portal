import { act, fireEvent, render, waitFor, screen } from '@testing-library/react'
import nock from 'nock'
import { applicationsFixture } from '../../__fixtures__/applications.fixture'
import Applications from './Applications'

xdescribe('test applications component functions correctly', () => {
	test('test succesfull api call', async () => {
		nock('http://localhost:3001')
			.defaultReplyHeaders({
				'access-control-allow-origin': '*',
				'access-control-allow-credentials': 'true',
			})
			.get('/api/applications')
			.query({ _page: /\d+/, _limit: /\d+/ })
			.reply(200, applicationsFixture)

		act(() => {
			render(<Applications />)
			fireEvent.click(screen.getByTestId('button'))
		})
		fireEvent.click(screen.getByTestId('button'))

		waitFor(() => {
			expect(screen.getByTestId('test-id-0')).toBeInTheDocument()
		})
	})
	test('test unsuccesfull api call', async () => {
		nock('http://localhost:3001')
			.defaultReplyHeaders({
				'access-control-allow-origin': '*',
				'access-control-allow-credentials': 'true',
			})
			.get('/api/applications')
			.query({ _page: /\d+/, _limit: /\d+/ })
			.reply(400, 'test error message')

		act(() => {
			render(<Applications />)
			fireEvent.click(screen.getByTestId('button'))
		})
		waitFor(() => {
			expect(screen.getByTestId('error-modal')).toBeInTheDocument()
		})
	})
})
