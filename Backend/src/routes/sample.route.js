import express from 'express';
import { getSampleData } from '../controllers/sample.controller.js';

const router = express.Router();

router.get('/', getSampleData);

export default router;
