import mongoose from "mongoose";

const CategorieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }});
    const Categorie = mongoose.model('Categorie', CategorieSchema);
    export default Categorie;
     