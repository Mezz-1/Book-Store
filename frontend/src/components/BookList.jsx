import React, { useState, useEffect } from "react";
import { getbook, deletebook } from "../api/booksApi";
import BookCard from "./BookCard"; 

export default function BookList() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchBooks() {
        try {
            const data = await getbook();
            setBooks(data);
        } catch (error) {
            console.error("Error fetching books:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchBooks();
    }, []); 

    // Correction de handleDelete
    async function handleDelete(deletedId) {
        try {
            await deletebook(deletedId); // Appeler la suppression d'abord
            await fetchBooks(); // Puis rafraîchir la liste
        } catch (error) {
            console.error("Error deleting book:", error);
        }
    }

    if (loading) {
        return <div>Loading books...</div>;
    }

    return (
        <>
            {books.length === 0 ? (
                <p>No books found</p>
            ) : (
                books.map((b) => (
                    <BookCard 
                        key={b._id} 
                        book={b} 
                        onDelete={handleDelete} 
                    />
                ))
            )}
        </>
    );
}