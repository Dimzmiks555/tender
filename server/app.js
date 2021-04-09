import express from 'express';
import tendersRouter from './TendersRouter.js'


const app = express();


const port = 5000;
app.use(express.json());
app.use(express.static('static'));
app.use('/api', tendersRouter);

app.listen(port, () => console.log(`Running on port ${port}`));
