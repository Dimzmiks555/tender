import mongoose from 'mongoose'

const Schema = mongoose.Schema;


const Tenders = new Schema({
    id: Number,
    title: String,
    pos: Object
});


export default mongoose.model('Tenders', Tenders)
