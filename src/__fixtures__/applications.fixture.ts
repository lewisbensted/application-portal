export interface Application {
	id: number
	loan_amount: number
	first_name: string
	last_name: string
	company: string
	email: string
	date_created: string
	expiry_date: string
	loan_history: Loan[]
	loan_type: string
	avatar?: string
}

export interface Loan {
	interest: number
	interest_rate: number
	loan_started: string
	loan_ended: string
	principle: number
}

export const applicationsFixture: Application[] = [
	{
		id: 0,
		loan_amount: 37597,
		first_name: 'Nikita',
		last_name: 'Kruschev',
		company: 'CPSU',
		email: 'thegeneralsecretary@CPSU.com',
		date_created: '2021-08-10T00:00:00Z',
		expiry_date: '2021-12-02T00:00:00Z',
		loan_type: 'a type of loan',
		loan_history: [
			{
				interest: 1643,
				interest_rate: 0.03,
				loan_ended: '2021-07-17T01:53:34Z',
				loan_started: '2021-04-29T22:39:36Z',
				principle: 54797,
			},
			{
				interest: 2217,
				interest_rate: 0.05,
				loan_ended: '2020-12-05T03:03:09Z',
				loan_started: '2020-02-19T22:55:15Z',
				principle: 44355,
			},
			{
				interest: 1010,
				interest_rate: 0.05,
				loan_ended: '2021-03-17T01:53:34Z',
				loan_started: '2021-01-29T22:39:36Z',
				principle: 54797,
			},
		],
	},
]
