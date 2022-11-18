import { fireEvent, render, waitFor } from '@testing-library/react'
import nock from 'nock'
import { applicationsFixture } from '../../__fixtures__/applications.fixture'
import Applications from './Applications'

describe('test api calls', ()=> {
	test('test succesfull api call', async () => {
		nock('http://localhost:3001')
			.persist()
			.defaultReplyHeaders({
				'access-control-allow-origin': '*',
				'access-control-allow-credentials': 'true' 
			})
			.get('/api/applications')
			.query({_page: /\d+/, _limit: /\d+/})
			.reply(200, applicationsFixture)

		const {getByTestId, queryByTestId} = render(<Applications />)
		expect(queryByTestId('test-id-0')).not.toBeInTheDocument()
		fireEvent.click(getByTestId('button'))
		await waitFor(()=>{expect(getByTestId('test-id-0')).toBeInTheDocument()})	
	})})

    