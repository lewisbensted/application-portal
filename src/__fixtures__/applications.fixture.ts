export interface Application {
  id: number,
  loan_amount: number,
  first_name: string,
  last_name: string,
  company: string,
  email: string,
  date_created: string,
  expiry_date: string,
  loan_history: Loan[]
}

export interface Loan{
	interest: number,
	interest_rate: number,
	loan_started: string,
	loan_ended: string,
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
		loan_history: []
	},
]
