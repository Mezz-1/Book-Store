import { useEffect, useState } from "react"
import { addbook } from "../api/booksApi"
import { getCategories } from "../api/categoriesApi"

export default function BookForm({ onBookAdded }){
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [price, setPrice] = useState("")
    const [published_at, setPublishedAt] = useState("")
    const [categories, setCategories] = useState([])
    const [categoryId, setCategoryId] = useState("")
    
    useEffect(() => {
        fetchCategories();
    }, [])
    
    async function fetchCategories() {
        const resp = await getCategories();
        setCategories(resp.data)
    }
    
    async function HandleForm(e){
        e.preventDefault(); // ← IMPORTANT: Add this
        
        // Create book data with categorie ID (not the whole object)
        const bookData = {
            title,
            author,
            price: parseFloat(price),
            published_at: published_at || new Date(),
            categorie: categoryId  // ← Send just the ID, not the whole category
        };
        
        console.log("Sending book data:", bookData); // Debug
        
        await addbook(bookData);
        
        // Reset form
        setTitle("");
        setAuthor("");
        setPrice("");
        setPublishedAt("");
        setCategoryId("");
        
        // Refresh the book list if callback exists
        if (onBookAdded) onBookAdded();
    }
    
    return(
        <form onSubmit={HandleForm}>
            <label htmlFor="title">title</label>
            <input 
                type="text" 
                id="title" 
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
            />
            <br></br>
            
            <label htmlFor="author">author</label>
            <input 
                type="text" 
                id="author" 
                value={author}
                onChange={e => setAuthor(e.target.value)}
                required
            />
            <br/>
            
            <label htmlFor="price">price</label>
            <input 
                type="number" 
                id="price" 
                value={price}
                onChange={e => setPrice(e.target.value)}
                required
            />
            <br/>
            
            <label htmlFor="published_at">published_at</label>
            <input 
                type="date"  // Changed from "number" to "date"
                id="published_at" 
                value={published_at}
                onChange={e => setPublishedAt(e.target.value)}
            />
            <br/>
            
            <label htmlFor="category">category</label>
            <select 
                id="category" 
                value={categoryId}
                onChange={e => setCategoryId(e.target.value)}
                required
            >
                <option value="">Select a category</option>
                {categories.map(c => (
                    <option key={c._id} value={c._id}>{c.name}</option>
                ))}
            </select>
            <br/>
            
            <input type="submit" value={"Envoyer"}/>
            <input type="reset" value={"Annuler"}/>
        </form>
    )
}