import Categorie from "../models/Categorie.js"
export async function getCategories(req,res){
    const categories= await Categorie.find();
    res.json(categories);
}
export async function addCategory(req,res){
    const c=await Categorie.create(req.body);
    res.json(c);
}