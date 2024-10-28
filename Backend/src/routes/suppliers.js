import express from 'express';
import { createSupplier } from '../controllers/supplierController.js';

const supplierRouter = express.Router();

supplierRouter.post('/create', createSupplier);

export default supplierRouter;
