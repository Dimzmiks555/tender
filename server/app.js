import express from 'express';
import tendersRouter from './TendersRouter.js'
import mongoose from 'mongoose'

const app = express();



const port = 5000;


app.use(express.json());
app.use(express.static('static'));
app.use('/api', tendersRouter);

async function startApp() {
    try {
        await mongoose.connect("mongodb://localhost:27017/tendersdb", { useUnifiedTopology: true, useNewUrlParser: true });
        app.listen(port, () => console.log('SERVER STARTED ON PORT ' + port))
    } catch (e) {
        console.log(e)
    }
}

startApp()
