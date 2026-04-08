import { Link } from "react-router-dom";

export default function BookCard({ book, onDelete }) {
    async function handleDelete() {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer ce livre ?")) {
            await onDelete(book._id); // Appeler la fonction parent avec l'ID
        }
    }

    return (
        <div style={{ 
            border: "1px solid #ddd", 
            padding: "15px", 
            margin: "10px",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9"
        }}>
            <h3>Titre: {book.title}</h3>
            <p>Auteur: {book.author}</p>
            <p>Prix: {book.price} €</p>
            <p>Catégorie: {book.categorie?.name || "Non catégorisé"}</p>
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <Link to={`/books/details/${book._id}`}>
                    <button style={{ padding: "5px 10px", backgroundColor: "#3498db", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                        Détails
                    </button>
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                    <button style={{ padding: "5px 10px", backgroundColor: "#f39c12", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                        Modifier
                    </button>
                </Link>
                <button onClick={handleDelete} style={{ padding: "5px 10px", backgroundColor: "#e74c3c", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                    Supprimer
                </button>
            </div>
        </div>
    );
}