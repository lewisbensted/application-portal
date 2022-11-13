export interface Application {
  guid: string,
  loan_amount: number,
  first_name: string,
  last_name: string,
  company: string,
  email: string,
  date_created: string,
  expiry_date: string,
}

export const getApplicationsFixture: Application[] = [
	{
		guid: '8a8f6cbc-77a1-4086-8968-a57816f4ff60',
		loan_amount: 37597,
		first_name: 'Nikita',
		last_name: 'Kruschev',
		company: 'CPSU',
		email: 'thegeneralsecretary@CPSU.com',
		date_created: '2021-08-10',
		expiry_date: '2021-12-02',
	},
];
