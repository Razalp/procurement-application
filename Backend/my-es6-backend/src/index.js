import express from 'express';
import { PORT } from './config/dotenv.config.js';
import sampleRouter from './routes/sample.route.js';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/sample', sampleRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
