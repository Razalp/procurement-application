import Supplier from "../model/Supplier.js";

export const createSupplier = async (req, res) => {
    try {
      const lastSupplier = await Supplier.findOne().sort({ supplierNo: -1 });
      const supplierNo = lastSupplier ? lastSupplier.supplierNo + 1 : 1;
      const supplier = new Supplier({ ...req.body, supplierNo });
      const savedSupplier = await supplier.save();
      res.status(201).json(savedSupplier);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // Get all suppliers
  export const getAllSuppliers = async (req, res) => {
    try {
      const suppliers = await Supplier.find();
      res.json(suppliers);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // Get a supplier by ID
  export const getSupplierById = async (req, res) => {
    try {
      const supplier = await Supplier.findById(req.params.id);
      res.json(supplier);
    } catch (err) {
      res.status(404).json({ error: 'Supplier not found' });
    }
  };
  
  // Update a supplier
  export const updateSupplier = async (req, res) => {
    try {
      const updatedSupplier = await Supplier.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedSupplier);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // Delete (mark as inactive) a supplier
  export const deleteSupplier = async (req, res) => {
    try {
      const updatedSupplier = await Supplier.findByIdAndUpdate(req.params.id, { status: 'Inactive' }, { new: true });
      res.json(updatedSupplier);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };