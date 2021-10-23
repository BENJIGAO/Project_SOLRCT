import express from 'express';

import { createSchools, getSchools, updateSchool } from '../controllers/schools.js';

const router = express.Router();

// http://localhost:5000/posts

router.get('/', getSchools);
router.post('/', createSchools);
router.patch('/:id', updateSchool)

export default router;