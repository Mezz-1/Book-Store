import express from 'express';
import { requireKeycloakAuth } from '../middleware/requireKeycloakAuth.js';
import { requireRole } from '../middleware/requireRole.js';
import {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
} from '../controolers/book_controller.js';

const router = express.Router();

// Apply authentication to all book routes
router.use(requireKeycloakAuth);

// CLIENT role can GET and POST
router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', requireRole(['CLIENT', 'ADMIN']), createBook);

//avec verification
// router.put('/:id', requireRole(['ADMIN']), updateBook);
// router.delete('/:id', requireRole(['ADMIN']), deleteBook);
// ADMIN role only for PUT and DELETE
router.put('/:id', updateBook);  // Sans vérification
router.delete('/:id', deleteBook); // Sans vérification

export default router;