import express from 'express';

const app = express();

app.get('/', (req,res) => res.send('Hello World!'));

const port = 5000;
app.listen(port, () => {
    console.log(`Todo app listening at http://localhost:${port}.`);
});