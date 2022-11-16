import { fireEvent, render, waitFor } from '@testing-library/react'
import nock from 'nock'
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
			.reply(200, {data:[{
				id: 0,
				loan_amount: 37597,
				first_name: 'lew',
				last_name: 'jam',
				company: 'HMRC',
				email: 'thegeneralsecretary@CPSU.com',
				date_created: '2021-08-10T00:00:00Z',
				expiry_date: '2021-12-02T00:00:00Z',
				loan_history: []
			}]})


		
					
		const {getByTestId, findByTestId} = render(<Applications />)
		expect(getByTestId('test-id-0')).toHaveTextContent('Nikita')
		fireEvent.click(getByTestId('button'))
		await waitFor(()=>{expect(getByTestId('test-id-1')).toHaveTextContent('lew jam')})	
	})})

    