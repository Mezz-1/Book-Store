import { Link } from "react-router-dom";
import BookDetailsPage from "./BookDetailsPage";
import BookEditPage from "./BookEditPage";
import BookList from "../components/BookList";
import BookForm from "../components/BookForm";

export default function BookPage() {
  return (
    <>
      <BookForm/>
      <h1>Page principale des livres</h1>
      <BookList/>
      
   
    </>
  );
}
