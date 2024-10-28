import express from 'express';
import { createSupplier, getAllSuppliers, getSupplierById, updateSupplier, deleteSupplier } from '../controllers/supplierController.js';

const supplierRouter = express.Router();

supplierRouter.post('/createSupplier', createSupplier);
supplierRouter.get('/getAllSuppliers', getAllSuppliers);
supplierRouter.get('/getSupplierById/:id', getSupplierById);
supplierRouter.put('/updateSupplier/:id', updateSupplier);
supplierRouter.delete('/updateSupplier/:id', deleteSupplier);

export default supplierRouter;
