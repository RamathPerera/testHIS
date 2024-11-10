import express from 'express';
import { createUser, getUserById, getAllUsers, updateUser, deleteUser } from '../controllers/crudController.js'
import { isAuthorize  } from '../middlewares/auth.js';

const router = express.Router();

router.post('/add', isAuthorize, createUser)
router.get('/get-one/:id', isAuthorize, getUserById)
router.get('/get-all', isAuthorize, getAllUsers)
router.put('/update/:id', isAuthorize, updateUser)
router.put('/delete/:id', isAuthorize, deleteUser)

export default router;