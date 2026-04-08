import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getbook, deletebook } from "../api/booksApi";

export default function BookDetailsPage() {
    const { id } = useParams(); // Récupère l'ID du livre depuis l'URL
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
            const books = await getbook(); // Récupère tous les livres
            const foundBook = books.find(b => b._id === id); // Trouve le livre par ID
            
            if (foundBook) {
                setBook(foundBook);
            } else {
                setError("Livre non trouvé");
            }
        } catch (error) {
            console.error("Erreur lors du chargement:", error);
            setError("Impossible de charger les détails du livre");
        } finally {
            setLoading(false);
        }
    }

    async function handleDelete() {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer ce livre ?")) {
            try {
                await deletebook(id);
                alert("Livre supprimé avec succès !");
                navigate("/books"); // Redirige vers la liste des livres
            } catch (error) {
                console.error("Erreur lors de la suppression:", error);
                alert("Erreur lors de la suppression du livre");
            }
        }
    }

    if (loading) {
        return <div style={{ textAlign: "center", padding: "50px" }}>Chargement des détails...</div>;
    }

    if (error) {
        return (
            <div style={{ textAlign: "center", padding: "50px", color: "red" }}>
                <h2>Erreur</h2>
                <p>{error}</p>
                <Link to="/books">
                    <button style={{ padding: "10px 20px", backgroundColor: "#3498db", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                        Retour à la liste
                    </button>
                </Link>
            </div>
        );
    }

    if (!book) {
        return (
            <div style={{ textAlign: "center", padding: "50px" }}>
                <h2>Livre non trouvé</h2>
                <Link to="/books">
                    <button style={{ padding: "10px 20px", backgroundColor: "#3498db", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                        Retour à la liste
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
            <h1 style={{ color: "#2c3e50", borderBottom: "3px solid #3498db", paddingBottom: "10px" }}>
                📖 Détails du Livre
            </h1>
            
            <div style={{ 
                backgroundColor: "#f8f9fa", 
                padding: "30px", 
                borderRadius: "10px",
                marginTop: "20px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
            }}>
                <div style={{ marginBottom: "20px" }}>
                    <strong style={{ fontSize: "1.1rem", color: "#2c3e50" }}>Titre :</strong>
                    <p style={{ fontSize: "1.2rem", marginTop: "5px" }}>{book.title}</p>
                </div>
                
                <div style={{ marginBottom: "20px" }}>
                    <strong style={{ fontSize: "1.1rem", color: "#2c3e50" }}>Auteur :</strong>
                    <p style={{ fontSize: "1.2rem", marginTop: "5px" }}>{book.author}</p>
                </div>
                
                <div style={{ marginBottom: "20px" }}>
                    <strong style={{ fontSize: "1.1rem", color: "#2c3e50" }}>Prix :</strong>
                    <p style={{ fontSize: "1.2rem", marginTop: "5px", color: "#27ae60" }}>
                        {book.price} €
                    </p>
                </div>
                
                <div style={{ marginBottom: "20px" }}>
                    <strong style={{ fontSize: "1.1rem", color: "#2c3e50" }}>Catégorie :</strong>
                    <p style={{ fontSize: "1.2rem", marginTop: "5px" }}>
                        {book.categorie?.name || "Non catégorisé"}
                    </p>
                </div>
                
                <div style={{ marginBottom: "20px" }}>
                    <strong style={{ fontSize: "1.1rem", color: "#2c3e50" }}>Date de publication :</strong>
                    <p style={{ fontSize: "1.2rem", marginTop: "5px" }}>
                        {book.published_at ? new Date(book.published_at).toLocaleDateString("fr-FR") : "Non spécifiée"}
                    </p>
                </div>
            </div>
            
            <div style={{ 
                display: "flex", 
                gap: "15px", 
                marginTop: "30px",
                justifyContent: "center"
            }}>
                <Link to="/books">
                    <button style={{
                        padding: "10px 20px",
                        backgroundColor: "#95a5a6",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}>
                        ← Retour à la liste
                    </button>
                </Link>
                
                <Link to={`/books/edit/${book._id}`}>
                    <button style={{
                        padding: "10px 20px",
                        backgroundColor: "#3498db",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}>
                        ✏️ Modifier
                    </button>
                </Link>
                
                <button 
                    onClick={handleDelete}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#e74c3c",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}
                >
                    🗑️ Supprimer
                </button>
            </div>
        </div>
    );
}