import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getbook, deletebook } from "../api/booksApi";

export default function BookDetails() {
    const { id } = useParams(); // Get the book ID from the URL
    const navigate = useNavigate();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchBookDetails();
    }, [id]);

    async function fetchBookDetails() {
        try {
            setLoading(true);
            const books = await getbook(); // Get all books
            const foundBook = books.find(b => b._id === id); // Find the specific book
            setBook(foundBook);
        } catch (error) {
            console.error("Error fetching book:", error);
            setError("Failed to load book details");
        } finally {
            setLoading(false);
        }
    }

    async function handleDelete() {
        if (window.confirm("Are you sure you want to delete this book?")) {
            try {
                await deletebook(id);
                alert("Book deleted successfully!");
                navigate("/books"); // Redirect to books list
            } catch (error) {
                console.error("Error deleting book:", error);
                alert("Failed to delete book");
            }
        }
    }

    if (loading) return <div>Loading book details...</div>;
    if (error) return <div style={{ color: "red" }}>{error}</div>;
    if (!book) return <div>Book not found</div>;

    return (
        <div style={{ maxWidth: "600px", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h1>Book Details</h1>
            
            <div style={{ marginBottom: "15px" }}>
                <strong>Title:</strong> {book.title}
            </div>
            
            <div style={{ marginBottom: "15px" }}>
                <strong>Author:</strong> {book.author}
            </div>
            
            <div style={{ marginBottom: "15px" }}>
                <strong>Price:</strong> ${book.price}
            </div>
            
            <div style={{ marginBottom: "15px" }}>
                <strong>Category:</strong> {book.categorie?.name || "No category"}
            </div>
            
            <div style={{ marginBottom: "15px" }}>
                <strong>Published Date:</strong> {new Date(book.published_at).toLocaleDateString()}
            </div>
            
            <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
                <Link to={`/books/edit/${book._id}`}>
                    <button style={{ padding: "8px 16px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                        Edit Book
                    </button>
                </Link>
                
                <button 
                    onClick={handleDelete}
                    style={{ padding: "8px 16px", backgroundColor: "#f44336", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
                >
                    Delete Book
                </button>
                
                <Link to="/books">
                    <button style={{ padding: "8px 16px", backgroundColor: "#666", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                        Back to List
                    </button>
                </Link>
            </div>
        </div>
    );
}