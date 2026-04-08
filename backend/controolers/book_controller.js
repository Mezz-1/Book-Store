import Book from '../models/Books.js';
import Categorie from '../models/Categorie.js';

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().populate('categorie');
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch books', details: err.message });
  }
}

const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate('categorie');
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch the book', details: err.message });
  }
}

const createBook = async (req, res) => {
  try {
    console.log("Creating book with:", req.body); // Debug
    
    // Validate category exists if provided
    if (req.body.categorie) {
      const categoryExists = await Categorie.findById(req.body.categorie);
      if (!categoryExists) {
        return res.status(400).json({ error: 'Category not found' });
      }
    }
    
    const book = new Book(req.body);
    const saved = await book.save();
    
    // Populate the category before returning
    const populatedBook = await Book.findById(saved._id).populate('categorie');
    
    res.status(201).json(populatedBook);
  } catch (err) {
    console.error("Error:", err);
    res.status(400).json({ error: 'Failed to create book', details: err.message });
  }
}

const updateBook = async (req, res) => {
  try {
    const updated = await Book.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true }
    ).populate('categorie');
    
    if (!updated) return res.status(404).json({ error: 'Book not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update book', details: err.message });
  }
}

const deleteBook = async (req, res) => {
  try {
    const deleted = await Book.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Book not found' });
    res.json({ message: 'Livre supprimé avec succès', book: deleted });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete book', details: err.message });
  }
}

export { getAllBooks, getBookById, createBook, updateBook, deleteBook };