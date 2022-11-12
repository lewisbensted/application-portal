export interface Application {
  guid: string,
  loanAmount: number,
  firstName: string,
  lastName: string,
  company: string,
  email: string,
  dateCreated: string,
  expiryDate: string,
}

export const getApplicationsFixture: Application[] = [
  {
    guid: "8a8f6cbc-77a1-4086-8968-a57816f4ff60",
    loanAmount: 37597,
    firstName: "Nikita",
    lastName: "Kruschev",
    company: "CPSU",
    email: "thegeneralsecretary@CPSU.com",
    dateCreated: "2021-08-10",
    expiryDate: "2021-12-02",
  },
];
