import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import supplierRouter from './routes/suppliers.js';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.Mongodb).then(() => console.log('MongoDB connected')).catch(err => console.error(err));

app.use('/api/suppliers', supplierRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
