import express from 'express';
import tendersRouter from './TendersRouter.js'
import mongoose from 'mongoose'
import cors from 'cors';
const app = express();


const DB_URL = 'mongodb+srv://tender:19Lipo82@cluster0.zl8ak.mongodb.net/mytenders?retryWrites=true&w=majority'
const port = 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('static'));
app.use('/api', tendersRouter);
async function startApp() {
    try {
        await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
        app.listen(port, () => console.log('SERVER STARTED ON PORT ' + port))
    } catch (e) {
        console.log(e)
    }
}

startApp()
