import { getCategories,addCategory } from "../controolers/categories_controller.js";
import express from 'express';
import { requireKeycloakAuth } from '../middleware/requireKeycloakAuth.js';
import { requireRole } from '../middleware/requireRole.js';
const router = express.Router();

// Apply authentication to all category routes
router.use(requireKeycloakAuth);

// CLIENT role can read categories
router.get('/', requireRole(['CLIENT', 'ADMIN']), getCategories);

// ADMIN role can add categories
router.post('/', requireRole(['ADMIN']), addCategory);

export default router;