import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getbook, updatebook } from "../api/booksApi";
import { getCategories } from "../api/categoriesApi";

export default function BookEditPage() {
  const { id } = useParams(); // Récupère l'ID du livre depuis l'URL
  const navigate = useNavigate();
  
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Charger les données du livre et des catégories
  useEffect(() => {
    loadBookAndCategories();
  }, [id]);

  async function loadBookAndCategories() {
    try {
      setLoading(true);
      
      // Charger les catégories
      const categoriesResp = await getCategories();
      setCategories(categoriesResp.data);
      
      // Charger le livre à modifier
      const books = await getbook();
      const book = books.find(b => b._id === id);
      
      if (book) {
        setTitle(book.title);
        setAuthor(book.author);
        setPrice(book.price);
        setCategoryId(book.categorie?._id || "");
      } else {
        setError("Livre non trouvé");
      }
    } catch (error) {
      console.error("Erreur de chargement:", error);
      setError("Impossible de charger les données");
    } finally {
      setLoading(false);
    }
  }

  async function handleUpdate(e) {
    e.preventDefault();
    
    // Validation des champs
    if (!title.trim()) {
      alert("Le titre est requis");
      return;
    }
    if (!author.trim()) {
      alert("L'auteur est requis");
      return;
    }
    if (!price || price <= 0) {
      alert("Le prix doit être un nombre positif");
      return;
    }
    
    const updatedBook = {
      title: title.trim(),
      author: author.trim(),
      price: parseFloat(price),
      categorie: categoryId || null
    };
    
    console.log("Données envoyées pour modification:", updatedBook);
    
    try {
      await updatebook(id, updatedBook);
      alert("✅ Livre modifié avec succès !");
      navigate(`/books/details/${id}`); // Redirige vers les détails
    } catch (error) {
      console.error("Erreur lors de la modification:", error);
      alert("❌ Erreur lors de la modification du livre");
    }
  }

  if (loading) {
    return <div style={{ textAlign: "center", padding: "50px" }}>Chargement du formulaire...</div>;
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "50px", color: "red" }}>
        <h2>Erreur</h2>
        <p>{error}</p>
        <Link to="/books">Retour à la liste</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ color: "#2c3e50", borderBottom: "3px solid #3498db", paddingBottom: "10px" }}>
        ✏️ Modifier le Livre
      </h1>
      
      <form onSubmit={handleUpdate} style={{ marginTop: "30px" }}>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
            Titre :
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              fontSize: "1rem"
            }}
          />
        </div>
        
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
            Auteur :
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              fontSize: "1rem"
            }}
          />
        </div>
        
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
            Prix (€) :
          </label>
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              fontSize: "1rem"
            }}
          />
        </div>
        
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
            Catégorie :
          </label>
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              fontSize: "1rem"
            }}
          >
            <option value="">Sélectionner une catégorie</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        
        <div style={{ display: "flex", gap: "15px", marginTop: "30px" }}>
          <Link to={`/books/details/${id}`}>
            <button
              type="button"
              style={{
                padding: "10px 20px",
                backgroundColor: "#95a5a6",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Annuler
            </button>
          </Link>
          
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#3498db",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              flex: 1
            }}
          >
            💾 Enregistrer les modifications
          </button>
        </div>
      </form>
    </div>
  );
}