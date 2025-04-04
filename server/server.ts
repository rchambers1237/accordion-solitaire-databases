import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/routes'; 

dotenv.config(); // Load environment variables from .env file

const app: Express = express();
const port = process.env.PORT || 5371;

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

// MongoDB Connection
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.error('MONGO_URI environment variable is not defined.');
  process.exit(1);
}

mongoose.connect(mongoUri)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB:', err));

// Routes
app.use('/api/users', userRoutes); // Mount user routes under /api/users

app.get('/', (req: Request, res: Response) => {
  res.send('Express server is running!');
});

app.listen(port, () => {
  console.info(`Server is running on port ${port}`);
});