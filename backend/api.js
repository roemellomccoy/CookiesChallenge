import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/todos', (req, res) => {
    const todos = [
        {
            id: 1,
            description: "my first todo!",
            isComplete: false
        },
        {
            id: 2,
            description: "a completed todo!",
            isComplete: true
        },
        {
            id: 3,
            description: "something to do with tacos!",
            isComplete: false
        },
    ];
    res.send(todos);
});

const port = 5000;
app.listen(port, () => {
    console.log(`Todo app listening at http://localhost:${port}.`);
});