const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')

const app = express();

//cors must be set to the react app's domain, and credentials allowed in order to successfully set cookies on the browser.
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(cookieParser())

app.get('/', (_, res) => res.send('Hello World!'));

app.get('/api/cookies', (request, response) => {
    var cookies = Object.entries(request.cookies);
    console.log('cookies: ', cookies);
    response.send(cookies);
});

app.post('/api/cookies/random', (request, response) => {
    const randomValue = `totally random! ${Math.random()}`
    response.cookie('random', randomValue)
    response.end();
});

app.put('/api/cookies/username', (request, response) => {
    const updatedUsername = `an updated username!`
    response.cookie('username', updatedUsername)
    response.end();
});

app.get('/api/cookies/username', (_, response) => {
    const username = 'A user from the cookie!'
    response.cookie('username', username)
    response.end();
});

app.delete('/api/cookies/username', (_, response) => {
    response.clearCookie('username');
    response.end();
});

const port = 5000;
app.listen(port, () => {
    console.log(`Todo app listening at http://localhost:${port}.`);
});