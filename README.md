## Application Portal Front-end Practice

This project was a front-end interview task requiring an application portal to be built which displays information relating to a number of bank loans, with a modal to display each application in more detail when clicked. The data was fetched using an API created using the [`json-server`](https://www.npmjs.com/package/json-server) package, loading only 20 applications at a time and displaying these on the screen in increments of 5. This was done to mimic a project with a larger volume of data, where it would be beneficial to load smaller amounts of data on each API call instead of fetching and storing all the data at once. 
The backend of this project is contained in the 'json-server' directory, which uses node.js and was already set up at the beginning of the task. The frontend is written in React Typescript.

### Setup

1. Clone this repo to your local machine.
1. Make sure you are using the correct node version:
    1. Manually: `node -v` should return `16.13.0`.
    2. Using `nvm`: Run `nvm install` to install the node version and `nvm use` to use it.
1. Install the dependencies with `npm install`.
1. Run `npm start` to start the frontend and the api server.

