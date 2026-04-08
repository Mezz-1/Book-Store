import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import BookPage from "./pages/BookPage";
import BookEditPage from "./pages/BookEditPage";
import BookDetailsPage from "./pages/BookDetailsPage";
import MainLayout from "./components/MainLayout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import CategoryPage from "./pages/CategoryPage";
import { useAuth } from "./auth/KeycloakProvider";

function App(props) {
  const { authenticated, loading } = useAuth();
  const [compteur, setCompteur] = useState(0);
  const [livre, setLivre] = useState("Le Petit Prince");
  const [books, setBooks] = useState([]);
  
  useEffect(() => {}, []);

  if (loading) {
    return <div>Loading authentication...</div>;
  }

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={authenticated ? <BookPage /> : <HomePage />} />
        <Route path="/books/edit/:id" element={authenticated ? <BookEditPage /> : <HomePage />} />
        <Route path="/books/details/:id" element={authenticated ? <BookDetailsPage /> : <HomePage />} />
        <Route path="/categories" element={authenticated ? <CategoryPage /> : <HomePage />} />
        <Route path="/books/details/:id" element={<BookDetailsPage />} />
        <Route path="/books/edit/:id" element={<BookEditPage />} />
      </Route>
    </Routes>
  );
}

export default App;