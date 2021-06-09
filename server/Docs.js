import mongoose from 'mongoose'

const Schema = mongoose.Schema;


const Docs = new Schema({
    id: Number,
    title: String,
    date: String,
    deadline: String,
    pos: Object,
    payment: String
});


export default mongoose.model('Docs', Docs)
