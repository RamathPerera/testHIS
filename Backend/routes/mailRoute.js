import express from 'express';
import mailController from '../controllers/mailController.js'

const router = express.Router();

router.post('/mail', mailController);

export default router;