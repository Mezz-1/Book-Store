import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: {type:String, required: true},
    author:{type: String, required: true},
    price: {type: Number, required: true},
    publised_at: {type: Date, default: Date.now},
    categorie: {type: mongoose.Schema.Types.ObjectId, ref: 'Categorie', required: false}
});

const Book = mongoose.model('Book', bookSchema);
export default Book;