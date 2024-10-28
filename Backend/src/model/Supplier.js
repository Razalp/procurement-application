import mongoose from 'mongoose';

const supplierSchema = new mongoose.Schema({
  supplierNo: { type: Number, required: true, unique: true },
  supplierName: { type: String, required: true },
  address: { type: String, required: true },
  taxNo: { type: String, required: true },
  country: { type: String, required: true },
  mobileNo: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  status: { type: String, enum: ['Active', 'Inactive', 'Blocked'], default: 'Active' },
});

export default mongoose.model('Supplier', supplierSchema);
