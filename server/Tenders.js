import mongoose from 'mongoose'

const Schema = mongoose.Schema;


const Tenders = new Schema({
    id: Number,
    title: String
});


export default mongoose.model('Tenders', Tenders)
