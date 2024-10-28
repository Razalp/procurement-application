import Supplier from "../model/Supplier.js";

export const createSupplier = async (req, res) => {
    try {
      const lastSupplier = await Supplier.findOne().sort({ supplierNo: -1 });
      const supplierNo = lastSupplier ? lastSupplier.supplierNo + 1 : 1;
      const supplier = new Supplier({ ...req.body, supplierNo });
      const savedSupplier = await supplier.save();
      console.log(savedSupplier);
      res.status(201).json(savedSupplier);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };